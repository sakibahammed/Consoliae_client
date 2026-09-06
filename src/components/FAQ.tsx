const ITEMS = [
  {
    q: "Who owns the code?",
    a: "You do, from the first commit. Repositories live in your GitHub organisation and we work inside it as collaborators. There is no escrow, no licence, and nothing you have to buy out at the end.",
  },
  {
    q: "What happens if we stop working together?",
    a: "A four-week handover, written into every contract: runbooks, architecture decision records, credential transfer, and two weeks of shadowing whoever takes over. If you need to leave faster than that, we compress it to two weeks and say so honestly in the report.",
  },
  {
    q: "How do you handle security and our data?",
    a: "Least-privilege access through your own identity provider, no production data on laptops, and synthetic or masked data in every non-production environment. We are happy to work inside your VPN, your cloud account, and your review process. Penetration test findings get fixed inside the engagement, not quoted separately.",
  },
  {
    q: "Will you work with our existing engineers?",
    a: "Usually yes, and it is the engagement that works best. Your team keeps context and product judgement; we bring the parts you have not done before. We review your pull requests and you review ours.",
  },
  {
    q: "What is your response time on production incidents?",
    a: "On an operate-and-maintain retainer: 15 minutes to acknowledge a Sev-1, any hour, and an engineer with commit access working on it. Sev-2 is one business hour. On a fixed-scope build there is no on-call after handover unless you add the retainer.",
  },
  {
    q: "How do you price change requests?",
    a: "On a fixed scope, anything outside the written scope gets an estimate in engineer-days before we start it, and you approve it in writing. On a dedicated team there are no change requests — you re-prioritise the backlog every two weeks and the cost does not move.",
  },
  {
    q: "What timezones do you work in?",
    a: "The team spans UTC−5 to UTC+5:30, and every engagement has at least four hours of overlap with your working day. On-call follows the sun, so nobody is answering a page at 3am on their own clock.",
  },
  {
    q: "Do you sign NDAs and work inside our contracts?",
    a: "Yes to your NDA, usually same day. We can work on your MSA rather than ours, and we carry professional indemnity and cyber cover. Our standard contract has no exclusivity or non-solicit clause against you.",
  },
  {
    q: "Can you start next week?",
    a: "Sometimes. We keep one scope slot open per month, and scope work does not need the full team. A build usually starts three to five weeks after signature, and we will tell you the real date before you sign, not after.",
  },
  {
    q: "When are you the wrong choice?",
    a: "If the work is a two-week widget, hire a freelancer. If you need a design-led brand build, hire a design studio and bring us in for the platform. If you have not decided what you are building, spend a week deciding first — we will send you notes for free rather than bill you to watch you think.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="h-faq"
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "clamp(56px,9vw,110px) clamp(14px,4vw,28px) 0",
      }}
    >
      <div style={{ borderBottom: "1px solid var(--line)", paddingBottom: 14, marginBottom: 8 }}>
        <h2 id="h-faq" style={{ fontSize: "clamp(28px,3.4vw,42px)", margin: 0 }}>
          Questions buyers actually ask
        </h2>
      </div>
      <div style={{ maxWidth: 900 }}>
        {ITEMS.map((it) => (
          <details
            key={it.q}
            style={{
              borderBottom: "1px solid var(--line)",
              padding: "16px 0",
            }}
          >
            <summary
              style={{
                cursor: "pointer",
                fontFamily: "var(--font-heading)",
                fontSize: 20,
                listStyle: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 18,
              }}
            >
              {it.q}
              <span
                className="pm"
                aria-hidden="true"
                style={{
                  flex: "none",
                  display: "inline-block",
                  position: "relative",
                  width: 14,
                  height: 14,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 6.25,
                    width: 14,
                    height: 1.5,
                    background: "var(--c-steel)",
                  }}
                />
                <span
                  className="pm-vert"
                  style={{
                    position: "absolute",
                    left: 6.25,
                    top: 0,
                    width: 1.5,
                    height: 14,
                    background: "var(--c-steel)",
                    transition: "transform .18s",
                  }}
                />
              </span>
            </summary>
            <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "var(--body2)", maxWidth: 680 }}>
              {it.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
