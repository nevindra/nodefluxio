"use client";

export function SatelliteCTA() {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center overflow-hidden"
      id="contact"
      style={{
        padding: "96px 24px 112px",
        background: `
          linear-gradient(to top, rgba(11,18,32,1) 0%, rgba(11,18,32,0.0) 30%),
          radial-gradient(circle at 50% 50%, rgba(52,216,197,0.12) 0%, transparent 45%)
        `,
      }}
    >
      {/* Content wrapper */}
      <div
        className="relative z-10 w-full mx-auto"
        style={{ maxWidth: "1232px" }}
      >
        {/* Section tag */}
        <div
          className="inline-flex items-center justify-center gap-2 mb-6"
          style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "#34D8C5",
            textTransform: "uppercase",
          }}
        >
          <span
            className="inline-block shrink-0"
            style={{ width: "24px", height: "1px", background: "#34D8C5" }}
          />
          Get Started
          <span
            className="inline-block shrink-0"
            style={{ width: "24px", height: "1px", background: "#34D8C5" }}
          />
        </div>

        {/* Heading */}
        <h2
          className="font-extrabold leading-tight mb-3.5"
          style={{
            fontSize: "clamp(26px, 5vw, 34px)",
            color: "#E6ECF7",
          }}
        >
          Bring Space-Edge Intelligence to Your Mission
        </h2>

        {/* Lead paragraph */}
        <p
          className="mb-7 leading-relaxed"
          style={{
            fontSize: "17px",
            color: "#8FA3C7",
            maxWidth: "680px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Speak to Nodeflux about integrating Space-Edge Vision AI into your
          maritime security, defense, disaster response, or environmental
          monitoring programs.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-3.5 justify-center">
          <a
            href="https://www.nodeflux.ai/contact-us"
            className="inline-flex items-center gap-[10px] rounded-lg px-[22px] py-3 text-sm font-semibold tracking-wide no-underline transition-all duration-150 ease-out"
            style={{
              background: "#34D8C5",
              color: "#0B1220",
              border: "1px solid transparent",
              boxShadow: "0 0 0 0 rgba(52,216,197,0)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 24px rgba(52,216,197,0.35)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 0 0 rgba(52,216,197,0)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            Request a Briefing →
          </a>

          <a
            href="https://www.nodeflux.ai"
            className="inline-flex items-center gap-[10px] rounded-lg px-[22px] py-3 text-sm font-semibold tracking-wide no-underline transition-all duration-150 ease-out"
            style={{
              background: "transparent",
              color: "#E6ECF7",
              border: "1px solid #233252",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "#34D8C5";
              (e.currentTarget as HTMLAnchorElement).style.color = "#34D8C5";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "#233252";
              (e.currentTarget as HTMLAnchorElement).style.color = "#E6ECF7";
            }}
          >
            ← Back to nodeflux.ai
          </a>
        </div>
      </div>
    </section>
  );
}
