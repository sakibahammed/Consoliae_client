import Reveal from "./Reveal";

const LAYERS = [
  {
    color: "var(--c-steel)",
    title: "Languages and runtimes",
    items:
      "TypeScript · Go · Python · Rust (where it earns it) · Swift · Kotlin · Node · Bun",
  },
  {
    color: "var(--c-teal)",
    title: "AI and ML",
    items:
      "Claude · open-weight models via vLLM · LangGraph · Temporal · Ray · MLflow · Braintrust evals · Weights & Biases",
  },
  {
    color: "var(--c-indigo)",
    title: "Data",
    items:
      "Postgres · pgvector · Qdrant · Kafka · Redis · ClickHouse · Snowflake · dbt · Dagster",
  },
  {
    color: "var(--c-sage)",
    title: "Infrastructure",
    items:
      "Kubernetes · Terraform · AWS · GCP · Cloudflare · Argo · GitHub Actions · Grafana · Prometheus · OpenTelemetry",
  },
  {
    color: "var(--c-clay)",
    title: "Frontend",
    items: "React · Next.js · Astro · React Native · Tailwind · Playwright · Vitest",
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      aria-labelledby="h-stack"
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
        <h2 id="h-stack" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          Stack, by layer
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
          gap: 32,
        }}
      >
        {LAYERS.map((l, i) => (
          <Reveal key={l.title} delay={i * 0.05}>
            <h3 style={{ fontSize: 16, margin: "0 0 12px", color: l.color }}>{l.title}</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.9, color: "var(--body)" }}>
              {l.items}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
