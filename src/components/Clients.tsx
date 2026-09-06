import Reveal from "./Reveal";

const QUOTES = [
  {
    quote:
      "“They spent the first two weeks telling us which half of our plan was wrong. That conversation saved us a quarter.”",
    who: "Ines Karlsson",
    role: "CTO, Meridian",
    metric: "−74% manual review time",
    tint: "var(--t-teal)",
  },
  {
    quote:
      "“Our dispatch queue used to page someone every Monday. It has not paged anyone since March.”",
    who: "Tom Aldiss",
    role: "VP Engineering, Halyard",
    metric: "p99 4.1 s → 340 ms",
    tint: "var(--t-sand)",
  },
  {
    quote:
      "“The eval suite is the thing I did not know to ask for. We ship prompt changes on a Friday now.”",
    who: "Priya Raghunathan",
    role: "Founder, Ravel",
    metric: "61% first-touch resolution",
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
            key={q.who}
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
              <span style={{ display: "block", color: "var(--color-text)" }}>{q.who}</span>
              {q.role}
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
