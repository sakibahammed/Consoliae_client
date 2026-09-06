"use client";
import { useMemo, useState } from "react";

type ProjectType = "a" | "b" | "c" | "d";
type AiLevel = "a" | "b" | "c" | "d";
type Infra = "a" | "b" | "c";

const TYPE_BASE: Record<ProjectType, [number, number]> = {
  a: [6, 12],
  b: [10, 20],
  c: [8, 16],
  d: [5, 10],
};
const AI_ADD: Record<AiLevel, [number, number]> = {
  a: [0, 0],
  b: [3, 6],
  c: [6, 12],
  d: [10, 20],
};
const INFRA_MULT: Record<Infra, number> = { a: 1.0, b: 1.15, c: 1.25 };

export default function Estimator() {
  const [type, setType] = useState<ProjectType>("a");
  const [web, setWeb] = useState(true);
  const [ios, setIos] = useState(false);
  const [and, setAnd] = useState(false);
  const [api, setApi] = useState(true);
  const [ai, setAi] = useState<AiLevel>("c");
  const [infra, setInfra] = useState<Infra>("c");
  const [weeks, setWeeks] = useState(14);

  const noSurface = !web && !ios && !and && !api;
  const surfaceCount = [web, ios, and, api].filter(Boolean).length;

  const est = useMemo(() => {
    const [tl, th] = TYPE_BASE[type];
    const [al, ah] = AI_ADD[ai];
    const surfW = surfaceCount * 4;
    let low = Math.round((tl + al + surfW) * INFRA_MULT[infra]);
    let high = Math.round((th + ah + surfW * 1.5) * INFRA_MULT[infra]);
    if (low < 4) low = 4;
    if (high < low + 3) high = low + 3;
    const parallel = Math.max(2, Math.min(6, Math.round((low + high) / (weeks * 1.5))));
    const total = (low + high) / 2;
    const phases = [
      { name: "Scope", weeks: 2, color: "var(--c-steel)" },
      { name: "Architect", weeks: Math.max(2, Math.round(weeks * 0.15)), color: "var(--c-teal)" },
      { name: "Build", weeks: Math.max(4, Math.round(weeks * 0.55)), color: "var(--c-sand)" },
      { name: "Deploy", weeks: Math.max(1, Math.round(weeks * 0.1)), color: "var(--c-clay)" },
      { name: "Operate", weeks: Math.max(2, Math.round(weeks * 0.2)), color: "var(--c-sage)" },
    ];
    const sumW = phases.reduce((a, b) => a + b.weeks, 0);
    phases.forEach((p) => ((p as any).pct = `${Math.round((p.weeks / sumW) * 100)}%`));
    const team = [
      { name: "Tech lead", load: "half" },
      { name: "Backend / infra", load: `${Math.max(1, parallel - 2)}` },
      { name: ai === "a" ? "Frontend" : "ML / agents", load: "1" },
      { name: "QA / eval", load: "as needed" },
    ];
    return { low, high, parallel, phases, team, total };
  }, [type, ai, infra, surfaceCount, weeks]);

  const radio = (checked: boolean, onChange: () => void, label: string, name: string) => (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        cursor: "pointer",
        fontSize: 14,
      }}
    >
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        style={{ accentColor: "var(--live)" }}
      />
      {label}
    </label>
  );

  const chip = (active: boolean, onClick: () => void, label: string) => (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      style={{
        background: active ? "var(--t-teal)" : "transparent",
        border: `1px solid ${active ? "var(--live)" : "var(--line2)"}`,
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
        fontSize: 13,
        padding: "7px 13px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );

  return (
    <section
      id="estimator"
      aria-labelledby="h-est"
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
        <h2 id="h-est" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          Scope estimator
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "var(--dim)", maxWidth: 430, textAlign: "right" }}>
          Sized in engineer-weeks rather than currency, because effort is the honest unit
          before we have seen your code.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: 1,
        }}
      >
        <div
          style={{
            background: "var(--ink2)",
            padding: 26,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            minWidth: 0,
            outline: "1px solid var(--line)",
          }}
        >
          <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
            <legend
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 14,
                color: "var(--steel)",
                marginBottom: 10,
              }}
            >
              Project type
            </legend>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {radio(type === "a", () => setType("a"), "Prototype to product", "etype")}
              {radio(type === "b", () => setType("b"), "New build from scratch", "etype")}
              {radio(type === "c", () => setType("c"), "AI added to an existing product", "etype")}
              {radio(type === "d", () => setType("d"), "Take over and stabilise a live system", "etype")}
            </div>
          </fieldset>

          <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
            <legend
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 14,
                color: "var(--steel)",
                marginBottom: 10,
              }}
            >
              Surfaces
            </legend>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {chip(web, () => setWeb(!web), "Web")}
              {chip(ios, () => setIos(!ios), "iOS")}
              {chip(and, () => setAnd(!and), "Android")}
              {chip(api, () => setApi(!api), "Public API")}
            </div>
            {noSurface && (
              <p style={{ margin: "10px 0 0", fontSize: 12.5, color: "var(--c-clay)" }}>
                Pick at least one surface — the estimate below currently covers backend and
                infrastructure work only.
              </p>
            )}
          </fieldset>

          <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
            <legend
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 14,
                color: "var(--steel)",
                marginBottom: 10,
              }}
            >
              AI involvement
            </legend>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {radio(ai === "a", () => setAi("a"), "None", "eai")}
              {radio(ai === "b", () => setAi("b"), "Retrieval over your own content", "eai")}
              {radio(ai === "c", () => setAi("c"), "Agents that use tools and take actions", "eai")}
              {radio(ai === "d", () => setAi("d"), "Custom training or fine-tuning", "eai")}
            </div>
          </fieldset>

          <fieldset style={{ border: 0, margin: 0, padding: 0 }}>
            <legend
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 14,
                color: "var(--steel)",
                marginBottom: 10,
              }}
            >
              Infrastructure
            </legend>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {radio(infra === "a", () => setInfra("a"), "You run it, we hand over", "einf")}
              {radio(infra === "b", () => setInfra("b"), "We build it and you own it", "einf")}
              {radio(infra === "c", () => setInfra("c"), "We build it and we operate it", "einf")}
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="etime"
              style={{
                display: "block",
                fontFamily: "var(--font-heading)",
                fontSize: 14,
                color: "var(--steel)",
                marginBottom: 10,
              }}
            >
              Target timeline — <span className="tnum">{weeks}</span> weeks
            </label>
            <input
              id="etime"
              type="range"
              min={6}
              max={40}
              step={1}
              value={weeks}
              onChange={(e) => setWeeks(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--live)" }}
            />
            <div
              className="tnum"
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 11.5,
                color: "var(--dim)",
                marginTop: 4,
              }}
            >
              <span>6</span>
              <span>40</span>
            </div>
          </div>
        </div>

        <div
          style={{
            background: "var(--field)",
            color: "var(--ink-on)",
            padding: 30,
            display: "flex",
            flexDirection: "column",
            gap: 22,
            minWidth: 0,
            outline: "1px solid var(--field)",
          }}
        >
          <div>
            <p style={{ margin: 0, fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--dim-on)" }}>
              Indicative effort
            </p>
            <p
              className="tnum"
              style={{
                margin: "6px 0 0",
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(38px,4.6vw,58px)",
                lineHeight: 1,
                color: "var(--live-on)",
              }}
            >
              {est.low}–{est.high}
            </p>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: "rgba(234,241,247,.82)" }}>
              engineer-weeks, at {est.parallel} people in parallel over {weeks} weeks
            </p>
          </div>
          <div>
            <p style={{ margin: "0 0 10px", fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--dim-on)" }}>
              Team shape
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {est.team.map((r) => (
                <div
                  key={r.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    fontSize: 14,
                    borderBottom: "1px solid rgba(234,241,247,.16)",
                    paddingBottom: 6,
                  }}
                >
                  <span>{r.name}</span>
                  <span className="tnum" style={{ color: "var(--dim-on)" }}>{r.load}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ margin: "0 0 10px", fontSize: 12, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--dim-on)" }}>
              Phases
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {est.phases.map((p: any) => (
                <div key={p.name}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 13.5,
                      marginBottom: 3,
                    }}
                  >
                    <span>{p.name}</span>
                    <span className="tnum" style={{ color: "var(--dim-on)" }}>{p.weeks} wk</span>
                  </div>
                  <div style={{ height: 5, background: "rgba(234,241,247,.16)" }}>
                    <div style={{ height: "100%", width: p.pct, background: p.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.55, color: "var(--dim-on)" }}>
            An estimate, not a quote. It moves on the state of your existing code, how fast your team can answer questions, compliance requirements, and whether the data you need exists yet. We firm it up after the two-week scope.
          </p>
          <a
            href="#contact"
            className="btn"
            style={{
              alignSelf: "flex-start",
              padding: "11px 18px",
              fontSize: 15,
              background: "var(--live-on)",
              borderColor: "var(--live-on)",
              color: "#0C2019",
            }}
          >
            Send this scope to us
          </a>
        </div>
      </div>
    </section>
  );
}
