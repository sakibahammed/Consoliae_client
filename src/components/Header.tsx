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
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
            gap: 20,
            padding: `${pad} clamp(12px,3.5vw,28px)`,
            transition: "padding .18s cubic-bezier(.2,.8,.2,1)",
          }}
        >
          <a
            href="#top"
            aria-label="Consoliae — home"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 11,
              textDecoration: "none",
              color: "var(--color-text)",
              marginRight: "auto",
              minWidth: 0,
              padding: "2px 0",
            }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              aria-hidden="true"
              style={{ flex: "none" }}
            >
              <rect x="1.5" y="1.5" width="23" height="23" fill="none" stroke="var(--steel)" strokeWidth="1.4" />
              <rect x="7" y="7" width="12" height="12" fill="var(--live)" />
              <rect x="10.5" y="10.5" width="5" height="5" fill="var(--ink)" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: 19,
                letterSpacing: "-0.015em",
                lineHeight: 1,
                color: "var(--color-text)",
              }}
            >
              Consoliae
            </span>
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
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.label}
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            className="btn btn-primary hidden sm:inline-flex"
            style={{ flex: "none", padding: "9px 16px", fontSize: 14 }}
          >
            Start a project
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden"
            style={{
              width: 40,
              height: 40,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              padding: 0,
              color: "var(--color-text)",
              cursor: "pointer",
              flex: "none",
            }}
          >
            <svg width="22" height="16" viewBox="0 0 22 16" aria-hidden="true">
              {menuOpen ? (
                <>
                  <path d="M3 3 L19 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M19 3 L3 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <path d="M3 4 H19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M3 8 H19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  <path d="M3 12 H19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      <div
        className={`mobile-nav-scrim ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={() => setMenuOpen(false)}>
            {s.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="btn btn-primary"
          style={{ marginTop: 16, padding: "12px 18px", fontSize: 15 }}
        >
          Start a project
        </a>
      </aside>
    </>
  );
}
