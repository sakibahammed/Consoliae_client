import Reveal from "./Reveal";

type Country = {
  name: string;
  region: string;
  systems: { name: string; note: string }[];
};

const COUNTRIES: Country[] = [
  {
    name: "United States",
    region: "North America · us-east / us-west",
    systems: [
      { name: "Hello Doorstep", note: "Resident apps + dispatch backend · 70+ TX communities" },
      { name: "AuraSolveAI", note: "4 AI-agent products on one hub" },
      { name: "Kreators Lab", note: "AI camp for kids · Next.js + Firebase + Stripe" },
      { name: "Chordline FHIR Bridge", note: "CMS-0057-F prior authorization · 11 FHIR endpoints" },
    ],
  },
  {
    name: "Canada",
    region: "North America · ca-central",
    systems: [
      { name: "Iron Depot", note: "Heavy equipment marketplace + financing · $60M+ financed" },
    ],
  },
  {
    name: "United Kingdom",
    region: "Europe · eu-west",
    systems: [
      { name: "ShareViral", note: "Creator campaigns + Stripe payouts · web + native" },
    ],
  },
  {
    name: "Norway",
    region: "Europe · eu-north",
    systems: [
      { name: "Unite Living", note: "Digital tenant management · listings, e-signing, deposits" },
      { name: "Katria", note: "Restaurant point of service · POS, take-away, reporting" },
    ],
  },
  {
    name: "Bangladesh",
    region: "South Asia · ap-south",
    systems: [
      { name: "Omidnetcare", note: "EMR + hospital management · HL7 / FHIR / DICOM" },
    ],
  },
];

const TOTAL_SYSTEMS = COUNTRIES.reduce((a, c) => a + c.systems.length, 0);

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
        className="sec-head"
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
          {TOTAL_SYSTEMS} systems across {COUNTRIES.length} countries. Each one deployed in its
          own region, with data that does not leave it.
        </p>
      </div>

      <div
        className="blueprint"
        style={{
          position: "relative",
          background: "var(--ink2)",
          border: "1px solid var(--line)",
          marginBottom: 24,
        }}
      >
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
            height: "clamp(300px, 55vw, 520px)",
            border: 0,
          }}
        />
      </div>

      <details style={{ marginTop: 8 }}>
        <summary
          style={{
            cursor: "pointer",
            listStyle: "none",
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "var(--dim)",
            padding: "6px 0",
          }}
        >
          Show the full country breakdown ↓
        </summary>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: 1, marginTop: 12 }}>
          {COUNTRIES.map((c, i) => (
            <Reveal
              key={c.name}
              delay={i * 0.05}
              className="country-card"
              style={{
                background: "var(--ink2)",
                outline: "1px solid var(--line)",
                padding: "22px 24px",
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(0, 3fr)",
                gap: 24,
                alignItems: "start",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    aria-hidden="true"
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      background: "var(--live)",
                      boxShadow: "0 0 0 3px rgba(31,122,85,.18)",
                    }}
                  />
                  <h3 style={{ margin: 0, fontFamily: "var(--font-heading)", fontSize: 22 }}>
                    {c.name}
                  </h3>
                </div>
                <p className="tnum" style={{ margin: "6px 0 0", fontSize: 13, color: "var(--live)" }}>
                  {c.systems.length} system{c.systems.length === 1 ? "" : "s"}
                </p>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: 12,
                    color: "var(--dim)",
                    fontFamily: "ui-monospace, Menlo, monospace",
                  }}
                >
                  {c.region}
                </p>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  minWidth: 0,
                }}
              >
                {c.systems.map((s) => (
                  <li
                    key={s.name}
                    className="country-row"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)",
                      gap: 16,
                      borderTop: "1px solid var(--line)",
                      paddingTop: 8,
                      fontSize: 14,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--c-steel)",
                        minWidth: 0,
                      }}
                    >
                      {s.name}
                    </span>
                    <span style={{ color: "var(--body2)", minWidth: 0 }}>{s.note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </details>
    </section>
  );
}
