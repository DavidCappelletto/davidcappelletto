import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.QA_BASE_URL || 'http://127.0.0.1:3000';
const out = 'artifacts/portfolio-qa';
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
const report = [];
try {
  for (const width of [320, 390, 768, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const path of ['/', '/progetti', '/progetti/maybe-design', '/progetti/dentista-automazione']) {
      const response = await page.goto(`${base}${path}`, { waitUntil: 'networkidle' });
      assert.equal(response.status(), 200, `${path} at ${width}px`);
      const reject = page.getByRole('button', { name: 'Rifiuta', exact: true });
      if (await reject.isVisible()) await reject.click();
      await page.evaluate(async () => {
        for (const image of document.images) image.loading = 'eager';
        await document.fonts.ready;
        await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
      });
      const state = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        broken: [...document.images].filter(image => !image.naturalWidth).map(image => image.getAttribute('src')),
      }));
      assert.equal(state.overflow, false, `Horizontal overflow: ${path} at ${width}px`);
      assert.deepEqual(state.broken, [], `Broken images: ${path}`);
      if (path === '/') {
        assert.equal(await page.locator('.hp-maybe').isVisible(), width <= 820);
        assert.ok(await page.locator('a[href="/progetti/maybe-design"]').count());
      }
      if (path.endsWith('maybe-design')) {
        await page.getByText(/Le viste di accesso documentano/).waitFor();
      }
      if (path.endsWith('dentista-automazione')) {
        // Verify SVG text stays within its viewBox, independent of image scaling.
        for (const image of ['input', 'flow', 'validation', 'cover']) {
          const text = await (await page.request.get(`${base}/projects/dentista/${image}.svg`)).text();
          const bounds = await page.evaluate(source => {
            const holder = document.createElement('div');
            holder.innerHTML = source;
            document.body.append(holder);
            const svg = holder.querySelector('svg');
            const view = svg.viewBox.baseVal;
            const bad = [...svg.querySelectorAll('text')].filter(node => {
              const b = node.getBBox();
              return b.x < 0 || b.y < 0 || b.x + b.width > view.width || b.y + b.height > view.height;
            }).map(node => node.textContent);
            holder.remove();
            return bad;
          }, text);
          assert.deepEqual(bounds, [], `SVG text outside viewBox: ${image}`);
        }
      }
      await page.screenshot({ path: `${out}/${width}-${path === '/' ? 'home' : path.split('/').at(-1)}.png`, fullPage: true });
      report.push({ width, path, status: 'PASS', ...state });
      const menu = page.getByRole('button', { name: /^(Apri menu|Open menu)$/ });
      if (await menu.isVisible()) await menu.click();
      await page.getByRole('button', { name: 'EN', exact: true }).filter({ visible: true }).click();
      if (await menu.isVisible()) await menu.click();
      if (path.endsWith('maybe-design')) await page.getByText(/Entry screens document/).waitFor();
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, `English overflow: ${path}`);
      await page.screenshot({ path: `${out}/${width}-${path === '/' ? 'home' : path.split('/').at(-1)}-en.png`, fullPage: true });
      report.push({ width, path, language: 'en', status: 'PASS' });
    }
    assert.deepEqual(errors, [], `Browser errors at ${width}px`);
    await page.close();
  }
  await writeFile(`${out}/report.json`, JSON.stringify(report, null, 2));
  console.log(`PASS: ${report.length} responsive page checks; screenshot artifacts written.`);
} finally {
  await browser.close();
}
