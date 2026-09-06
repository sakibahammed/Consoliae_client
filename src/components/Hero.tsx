const M = {
  edge: 12,
  api: 38,
  tools: 4,
  model: 210,
  vector: 8,
  p99: 340,
  rps: 1240,
  calls: 3,
};

export default function Hero() {
  return (
    <section
      aria-labelledby="h-hero"
      style={{
        position: "relative",
        padding: "clamp(104px,14vw,150px) clamp(14px,4vw,28px) 0",
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 40 }}>
        <div style={{ maxWidth: 760 }}>
          <h1
            id="h-hero"
            style={{
              fontSize: "clamp(40px,6.4vw,78px)",
              lineHeight: 0.98,
              margin: "0 0 20px",
              animation: "cfoc .6s cubic-bezier(.2,.8,.2,1) .35s both",
            }}
          >
            Software that survives contact with real users.
          </h1>
          <p
            style={{
              fontSize: "clamp(16px,1.5vw,19px)",
              lineHeight: 1.5,
              color: "var(--body)",
              maxWidth: 640,
              margin: "0 0 6px",
              textWrap: "pretty",
            }}
          >
            We build AI agents and the ML infrastructure they run on, web and mobile
            applications, and the backend and servers underneath them. Then we operate
            the result.
          </p>
          <p
            className="tnum"
            style={{
              fontSize: 15,
              color: "var(--dim)",
              margin: "0 0 28px",
            }}
          >
            4 years. 9 systems in production. 19 engineers.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ padding: "11px 20px", fontSize: 15 }}
            >
              Start a project
            </a>
            <a
              href="#process"
              className="btn btn-secondary"
              style={{ padding: "11px 20px", fontSize: 15 }}
            >
              See how we work
            </a>
          </div>
        </div>

        <figure
          className="blueprint"
          role="img"
          aria-labelledby="trace-desc"
          style={{
            position: "relative",
            margin: 0,
            padding: "18px 12px",
            background:
              "linear-gradient(168deg, rgba(65,97,127,.12), rgba(31,122,85,.06) 60%, rgba(242,242,243,0))",
          }}
        >
          <i className="corner tl" />
          <i className="corner tr" />
          <i className="corner bl" />
          <i className="corner br" />
          <p
            id="trace-desc"
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              overflow: "hidden",
              clipPath: "inset(50%)",
              margin: 0,
            }}
          >
            Architecture diagram: a request leaves a device, passes through an edge
            network to the API, which calls an agent. The agent calls a model and a
            vector store, and forks to a tool layer that also reads the vector store. The
            response returns from the agent to the device. Measured p99 for the whole
            path is 340 milliseconds.
          </p>

          <svg
            viewBox="0 0 1280 520"
            style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
            aria-hidden="true"
          >
            <g fill="none" strokeWidth={1.25} strokeLinecap="square">
              <path
                d="M96 100 H284"
                pathLength={1}
                stroke="var(--steel)"
                style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "cdraw .34s cubic-bezier(.2,.9,.2,1) .12s forwards" }}
              />
              <path
                d="M316 100 H504"
                pathLength={1}
                stroke="var(--steel)"
                style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "cdraw .34s cubic-bezier(.2,.9,.2,1) .44s forwards" }}
              />
              <path
                d="M536 100 H660 Q700 100 700 140 V196 Q700 240 740 240 H744"
                pathLength={1}
                stroke="var(--steel)"
                style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "cdraw .46s cubic-bezier(.2,.9,.2,1) .74s forwards" }}
              />
              <path
                d="M776 240 H964"
                pathLength={1}
                stroke="var(--steel)"
                style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "cdraw .3s cubic-bezier(.2,.9,.2,1) 1.16s forwards" }}
              />
              <path
                d="M996 240 H1154"
                pathLength={1}
                stroke="var(--steel)"
                style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "cdraw .3s cubic-bezier(.2,.9,.2,1) 1.42s forwards" }}
              />
              <path
                d="M760 256 V336 Q760 380 800 380 H884"
                pathLength={1}
                stroke="var(--load)"
                style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "cdraw .38s cubic-bezier(.2,.9,.2,1) 1.5s forwards" }}
              />
              <path
                d="M916 380 H1130 Q1170 380 1170 340 V256"
                pathLength={1}
                stroke="var(--load)"
                style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "cdraw .4s cubic-bezier(.2,.9,.2,1) 1.82s forwards" }}
              />
              <path
                d="M742 256 Q700 268 700 306 V436 Q700 470 660 470 H120 Q80 470 80 432 V118"
                pathLength={1}
                stroke="var(--live)"
                style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "cdraw .7s cubic-bezier(.2,.9,.2,1) 2.1s forwards" }}
              />
            </g>

            <g>
              <circle
                r={3.5}
                fill="var(--live)"
                style={{
                  offsetPath:
                    "path('M96 100 H284 M316 100 H504 M536 100 H660 Q700 100 700 140 V196 Q700 240 740 240 H776 H964 M996 240 H1154')",
                  animation: "cpulse 2.1s cubic-bezier(.4,0,.6,1) 1.1s 1 both",
                }}
              />
              <circle
                r={2.6}
                fill="var(--live)"
                opacity={0.55}
                style={{
                  offsetPath:
                    "path('M96 100 H284 M316 100 H504 M536 100 H660 Q700 100 700 140 V196 Q700 240 740 240 H776 H964 M996 240 H1154')",
                  animation: "cpulse 2.4s linear 5s infinite both",
                }}
              />
              <circle
                r={2.4}
                fill="var(--load)"
                opacity={0.5}
                style={{
                  offsetPath:
                    "path('M760 256 V336 Q760 380 800 380 H916 H1130 Q1170 380 1170 340 V256')",
                  animation: "cpulse 1.8s linear 5.5s infinite both",
                }}
              />
            </g>

            <g style={{ animation: "cignite .3s ease-out .3s both" }}>
              <rect x={72} y={92} width={16} height={16} fill="none" stroke="var(--steel)" strokeWidth={1.25} />
              <rect x={77} y={97} width={6} height={6} fill="var(--steel)" />
              <text x={72} y={76} fill="var(--color-text)" fontFamily="var(--font-heading)" fontSize={17}>device</text>
              <text x={72} y={132} fill="var(--dim)" fontFamily="var(--font-body)" fontSize={13}>browser · iOS</text>
            </g>
            <g style={{ animation: "cignite .3s ease-out .5s both" }}>
              <rect x={292} y={92} width={16} height={16} fill="none" stroke="var(--steel)" strokeWidth={1.25} />
              <rect x={297} y={97} width={6} height={6} fill="var(--live)" />
              <text x={292} y={76} fill="var(--color-text)" fontFamily="var(--font-heading)" fontSize={17}>edge</text>
              <text className="tnum" x={292} y={132} fill="var(--live)" fontFamily="var(--font-body)" fontSize={13}>{M.edge} ms</text>
            </g>
            <g style={{ animation: "cignite .3s ease-out .82s both" }}>
              <rect x={512} y={92} width={16} height={16} fill="none" stroke="var(--steel)" strokeWidth={1.25} />
              <rect x={517} y={97} width={6} height={6} fill="var(--live)" />
              <text x={512} y={76} fill="var(--color-text)" fontFamily="var(--font-heading)" fontSize={17}>API</text>
              <text className="tnum" x={512} y={132} fill="var(--live)" fontFamily="var(--font-body)" fontSize={13}>
                {M.api} ms · {M.rps} rps
              </text>
            </g>
            <g style={{ animation: "cignite .3s ease-out 1.2s both" }}>
              <rect x={744} y={232} width={18} height={18} fill="none" stroke="var(--color-text)" strokeWidth={1.25} />
              <rect x={749} y={237} width={8} height={8} fill="var(--load)" style={{ animation: "cblink 2.4s ease-in-out 3s infinite" }} />
              <text x={744} y={216} fill="var(--color-text)" fontFamily="var(--font-heading)" fontSize={19}>agent</text>
              <text className="tnum" x={744} y={274} fill="var(--load)" fontFamily="var(--font-body)" fontSize={13}>
                {M.tools} tools · 2 retries
              </text>
            </g>
            <g style={{ animation: "cignite .3s ease-out 1.44s both" }}>
              <rect x={972} y={232} width={16} height={16} fill="none" stroke="var(--steel)" strokeWidth={1.25} />
              <rect x={977} y={237} width={6} height={6} fill="var(--live)" />
              <text x={972} y={216} fill="var(--color-text)" fontFamily="var(--font-heading)" fontSize={17}>model</text>
              <text className="tnum" x={972} y={274} fill="var(--live)" fontFamily="var(--font-body)" fontSize={13}>
                {M.model} ms · 1.4k tok
              </text>
            </g>
            <g style={{ animation: "cignite .3s ease-out 1.7s both" }}>
              <rect x={1162} y={232} width={16} height={16} fill="none" stroke="var(--steel)" strokeWidth={1.25} />
              <rect x={1167} y={237} width={6} height={6} fill="var(--live)" />
              <text x={1136} y={216} fill="var(--color-text)" fontFamily="var(--font-heading)" fontSize={17}>vector store</text>
              <text className="tnum" x={1136} y={274} fill="var(--live)" fontFamily="var(--font-body)" fontSize={13}>
                {M.vector} ms · k=8
              </text>
            </g>
            <g style={{ animation: "cignite .3s ease-out 1.86s both" }}>
              <rect x={892} y={372} width={16} height={16} fill="none" stroke="var(--load)" strokeWidth={1.25} />
              <rect x={897} y={377} width={6} height={6} fill="var(--load)" />
              <text x={892} y={356} fill="var(--color-text)" fontFamily="var(--font-heading)" fontSize={17}>tools</text>
              <text className="tnum" x={892} y={412} fill="var(--load)" fontFamily="var(--font-body)" fontSize={13}>
                {M.calls} calls · queued 0
              </text>
            </g>
            <g style={{ animation: "cignite .3s ease-out 2.5s both" }}>
              <text x={128} y={464} fill="var(--live)" fontFamily="var(--font-heading)" fontSize={17}>response</text>
              <text className="tnum" x={228} y={464} fill="var(--dim)" fontFamily="var(--font-body)" fontSize={13}>
                p99 {M.p99} ms · 200 OK
              </text>
            </g>
          </svg>

          <figcaption
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              marginTop: 14,
              fontSize: 12,
              color: "var(--dim)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 9, height: 9, background: "var(--live)" }} />
              live path
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 9, height: 9, background: "var(--load)" }} />
              tool and load path
            </span>
            <span>
              One request through a system we would build for you. Metrics from a running
              deployment.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
