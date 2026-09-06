"use client";
import { useEffect, useRef, useState } from "react";

type Stage = { title: string; body: string; artifact: string };

const STAGES: Stage[] = [
  {
    title: "Scope",
    body: "Two weeks of reading your code, talking to your team, and writing down what is actually true.",
    artifact: "Artifact: a written scope with what we are not doing.",
  },
  {
    title: "Architect",
    body: "We draw the system, name the failure modes, and pick the boring option wherever boring works.",
    artifact: "Artifact: a diagram and decision records.",
  },
  {
    title: "Build",
    body: "Two-week increments in your repository, reviewable from day three, demoed every Friday.",
    artifact: "Artifact: a repo you own, with tests.",
  },
  {
    title: "Deploy",
    body: "Infrastructure as code, staged rollout, load tested to twice your expected peak before launch.",
    artifact: "Artifact: a running URL and a rollback path.",
  },
  {
    title: "Operate",
    body: "On-call rota, alert thresholds tuned to your traffic, and a monthly review of cost and latency.",
    artifact: "Artifact: a dashboard and an incident log.",
  },
];

const COLORS = ["var(--c-steel)", "var(--c-teal)", "var(--c-indigo)", "var(--c-sand)", "var(--c-sage)"];

export default function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [is3D, setIs3D] = useState(true);
  const [manual, setManual] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const upd = () => setIs3D(mq.matches);
    upd();
    mq.addEventListener("change", upd);
    return () => mq.removeEventListener("change", upd);
  }, []);

  useEffect(() => {
    if (!is3D || manual !== null) return;
    const onScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const usable = Math.max(1, r.height - window.innerHeight * 0.82);
      const p = Math.min(1, Math.max(0, (-r.top + window.innerHeight * 0.1) / usable));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [is3D, manual]);

  const stageIndex = manual ?? Math.min(4, Math.floor(progress * 5));
  const railW = `${((stageIndex + 1) / 5) * 82}%`;

  const cardFor = (i: number) => {
    const diff = i - stageIndex;
    const abs = Math.abs(diff);
    let tx = diff * 50;
    let ty = -abs * 20;
    let tz = -abs * 220;
    let rotY = diff * -10;
    let opacity = abs > 2 ? 0 : 1 - abs * 0.28;
    let z = 100 - abs;
    if (i < stageIndex) {
      tx = -240 - abs * 40;
      opacity = Math.max(0, 0.5 - (abs - 1) * 0.3);
      ty = 30;
      tz = -80;
      rotY = 30;
    }
    return {
      transform: `translate3d(${tx}%, ${ty}px, ${tz}px) rotateY(${rotY}deg)`,
      opacity,
      zIndex: z,
      borderColor: i === stageIndex ? "var(--live)" : "var(--line)",
    };
  };

  const flat = (
    <div style={{ position: "relative" }}>
      <ol
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
          gap: 1,
        }}
      >
        {STAGES.map((s, i) => (
          <li
            key={s.title}
            style={{
              background: i === 4 ? "var(--ink3)" : "var(--ink2)",
              padding: "24px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              minWidth: 0,
              outline: "1px solid var(--line)",
            }}
          >
            <span className="tnum" style={{ fontFamily: "var(--font-heading)", fontSize: 15, color: "var(--live)" }}>
              {i + 1}
            </span>
            <h3 style={{ fontSize: 20, margin: 0 }}>{s.title}</h3>
            <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: "var(--body2)" }}>{s.body}</p>
            <p style={{ margin: "auto 0 0", fontSize: 12, color: "var(--dim)" }}>{s.artifact}</p>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <section
      id="process"
      aria-labelledby="h-proc"
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
          marginBottom: 38,
          flexWrap: "wrap",
        }}
      >
        <h2 id="h-proc" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          How we work
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "var(--dim)" }}>
          Five stages. Each one leaves you something you can hold.
        </p>
      </div>

      {is3D ? (
        <div ref={trackRef} style={{ position: "relative", height: "330vh" }}>
          <div style={{ position: "sticky", top: 78 }}>
            <div
              aria-hidden="true"
              style={{
                position: "relative",
                height: "min(600px, 70vh)",
                perspective: 1600,
                perspectiveOrigin: "50% 40%",
                overflow: "hidden",
                border: "1px solid var(--line)",
                background:
                  "radial-gradient(120% 90% at 50% 12%, rgba(255,255,255,.92), rgba(232,234,237,1))",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: "-30%",
                  right: "-30%",
                  top: "62%",
                  height: 620,
                  transform: "rotateX(75deg)",
                  transformOrigin: "50% 0",
                  background:
                    "repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 92px), repeating-linear-gradient(0deg, var(--line) 0 1px, transparent 1px 92px)",
                  maskImage: "linear-gradient(#000, transparent 72%)",
                  WebkitMaskImage: "linear-gradient(#000, transparent 72%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "9%",
                  right: "9%",
                  top: "62%",
                  height: 1,
                  background: "var(--line2)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "9%",
                  top: "62%",
                  height: 1,
                  width: railW,
                  background: "var(--live)",
                  boxShadow: "0 0 14px var(--live)",
                  transition: "width .3s",
                }}
              />
              <div style={{ position: "absolute", inset: 0, transformStyle: "preserve-3d" }}>
                {STAGES.map((s, i) => {
                  const cs = cardFor(i);
                  return (
                    <article
                      key={s.title}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "44%",
                        width: 340,
                        height: 280,
                        margin: "-140px 0 0 -170px",
                        padding: 22,
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                        transform: cs.transform,
                        opacity: cs.opacity,
                        zIndex: cs.zIndex,
                        border: `1px solid ${cs.borderColor}`,
                        background:
                          "linear-gradient(158deg, rgba(255,255,255,.97), rgba(234,234,236,.92))",
                        boxShadow: "0 22px 46px rgba(29,31,32,.14)",
                        transition:
                          "transform .26s linear, opacity .26s linear, border-color .3s",
                      }}
                    >
                      <span
                        className="tnum"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: 14,
                          color: COLORS[i],
                        }}
                      >
                        {i + 1} / {s.title.toLowerCase()}
                      </span>
                      <h3 style={{ fontSize: 30, margin: 0 }}>{s.title}</h3>
                      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--body)" }}>
                        {s.body}
                      </p>
                      <p
                        style={{
                          margin: "auto 0 0",
                          fontSize: 12.5,
                          color: "var(--dim)",
                          borderTop: "1px solid var(--line)",
                          paddingTop: 10,
                        }}
                      >
                        {s.artifact}
                      </p>
                    </article>
                  );
                })}
              </div>
              <p
                className="tnum"
                style={{
                  position: "absolute",
                  right: 16,
                  bottom: 14,
                  margin: 0,
                  fontSize: 12,
                  color: "var(--dim)",
                  fontFamily: "ui-monospace, Menlo, monospace",
                }}
              >
                stage {stageIndex + 1} / 5 · scroll or pick below
              </p>
            </div>

            <ol
              style={{
                listStyle: "none",
                margin: "14px 0 0",
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {STAGES.map((s, i) => (
                <li key={s.title}>
                  <button
                    type="button"
                    onClick={() => setManual(i)}
                    aria-current={i === stageIndex ? "true" : undefined}
                    style={{
                      background: i === stageIndex ? "var(--t-teal)" : "transparent",
                      border: `1px solid ${i === stageIndex ? "var(--live)" : "var(--line)"}`,
                      color: "var(--color-text)",
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      padding: "8px 14px",
                      cursor: "pointer",
                    }}
                  >
                    {i + 1} {s.title}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        flat
      )}
    </section>
  );
}
