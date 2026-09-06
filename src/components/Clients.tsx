import Reveal from "./Reveal";

const QUOTES = [
  {
    quote:
      "“Five nights a week, doorstep collection across seventy-plus Texas communities. Resident apps on iOS and Android, dispatch backend in the middle.”",
    role: "Operations, Hello Doorstep",
    metric: "70+ Texas communities served",
    tint: "var(--t-teal)",
  },
  {
    quote:
      "“EMR and hospital management in one platform, with HL7, FHIR and DICOM interoperability across our clinical systems.”",
    role: "Clinical operations, Omidnetcare",
    metric: "Live clinical deployments",
    tint: "var(--t-sand)",
  },
  {
    quote:
      "“Listings, e-signed contracts, deposits and rent billing on one system. Built for the Norwegian rental market.”",
    role: "Product, Unite Living",
    metric: "Norwegian rental market",
    tint: "var(--t-plum)",
  },
];

const LOGOS = [
  "Hello Doorstep",
  "Iron Depot",
  "Omidnetcare",
  "AuraSolveAI",
  "ShareViral",
  "Kreators Lab",
  "Unite Living",
  "Katria",
];

export default function Clients() {
  return (
    <section
      id="clients"
      aria-labelledby="h-cli"
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "clamp(56px,9vw,110px) clamp(14px,4vw,28px) 0",
      }}
    >
      <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: 14, marginBottom: 28 }}>
        <h2 id="h-cli" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          What they said, and what it did
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          gap: 1,
          marginBottom: 32,
        }}
      >
        {QUOTES.map((q, i) => (
          <Reveal
            key={q.role}
            as="article"
            delay={i * 0.06}
            style={{
              background: q.tint,
              margin: 0,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 16,
              minWidth: 0,
              outline: "1px solid var(--line)",
            }}
          >
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.5, color: "var(--color-text)" }}>
              {q.quote}
            </p>
            <footer style={{ marginTop: "auto", fontSize: 13, color: "var(--dim)" }}>
              <span style={{ display: "block", color: "var(--color-text)" }}>{q.role}</span>
              <span className="tnum" style={{ display: "block", marginTop: 8, color: "var(--live)" }}>
                {q.metric}
              </span>
            </footer>
          </Reveal>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 36,
          alignItems: "center",
          padding: "22px 0",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          fontFamily: "var(--font-heading)",
          fontSize: 19,
          color: "var(--dim)",
        }}
      >
        {LOGOS.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </section>
  );
}
