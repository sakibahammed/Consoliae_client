export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 120,
        borderTop: "1px solid var(--line2)",
        background: "var(--ink)",
      }}
    >
      <div style={{ padding: "34px 24px 0" }}>
        <svg
          viewBox="0 0 1000 200"
          width="100%"
          role="img"
          aria-label="Consoliae"
          style={{ display: "block", overflow: "visible" }}
        >
          <text
            x="0"
            y="182"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fontFamily="var(--font-heading)"
            fontWeight={600}
            fontSize={250}
            fill="var(--color-text)"
          >
            consoliae
          </text>
        </svg>
      </div>
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "clamp(28px,5vw,44px) clamp(14px,4vw,28px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
          gap: 36,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
            <span
              style={{
                position: "relative",
                width: 14,
                height: 14,
                border: "1px solid var(--steel)",
                display: "inline-block",
              }}
            >
              <span style={{ position: "absolute", inset: 3.5, background: "var(--live)" }} />
            </span>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: 19 }}>consoliae</span>
          </div>
          <p style={{ margin: "0 0 14px", fontSize: 13, color: "var(--dim)", maxWidth: 220 }}>
            Intelligent systems. Simplified. Four years of building things that stay up.
          </p>
          <p style={{ margin: 0, display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "var(--live)" }}>
            <span
              style={{
                width: 7,
                height: 7,
                background: "var(--live)",
                animation: "cblink 2.6s ease-in-out infinite",
              }}
            />
            <span className="tnum">All systems operational — 99.98% / 90d</span>
          </p>
        </div>
        <nav aria-label="Site">
          <h2
            style={{
              fontSize: 13,
              color: "var(--dim)",
              margin: "0 0 12px",
              fontFamily: "var(--font-body)",
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}
          >
            Site
          </h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
            <li><a href="#capabilities" style={{ textDecoration: "none" }}>Capabilities</a></li>
            <li><a href="#work" style={{ textDecoration: "none" }}>Work</a></li>
            <li><a href="#process" style={{ textDecoration: "none" }}>Process</a></li>
            <li><a href="#reach" style={{ textDecoration: "none" }}>Where systems run</a></li>
            <li><a href="#estimator" style={{ textDecoration: "none" }}>Estimator</a></li>
            <li><a href="#faq" style={{ textDecoration: "none" }}>FAQ</a></li>
          </ul>
        </nav>
        <div>
          <h2
            style={{
              fontSize: 13,
              color: "var(--dim)",
              margin: "0 0 12px",
              fontFamily: "var(--font-body)",
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}
          >
            Contact
          </h2>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8, fontSize: 14 }}>
            <li><a href="mailto:info@consoliae.com" style={{ textDecoration: "none" }}>info@consoliae.com</a></li>
            <li style={{ color: "var(--dim)" }}>Remote — UTC−5 to UTC+5:30</li>
            <li><a href="https://github.com" style={{ textDecoration: "none" }}>GitHub</a></li>
            <li><a href="https://linkedin.com" style={{ textDecoration: "none" }}>LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "16px clamp(14px,4vw,28px) 40px",
          borderTop: "1px solid var(--line)",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          justifyContent: "space-between",
          fontSize: 12.5,
          color: "var(--dim)",
        }}
      >
        <span>© 2026 Consoliae. Registered in England.</span>
        <span style={{ display: "flex", gap: 18 }}>
          <a href="#top" style={{ textDecoration: "none" }}>Back to top</a>
        </span>
      </div>
    </footer>
  );
}
