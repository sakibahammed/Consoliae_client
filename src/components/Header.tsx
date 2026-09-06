"use client";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "capabilities", label: "Capabilities" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "estimator", label: "Estimator" },
  { id: "engagements", label: "Engagements" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = Math.max(1, doc.scrollHeight - window.innerHeight);
      setProgress(doc.scrollTop / total);
      setScrolled(doc.scrollTop > 32);

      let current = "";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 140) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hdrBg = scrolled ? "rgba(243,243,241,0.92)" : "rgba(243,243,241,0.55)";
  const hdrLine = scrolled ? "var(--line)" : "transparent";
  const pad = scrolled ? "10px" : "16px";
  const progW = `${progress * 100}%`;

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          zIndex: 60,
          background: "var(--line)",
        }}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--steel), var(--live))",
            width: progW,
            transition: "width 0.1s linear",
          }}
        />
      </div>

      <header
        style={{
          position: "fixed",
          top: 2,
          left: 0,
          right: 0,
          zIndex: 50,
          background: hdrBg,
          borderBottom: `1px solid ${hdrLine}`,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          transition:
            "background .18s cubic-bezier(.2,.8,.2,1), border-color .18s, padding .18s",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 28,
            padding: `${pad} clamp(12px,3.5vw,28px)`,
            transition: "padding .18s cubic-bezier(.2,.8,.2,1)",
          }}
        >
          <a
            href="#top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              color: "var(--color-text)",
              marginRight: "auto",
            }}
          >
            <span
              style={{
                position: "relative",
                width: 16,
                height: 16,
                flex: "none",
                border: "1px solid var(--steel)",
                display: "inline-block",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 4,
                  background: "var(--live)",
                }}
              />
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 21,
                letterSpacing: ".01em",
              }}
            >
              consoliae
            </span>
            {!scrolled && (
              <span
                style={{
                  fontSize: 11,
                  color: "var(--dim)",
                  borderLeft: "1px solid var(--line)",
                  paddingLeft: 10,
                }}
                className="hidden md:inline"
              >
                Intelligent systems. Simplified.
              </span>
            )}
          </a>

          <nav
            aria-label="Sections"
            className="hidden md:flex"
            style={{ gap: 22, alignItems: "center" }}
          >
            {SECTIONS.map((s) => {
              const isActive = active === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  aria-current={isActive ? "true" : undefined}
                  style={{
                    fontSize: 13.5,
                    textDecoration: "none",
                    color: isActive ? "var(--color-text)" : "var(--dim)",
                    transition: "color .15s",
                  }}
                >
                  {s.label}
                </a>
              );
            })}
          </nav>

          {scrolled && (
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ flex: "none", padding: "9px 16px", fontSize: 14 }}
            >
              Start a project
            </a>
          )}
        </div>
      </header>
    </>
  );
}
