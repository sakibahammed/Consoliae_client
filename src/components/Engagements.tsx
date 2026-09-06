import Reveal from "./Reveal";

const CARDS = [
  {
    title: "Fixed-scope build",
    lead: "One system, one written scope, one date. Best when you know what you want and it will not move.",
    plus: [
      "Scope, architecture, build, deploy",
      "Test suite and handover documentation",
      "30 days of post-launch fixes",
    ],
    minus: ["No ongoing on-call", "Change requests re-scoped, not absorbed"],
    footer: "Commitment: 8–16 weeks, milestone billed.",
    tint: "var(--t-steel)",
    highlight: false,
  },
  {
    title: "Dedicated team",
    tag: "most common",
    lead: "Two to five of our engineers inside your process, by the month. Best when the destination will change on the way.",
    plus: [
      "Named engineers, your standups, your board",
      "Re-prioritise every two weeks",
      "A technical lead accountable for delivery",
    ],
    minus: [
      "No fixed launch date promise",
      "Not sub-team-sized; one engineer alone does not work",
    ],
    footer: "Commitment: 3 months minimum, 30 days' notice.",
    tint: "var(--t-sand)",
    highlight: true,
  },
  {
    title: "Operate and maintain",
    lead: "We keep a system alive — ours or someone else's. Best when the build is done and the risk is Tuesday morning.",
    plus: [
      "On-call rota with a 15-minute Sev-1 response",
      "Patching, dependency and cost review",
      "Monthly report on latency, spend and incidents",
    ],
    minus: [
      "Feature work billed separately",
      "We will not take on a system we cannot instrument",
    ],
    footer: "Commitment: rolling monthly, after a paid two-week audit.",
    tint: "var(--t-sage)",
    highlight: false,
  },
];

export default function Engagements() {
  return (
    <section
      id="engagements"
      aria-labelledby="h-eng"
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "clamp(56px,9vw,110px) clamp(14px,4vw,28px) 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 24,
          borderBottom: "1px solid var(--line)",
          paddingBottom: 14,
          marginBottom: 28,
          flexWrap: "wrap",
        }}
      >
        <h2 id="h-eng" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          Three ways to work with us
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "var(--dim)" }}>
          Priced per engagement after the scope, not from a table.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 290px), 1fr))",
          gap: 1,
        }}
      >
        {CARDS.map((c, i) => (
          <Reveal
            key={c.title}
            as="article"
            delay={i * 0.06}
            style={{
              background: c.tint,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              minWidth: 0,
              outline: c.highlight ? undefined : "1px solid var(--line)",
              borderTop: c.highlight ? "3px solid var(--c-sand)" : undefined,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <h3 style={{ fontSize: 24, margin: 0 }}>{c.title}</h3>
              {c.tag && (
                <span
                  style={{
                    border: "1px solid var(--live)",
                    color: "var(--live)",
                    fontSize: 11,
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                  }}
                >
                  {c.tag}
                </span>
              )}
            </div>
            <p style={{ margin: 0, fontSize: 14, color: "var(--body2)", lineHeight: 1.55 }}>{c.lead}</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 7, fontSize: 13.5 }}>
              {c.plus.map((p) => (
                <li key={p} style={{ display: "flex", gap: 9 }}>
                  <span style={{ color: "var(--live)" }}>+</span>
                  {p}
                </li>
              ))}
              {c.minus.map((m) => (
                <li key={m} style={{ display: "flex", gap: 9, color: "var(--dim)" }}>
                  <span style={{ color: "var(--load)" }}>−</span>
                  {m}
                </li>
              ))}
            </ul>
            <p style={{ margin: "auto 0 0", fontSize: 13, color: "var(--dim)" }}>{c.footer}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
