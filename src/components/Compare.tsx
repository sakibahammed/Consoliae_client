import Reveal from "./Reveal";

const ROWS: [string, string, string, string][] = [
  ["Time to first deploy", "3–6 months, after hiring", "2–4 weeks, if you scope it well", "3 weeks from signature"],
  ["Cost profile", "Lowest per year, highest to start", "Lowest for small scoped work", "Higher rate, shorter duration"],
  ["Ownership of code", "Yours, and the knowledge stays", "Yours, knowledge often leaves", "Yours, with handover documentation"],
  ["Who is on call at 3am", "Your team, once it exists", "Usually nobody", "Our rota, 15-minute response on Sev-1"],
  ["What happens when it scales", "Depends who you hired", "Rescope, or re-hire", "We have done it before, at this stack"],
  ["Hiring risk", "A bad senior hire costs two quarters", "Low, but so is commitment", "None; you end the contract"],
  ["Long-term ownership", "The clear winner", "Weak", "We plan our own exit into your team"],
  ["Small scoped work", "Overkill", "The clear winner", "We will tell you to hire a freelancer"],
  ["Breadth on day one", "One specialism per hire", "One specialism", "Backend, ML, mobile, infrastructure"],
];

export default function Compare() {
  return (
    <section
      id="compare"
      aria-labelledby="h-comp"
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
          marginBottom: 24,
          flexWrap: "wrap",
        }}
      >
        <h2 id="h-comp" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          Us, freelancers, or hiring
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "var(--dim)" }}>
          We lose two of these rows. They are still the right answer sometimes.
        </p>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ minWidth: 720, width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead>
            <tr>
              <th scope="col" style={{ width: "22%" }} />
              <th scope="col" style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>
                Hiring in-house
              </th>
              <th scope="col" style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>
                Freelancers
              </th>
              <th scope="col" style={{ textAlign: "left", padding: "10px 12px", borderBottom: "1px solid var(--line)", color: "var(--live)" }}>
                Consoliae
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(([label, a, b, c]) => (
              <tr key={label}>
                <th
                  scope="row"
                  style={{
                    textAlign: "left",
                    fontWeight: 500,
                    padding: "10px 12px",
                    borderBottom: "1px solid var(--line)",
                    color: "var(--color-text)",
                  }}
                >
                  {label}
                </th>
                <td style={{ color: "var(--body2)", padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>{a}</td>
                <td style={{ color: "var(--body2)", padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>{b}</td>
                <td style={{ padding: "10px 12px", borderBottom: "1px solid var(--line)" }}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
