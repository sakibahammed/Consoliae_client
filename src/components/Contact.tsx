"use client";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [hp, setHp] = useState("");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ name?: boolean; mail?: boolean; msg?: boolean }>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = true;
    if (!/.+@.+\..+/.test(mail)) e.mail = true;
    if (msg.trim().length < 10) e.msg = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hp) return;
    if (!validate()) return;
    const body = encodeURIComponent(`From: ${name}\n\n${msg}`);
    const subject = encodeURIComponent(`Consoliae — ${name}`);
    window.location.href = `mailto:info@consoliae.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="h-con"
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "clamp(56px,9vw,110px) clamp(14px,4vw,28px) 0",
      }}
    >
      <div
        style={{
          background: "var(--field)",
          color: "var(--ink-on)",
          padding: "clamp(28px,4vw,56px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "clamp(28px,4vw,56px)",
          alignItems: "start",
        }}
      >
        <div>
          <h2
            id="h-con"
            style={{
              fontSize: "clamp(32px,4vw,52px)",
              margin: "0 0 18px",
              maxWidth: 520,
              color: "var(--ink-on)",
            }}
          >
            Tell us what is broken, or what you want to exist.
          </h2>
          <p style={{ margin: "0 0 22px", fontSize: 16, lineHeight: 1.6, color: "rgba(234,241,247,.84)", maxWidth: 520 }}>
            Here is what actually happens: an engineer — not a salesperson — reads it and replies within one working day with either three questions or a time to talk. On that call we sketch the architecture live. If we are the wrong fit we say so, and usually say who is right.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15, marginBottom: 28 }}>
            <a
              href="mailto:info@consoliae.com"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 26,
                textDecoration: "none",
                color: "var(--live-on)",
              }}
            >
              info@consoliae.com
            </a>
            <span style={{ fontSize: 14.5, color: "rgba(234,241,247,.84)" }}>
              Book a 30-minute call — calendar link coming
            </span>
            <p className="tnum" style={{ margin: "8px 0 0", fontSize: 13, color: "var(--dim-on)" }}>
              Remote, UTC−5 to UTC+5:30. 19 engineers.
            </p>
          </div>
          <figure className="blueprint" style={{ margin: 0, maxWidth: 520 }}>
            <i className="corner tl" />
            <i className="corner tr" />
            <i className="corner bl" />
            <i className="corner br" />
            <Image
              src="/photo.jpg"
              width={1600}
              height={1180}
              alt="A hydroelectric dam and its switchyard under load"
              style={{
                width: "100%",
                height: "clamp(150px, 18vw, 220px)",
                objectFit: "cover",
              }}
            />
          </figure>
          <figcaption style={{ marginTop: 10, fontSize: 12.5, color: "var(--dim-on)", maxWidth: 520 }}>
            Infrastructure is only interesting when it is holding something back. Ours holds 34 services and 9 models in production.
          </figcaption>
        </div>

        <form
          onSubmit={submit}
          style={{
            background: "rgba(234,241,247,.06)",
            border: "1px solid rgba(234,241,247,.2)",
            padding: 26,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {sent ? (
            <div>
              <p style={{ margin: "0 0 8px", fontFamily: "var(--font-heading)", fontSize: 26, color: "var(--live-on)" }}>
                Received.
              </p>
              <p style={{ margin: "0 0 14px", fontSize: 14.5, lineHeight: 1.6, color: "rgba(234,241,247,.84)" }}>
                Your mail app should have opened with the message filled in. If it did not, write to info@consoliae.com directly.
              </p>
            </div>
          ) : (
            <>
              <div>
                <label htmlFor="f-name" style={{ color: "var(--dim-on)", fontSize: 13, display: "block", marginBottom: 6 }}>
                  Your name
                </label>
                <input
                  id="f-name"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={errors.name || undefined}
                  autoComplete="name"
                  style={{ width: "100%" }}
                />
                {errors.name && (
                  <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "var(--load-on)" }}>
                    Tell us who you are — first name is enough.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="f-mail" style={{ color: "var(--dim-on)", fontSize: 13, display: "block", marginBottom: 6 }}>
                  Work email
                </label>
                <input
                  id="f-mail"
                  type="email"
                  className="input"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  aria-invalid={errors.mail || undefined}
                  autoComplete="email"
                  style={{ width: "100%" }}
                />
                {errors.mail && (
                  <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "var(--load-on)" }}>
                    That address is missing an @ or a domain. Check it and we can reach you.
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="f-msg" style={{ color: "var(--dim-on)", fontSize: 13, display: "block", marginBottom: 6 }}>
                  What are you building, or what is going wrong?
                </label>
                <textarea
                  id="f-msg"
                  className="input"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  aria-invalid={errors.msg || undefined}
                  style={{ minHeight: 120, width: "100%" }}
                />
                {errors.msg && (
                  <p style={{ margin: "6px 0 0", fontSize: 12.5, color: "var(--load-on)" }}>
                    A sentence or two is plenty — enough that an engineer can ask a useful question back.
                  </p>
                )}
              </div>
              <input
                type="text"
                tabIndex={-1}
                aria-hidden="true"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                autoComplete="off"
                style={{ position: "absolute", left: -9999, width: 1, height: 1 }}
              />
              <button
                type="submit"
                className="btn"
                style={{
                  padding: "11px 18px",
                  fontSize: 15,
                  alignSelf: "flex-start",
                  background: "var(--live-on)",
                  borderColor: "var(--live-on)",
                  color: "#0C2019",
                }}
              >
                Send
              </button>
              <p style={{ margin: 0, fontSize: 12, color: "var(--dim-on)" }}>
                No newsletter, no sequence. One reply from one person.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
