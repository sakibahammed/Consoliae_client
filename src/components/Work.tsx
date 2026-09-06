"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

type Project = {
  name: string;
  subtitle: string;
  built: string;
  stack: string;
  metric: string;
  metricLabel: string;
  metricColor?: string;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Hello Doorstep",
    subtitle: "Luxury multifamily · resident apps + ops",
    built:
      "iOS and Android resident apps and the dispatch backend for five-nights-a-week doorstep collection across Texas communities.",
    stack: "iOS · Android · Node.js · Postgres",
    metric: "70+",
    metricLabel: "Texas communities served",
    metricColor: "var(--live)",
    href: "https://www.hello-doorstep.com",
  },
  {
    name: "Iron Depot",
    subtitle: "Heavy equipment · marketplace + financing",
    built:
      "Listings platform and financing pre-approval flow for Canada's largest used heavy equipment marketplace.",
    stack: "Next.js · Node.js · Postgres · Stripe",
    metric: "$60M+",
    metricLabel: "financed through platform",
    metricColor: "var(--live)",
    href: "https://irondepot.ca",
  },
  {
    name: "Omidnetcare",
    subtitle: "Healthcare · EMR & hospital management",
    built:
      "EMR and hospital management platform with HL7, FHIR and DICOM interoperability across clinical systems.",
    stack: "HL7 · FHIR · DICOM · Postgres",
    metric: "Live",
    metricLabel: "clinical deployments",
    metricColor: "var(--color-text)",
    href: "https://www.omidnetcare.com",
  },
  {
    name: "AuraSolveAI",
    subtitle: "AI agents · multi-product SaaS",
    built:
      "Four AI-agent products — a voice front desk, interview screening, outbound calling and a CRM — behind one hub that owns identity, Stripe billing, trials and cross-product SSO.",
    stack: "NestJS · Next.js · FastAPI · Postgres · MongoDB · Vapi · AWS",
    metric: "4",
    metricLabel: "AI products on one hub",
    metricColor: "var(--live)",
    href: "https://app.aurasolveai.com",
  },
  {
    name: "Chordline FHIR Bridge",
    subtitle: "Healthcare · CMS-0057-F prior authorization",
    built:
      "FHIR R4 façade over a utilization-management platform, serving Da Vinci PAS 2.0.1 and US Core 6.1 resources validated with the HL7 validator, built for SMART on FHIR.",
    stack: "Node.js · TypeScript · FHIR R4 · Da Vinci PAS · Docker · AWS ECS",
    metric: "11",
    metricLabel: "FHIR resource endpoints",
    metricColor: "var(--live)",
  },
  {
    name: "ShareViral",
    subtitle: "Creator economy · campaigns + payouts",
    built:
      "Creator and brand campaign platform: Supabase backend with realtime feeds, Stripe creator payouts, and React Native creator and brand apps brought to parity with the web app.",
    stack: "React · React Native · NestJS · Supabase · Stripe",
    metric: "3",
    metricLabel: "surfaces on one backend",
    metricColor: "var(--live)",
    href: "https://shareviral.com",
  },
  {
    name: "Kreators Lab",
    subtitle: "Education · AI camp for kids, Austin",
    built:
      "Course catalogue, enrolment and Stripe checkout with a parent dashboard and an admin calendar, on Next.js and Firebase with a callable-functions API.",
    stack: "Next.js · Firebase · Stripe · AWS Amplify",
    metric: "Live",
    metricLabel: "kreatorslab.ai",
    metricColor: "var(--color-text)",
    href: "https://kreatorslab.ai",
  },
  {
    name: "Unite Living",
    subtitle: "Proptech · digital tenant management, Norway",
    built:
      "Digital tenant management system for Norwegian landlords: listings, contracts with e-signing, deposits, rent billing and the tenant lifecycle in one cloud platform.",
    stack: "Web · billing · e-signing · deposits",
    metric: "NO",
    metricLabel: "Norwegian rental market",
    metricColor: "var(--live)",
    href: "https://uniteliving.com",
  },
  {
    name: "Katria",
    subtitle: "Hospitality · restaurant point of service, Norway",
    built:
      "Restaurant point-of-service platform: in-venue POS, web take-away ordering, upselling and real-time reporting for Norwegian operators.",
    stack: "POS · web ordering · take-away · reporting",
    metric: "Live",
    metricLabel: "katria.com",
    metricColor: "var(--color-text)",
    href: "https://www.katria.com",
  },
];

const LIVE = { services: 34, deploys: 118, uptime: "99.98", models: 9, incidents: 0 };

