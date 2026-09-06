import Reveal from "./Reveal";

const COUNTRIES = [
  { name: "United States", n: 3, systems: "Hello Doorstep, Kreators Lab, AuraSolveAI" },
  { name: "Canada", n: 1, systems: "Iron Depot" },
  { name: "Norway", n: 2, systems: "Unite Living, Katria" },
  { name: "Bangladesh", n: 1, systems: "Omidnetcare" },
  { name: "United Kingdom", n: 1, systems: "ShareViral" },
  { name: "United States (health)", n: 1, systems: "Chordline FHIR Bridge" },
];

export default function Reach() {
  return (
    <section
      id="reach"
      aria-labelledby="h-reach"
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
        <h2 id="h-reach" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          Where the systems run
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "var(--dim)", maxWidth: 420, textAlign: "right" }}>
          Nine systems across five countries. Each one deployed in its own region, with data that does not leave it.
        </p>
      </div>
      <div className="blueprint" style={{ position: "relative", background: "var(--ink2)" }}>
        <i className="corner tl" />
        <i className="corner tr" />
        <i className="corner bl" />
        <i className="corner br" />
        <iframe
          src="/client-map.html"
          title="World map of countries where Consoliae systems run"
          loading="lazy"
          style={{
            display: "block",
            width: "100%",
            height: "clamp(360px, 62vw, 560px)",
            border: 0,
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))",
          gap: 1,
          marginTop: 1,
        }}
      >
        {COUNTRIES.map((c, i) => (
          <Reveal
            key={c.name}
            delay={i * 0.04}
            style={{
              background: "var(--ink2)",
              outline: "1px solid var(--line)",
              padding: "14px 16px",
            }}
          >
            <p style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 17 }}>{c.name}</p>
            <p className="tnum" style={{ margin: "2px 0 0", fontSize: 12.5, color: "var(--live)" }}>
              {c.n} system{c.n === 1 ? "" : "s"}
            </p>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: "var(--dim)" }}>{c.systems}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
