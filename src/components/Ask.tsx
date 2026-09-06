"use client";
import { useState, useRef, useEffect } from "react";

type Msg = { who: "you" | "agent"; text: string };

const SEEDS = [
  "We have a RAG prototype in a notebook. What does production look like?",
  "Who is on call if our system breaks at 3am?",
  "Can you take over a Django app nobody here understands?",
];

const OFFLINE_REPLY: Record<string, string> = {
  [SEEDS[0]]:
    "Production usually means: retrieval that survives a bad index, an eval suite gating every prompt change, per-tenant cost caps, an audit log per decision, and one person who owns the p99. We usually get there in 6–10 weeks depending on your data.",
  [SEEDS[1]]:
    "Our rota. 15-minute acknowledgment on Sev-1, any hour, and an engineer with commit access working on it. Sev-2 is one business hour. It only applies on an operate-and-maintain retainer.",
  [SEEDS[2]]:
    "Yes. We do a two-week paid audit first: read the code, talk to whoever is left, and write down what is actually true. If we can instrument it, we take it. If we cannot, we tell you why and refer you.",
};

export default function Ask() {
  const [chat, setChat] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [chat, busy]);

  const send = (text: string) => {
    if (!text.trim() || busy) return;
    setChat((c) => [...c, { who: "you", text }]);
    setInput("");
    setBusy(true);
    const reply =
      OFFLINE_REPLY[text.trim()] ||
      "This is a demo of the sales-engineer surface. In production it is wired to Claude with our shipped-work context. Email info@consoliae.com and a real engineer replies within one working day.";
    setTimeout(() => {
      setChat((c) => [...c, { who: "agent", text: reply }]);
      setBusy(false);
    }, 600);
  };

  const empty = chat.length === 0;

  return (
    <section
      id="ask"
      aria-labelledby="h-ask"
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
        <h2 id="h-ask" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          Ask our engineer
        </h2>
        <p style={{ margin: 0, fontSize: 14, color: "var(--dim)", maxWidth: 420, textAlign: "right" }}>
          A real assistant, running on this page. It knows what we build, how we price
          work, and when to tell you we are the wrong fit.
        </p>
      </div>

      <div
        className="blueprint"
        style={{
          background: "var(--ink2)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr)",
          minHeight: 420,
        }}
      >
        <i className="corner tl" />
        <i className="corner tr" />
        <i className="corner bl" />
        <i className="corner br" />
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 18px", borderBottom: "1px solid var(--line)" }}>
          <span style={{ width: 8, height: 8, background: busy ? "var(--load)" : "var(--live)" }} />
          <span style={{ fontFamily: "var(--font-heading)", fontSize: 15 }}>
            consoliae · sales engineer
          </span>
          <span style={{ fontSize: 12, color: "var(--dim)" }}>{busy ? "thinking" : "online"}</span>
          <button
            type="button"
            onClick={() => setChat([])}
            style={{
              marginLeft: "auto",
              background: "transparent",
              border: "1px solid var(--line)",
              color: "var(--dim)",
              fontSize: 11.5,
              fontFamily: "var(--font-body)",
              padding: "4px 9px",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        </div>

        <div
          ref={logRef}
          role="log"
          aria-live="polite"
          aria-label="Conversation"
          style={{
            padding: 18,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxHeight: 420,
            overflowY: "auto",
          }}
        >
          {empty && (
            <>
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--body2)", maxWidth: 560 }}>
                Ask anything you would ask on a first call. It answers from what we have actually shipped, and it will say when something is outside what we do.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SEEDS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    style={{
                      background: "transparent",
                      border: "1px solid var(--line2)",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      padding: "8px 12px",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </>
          )}
          {chat.map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 12, maxWidth: 760 }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 12.5,
                  color: m.who === "you" ? "var(--steel)" : "var(--live)",
                  flex: "none",
                  width: 52,
                  paddingTop: 3,
                }}
              >
                {m.who}
              </span>
              <p
                style={{
                  margin: 0,
                  fontSize: 14.5,
                  lineHeight: 1.62,
                  color: "var(--body)",
                  whiteSpace: "pre-wrap",
                }}
              >
                {m.text}
              </p>
            </div>
          ))}
          {busy && (
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontSize: 12.5, color: "var(--live)", width: 52 }}>
                agent
              </span>
              <span style={{ display: "flex", gap: 4 }}>
                <span style={{ width: 5, height: 5, background: "var(--live)", animation: "cwait 1s linear infinite" }} />
                <span style={{ width: 5, height: 5, background: "var(--live)", animation: "cwait 1s linear .2s infinite" }} />
                <span style={{ width: 5, height: 5, background: "var(--live)", animation: "cwait 1s linear .4s infinite" }} />
              </span>
            </div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          style={{
            display: "flex",
            gap: 10,
            padding: "14px 18px",
            borderTop: "1px solid var(--line)",
            marginTop: "auto",
          }}
        >
          <label htmlFor="chat-in" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)" }}>
            Your message
          </label>
          <input
            id="chat-in"
            className="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe what you are building, or what is broken"
            autoComplete="off"
            style={{ flex: 1, fontSize: 14.5, minHeight: 42 }}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={busy || !input.trim()}
            style={{ padding: "0 18px", opacity: busy || !input.trim() ? 0.5 : 1 }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