function useCountUp(target: number, start: boolean, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - k, 3);
      setValue(Math.round(target * eased));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

function StatsBand() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const services = useCountUp(LIVE.services, visible);
  const deploys = useCountUp(LIVE.deploys, visible);
  const models = useCountUp(LIVE.models, visible);
  const incidents = useCountUp(LIVE.incidents, visible);
  const uptime = visible ? LIVE.uptime : "0.00";

  const cell = {
    background: "var(--field)",
    outline: "1px solid var(--field)",
    padding: "20px 22px",
  } as React.CSSProperties;
  const num = {
    margin: 0,
    fontFamily: "var(--font-heading)",
    fontSize: 38,
    lineHeight: 1,
  } as React.CSSProperties;
  const label = {
    margin: "4px 0 0",
    fontSize: 13,
    color: "var(--dim-on)",
  } as React.CSSProperties;

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))",
        gap: 1,
        marginBottom: 34,
      }}
    >
      <div style={cell}>
        <p className="tnum" style={{ ...num, color: "var(--live-on)" }}>{services}</p>
        <p style={label}>services in production</p>
      </div>
      <div style={cell}>
        <p className="tnum" style={{ ...num, color: "var(--ink-on)" }}>{deploys}</p>
        <p style={label}>deploys this month</p>
      </div>
      <div style={cell}>
        <p className="tnum" style={{ ...num, color: "var(--live-on)" }}>{uptime}%</p>
        <p style={label}>uptime, managed infrastructure, 90 days</p>
      </div>
      <div style={cell}>
        <p className="tnum" style={{ ...num, color: "var(--load-on)" }}>{models}</p>
        <p style={label}>models serving traffic</p>
      </div>
      <div style={cell}>
        <p className="tnum" style={{ ...num, color: "var(--ink-on)" }}>{incidents}</p>
        <p style={label}>Sev-1 incidents this quarter</p>
      </div>
    </div>
  );
}

const ROW_STYLE: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns:
    "minmax(0,2.1fr) minmax(0,2.4fr) minmax(0,1.9fr) minmax(0,1fr)",
  gap: 20,
  padding: "16px 4px",
  borderBottom: "1px solid var(--line)",
  textDecoration: "none",
  color: "inherit",
};

export default function Work() {
  return (
    <section
      id="work"
      aria-labelledby="h-work"
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
        <h2 id="h-work" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          Systems in production
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "var(--dim)" }}>
          9 shipped. All still operated by us.
        </p>
      </div>

      <StatsBand />

      <div role="table" aria-label="Shipped work" style={{ borderTop: "1px solid var(--line2)" }}>
        <div
          role="row"
          className="work-row-head"
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0,2.1fr) minmax(0,2.4fr) minmax(0,1.9fr) minmax(0,1fr)",
            gap: 20,
            padding: "10px 4px",
            borderBottom: "1px solid var(--line)",
            fontSize: 11,
            letterSpacing: ".06em",
            textTransform: "uppercase",
            color: "var(--dim)",
          }}
        >
          <span role="columnheader">Project</span>
          <span role="columnheader">What we built</span>
          <span role="columnheader">Stack</span>
          <span role="columnheader" style={{ textAlign: "right" }}>The number</span>
        </div>
        {PROJECTS.map((p, i) => {
          const cells = (
            <>
              <span>
                <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: 19, color: "var(--c-steel)" }}>
                  {p.name}
                </span>
                <span style={{ fontSize: 12.5, color: "var(--dim)" }}>{p.subtitle}</span>
              </span>
              <span style={{ fontSize: 13.5, color: "var(--body2)" }}>{p.built}</span>
              <span style={{ fontSize: 12, color: "var(--dim)", fontFamily: "ui-monospace, Menlo, monospace" }}>
                {p.stack}
              </span>
              <span className="tnum" style={{ textAlign: "right" }}>
                <span style={{ display: "block", fontFamily: "var(--font-heading)", fontSize: 23, color: p.metricColor }}>
                  {p.metric}
                </span>
                <span style={{ fontSize: 11.5, color: "var(--dim)" }}>{p.metricLabel}</span>
              </span>
            </>
          );

          const key = `${p.name}-${i}`;
          if (p.href) {
            return (
              <Reveal key={key} as="div" delay={i * 0.04}>
                <a href={p.href} target="_blank" rel="noopener" role="row" style={ROW_STYLE} className="work-row">
                  {cells}
                </a>
              </Reveal>
            );
          }
          return (
            <Reveal key={key} as="div" delay={i * 0.04}>
              <div role="row" style={ROW_STYLE} className="work-row">
                {cells}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
