import Reveal from "./Reveal";

const FITS = [
  {
    title: "You have a prototype",
    body: "It works on your laptop and in the demo. We turn it into a service with tests, limits, monitoring and an owner — without rewriting the idea out of it.",
    accent: "var(--c-teal)",
    tint: "var(--t-teal)",
  },
  {
    title: "You are running something you can no longer maintain",
    body: "Someone left, the deploy is manual, nobody knows why the queue backs up on Mondays. We take it over, document it, and stabilise it before we change it.",
    accent: "var(--c-clay)",
    tint: "var(--t-clay)",
  },
  {
    title: "You are adding AI to a product that already works",
    body: "The risk is not the model, it is what happens when it is wrong. We build the evaluation, the guardrails and the cost ceiling first.",
    accent: "var(--c-indigo)",
    tint: "var(--t-indigo)",
  },
];

export default function Fit() {
  return (
    <section
      id="fit"
      aria-labelledby="h-fit"
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "clamp(56px,9vw,110px) clamp(14px,4vw,28px) 0",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid var(--line)",
          paddingBottom: 14,
          marginBottom: 32,
        }}
      >
        <h2 id="h-fit" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          Who this is for
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          gap: 32,
        }}
      >
        {FITS.map((f, i) => (
          <Reveal
            key={f.title}
            delay={i * 0.06}
            style={{
              borderLeft: `3px solid ${f.accent}`,
              background: f.tint,
              padding: "22px 22px 24px",
            }}
          >
            <h3 style={{ fontSize: 22, margin: "0 0 10px" }}>{f.title}</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--body2)" }}>
              {f.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
