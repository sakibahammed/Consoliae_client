import Reveal from "./Reveal";

type Cap = {
  title: string;
  desc: string;
  stack: string;
  color: string;
  tint: string;
  wide?: boolean;
  icon: React.ReactNode;
  size?: "lg" | "md";
};

const CAPS: Cap[] = [
  {
    title: "AI agents",
    desc: "Agents that use tools, call your systems, and do work end to end. Retrieval, evaluation, guardrails, cost control — the parts that decide whether an agent is a demo or a dependency.",
    stack: "Claude · LangGraph · Temporal · pgvector · Braintrust · OpenTelemetry",
    color: "var(--c-teal)",
    tint: "var(--t-teal)",
    wide: true,
    size: "lg",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--c-teal)" strokeWidth="1.5" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" />
        <path d="M12 2v5M12 17v5M2 12h5M17 12h5M4.5 4.5l3 3M19.5 4.5l-3 3M4.5 19.5l3-3M19.5 19.5l-3-3" />
      </svg>
    ),
  },
  {
    title: "ML infrastructure",
    desc: "Training and inference pipelines, model serving, vector stores, monitoring for drift and spend.",
    stack: "Ray · vLLM · Modal · Weights & Biases · Qdrant",
    color: "var(--c-indigo)",
    tint: "var(--t-indigo)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-indigo)" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 6h18M3 12h18M3 18h18" />
        <rect x="6" y="3" width="4" height="6" />
        <rect x="14" y="9" width="4" height="6" />
        <rect x="8" y="15" width="4" height="6" />
      </svg>
    ),
  },
  {
    title: "Applications",
    desc: "Web and mobile products, built to be handed over — tested, documented, and yours.",
    stack: "TypeScript · React · React Native · Swift · Playwright",
    color: "var(--c-clay)",
    tint: "var(--t-clay)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-clay)" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
  },
  {
    title: "Backend engineering",
    desc: "APIs, data models, queues, and the services that hold a product together under load.",
    stack: "Go · Python · Postgres · Kafka · Redis · gRPC",
    color: "var(--c-sand)",
    tint: "var(--t-sand)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-sand)" strokeWidth="1.5" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
  },
  {
    title: "Deployment and servers",
    desc: "Containers, orchestration, infrastructure as code, CI/CD. We put it live and we keep it live.",
    stack: "Kubernetes · Terraform · GitHub Actions · AWS · Grafana",
    color: "var(--c-sage)",
    tint: "var(--t-sage)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-sage)" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="3" width="8" height="8" />
        <rect x="13" y="3" width="8" height="8" />
        <rect x="3" y="13" width="8" height="8" />
        <rect x="13" y="13" width="8" height="8" />
      </svg>
    ),
  },
  {
    title: "Websites",
    desc: "Marketing sites and platforms that load fast and rank. This page scores 98 on mobile Lighthouse.",
    stack: "Next.js · Astro · Cloudflare · Sanity",
    color: "var(--c-plum)",
    tint: "var(--t-plum)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c-plum)" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
      </svg>
    ),
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      aria-labelledby="h-cap"
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
          marginBottom: 32,
          flexWrap: "wrap",
        }}
      >
        <h2 id="h-cap" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          What we actually do
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "var(--dim)", maxWidth: 380, textAlign: "right" }}>
          Six practices. The stack under each one is the stack we work in daily, not a capability slide.
        </p>
      </div>

      <div
        className="cap-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: 1,
        }}
      >
        {CAPS.map((c, i) => (
          <Reveal
            key={c.title}
            as="article"
            delay={i * 0.05}
            style={{
              borderTop: `3px solid ${c.color}`,
              background: c.tint,
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: c.size === "lg" ? 14 : 12,
              minWidth: 0,
              outline: "1px solid var(--line)",
              gridColumn: c.wide ? "span 2" : "auto",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {c.icon}
              <h3 style={{ fontSize: c.size === "lg" ? 26 : 21, margin: 0 }}>{c.title}</h3>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: c.size === "lg" ? 15.5 : 14,
                lineHeight: 1.55,
                color: c.size === "lg" ? "var(--body)" : "var(--body2)",
                maxWidth: c.size === "lg" ? 520 : undefined,
              }}
            >
              {c.desc}
            </p>
            <p
              style={{
                margin: "auto 0 0",
                fontSize: c.size === "lg" ? 12.5 : 12,
                color: "var(--dim)",
                fontFamily: "ui-monospace, Menlo, monospace",
              }}
            >
              {c.stack}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
