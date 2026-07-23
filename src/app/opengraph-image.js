import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1C2E4A 0%, #111E30 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 20,
              background: "#2BA89A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 46,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            DC
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            David Cappelletto
          </div>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#3DBFB2",
            fontWeight: 600,
          }}
        >
          Consulenza Digitale · UX · SEO Locale · Automazioni AI
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          davidcappelletto.it
        </div>
      </div>
    ),
    { ...size }
  );
}
