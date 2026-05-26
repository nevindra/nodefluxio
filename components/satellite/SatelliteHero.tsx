"use client";

export function SatelliteHero() {
  return (
    <section
      className="relative flex flex-col justify-center items-start min-h-[86vh] overflow-hidden"
      style={{
        padding: "80px 8px 96px",
        background: `
          linear-gradient(100deg, rgba(11,18,32,0.92) 0%, rgba(11,18,32,0.75) 52%, rgba(11,18,32,0.30) 100%),
          linear-gradient(to top, rgba(11,18,32,1) 0%, rgba(11,18,32,0.0) 30%),
          radial-gradient(circle at 78% 28%, rgba(52,216,197,0.18) 0%, transparent 45%),
          radial-gradient(circle at 18% 82%, rgba(139,92,246,0.12) 0%, transparent 45%),
          url('/satellite/satellite_earth_background.png') center center / cover no-repeat
        `,
      }}
    >
      {/* Orbital decoration — hidden on mobile */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute pointer-events-none"
        style={{
          right: "-180px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "600px",
          height: "600px",
          opacity: 0.55,
        }}
      >
        {/* Ring r1 — outermost solid teal */}
        <div
          className="absolute rounded-full"
          style={{
            inset: 0,
            border: "1px solid rgba(52,216,197,0.25)",
          }}
        />
        {/* Ring r2 — dashed mid */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "60px",
            border: "1px dashed rgba(52,216,197,0.15)",
          }}
        />
        {/* Ring r3 — violet inner */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "130px",
            border: "1px solid rgba(139,92,246,0.2)",
          }}
        />
        {/* Core dot */}
        <div
          className="absolute rounded-full"
          style={{
            width: "14px",
            height: "14px",
            top: "50%",
            left: "50%",
            marginTop: "-7px",
            marginLeft: "-7px",
            background: "#34D8C5",
            boxShadow: "0 0 30px #34D8C5",
            animation: "satellite-pulse 2s ease-in-out infinite",
          }}
        />
        {/* Sat s1 — teal, top */}
        <div
          className="absolute rounded-full"
          style={{
            width: "8px",
            height: "8px",
            top: "8%",
            left: "50%",
            background: "#34D8C5",
            boxShadow: "0 0 10px #34D8C5",
          }}
        />
        {/* Sat s2 — violet, right */}
        <div
          className="absolute rounded-full"
          style={{
            width: "8px",
            height: "8px",
            top: "50%",
            right: "8%",
            background: "#8B5CF6",
            boxShadow: "0 0 10px #8B5CF6",
          }}
        />
        {/* Sat s3 — amber, bottom-left */}
        <div
          className="absolute rounded-full"
          style={{
            width: "8px",
            height: "8px",
            bottom: "18%",
            left: "22%",
            background: "#F2B65D",
            boxShadow: "0 0 10px #F2B65D",
          }}
        />
      </div>

      {/* Content wrapper */}
      <div
        className="relative z-10 w-full mx-auto"
        style={{ maxWidth: "1232px", paddingLeft: "24px", paddingRight: "24px" }}
      >
        {/* Section tag */}
        <div
          className="inline-flex items-center gap-2 mb-4"
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
          Nodeflux Special Use Case · Vision AI for Space-Edge Satellite
        </div>

        {/* Heading */}
        <h1
          className="font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{
            fontSize: "clamp(40px, 5vw, 60px)",
            letterSpacing: "-0.02em",
            maxWidth: "1000px",
            color: "#E6ECF7",
          }}
        >
          Pioneering{" "}
          <span style={{ color: "#34D8C5" }}>
            Vision AI for Space-Edge Satellite
          </span>
          <br />
          for Sovereign Intelligence
        </h1>

        {/* Lead paragraph */}
        <p
          className="mb-9 leading-[1.5]"
          style={{
            fontSize: "21px",
            color: "#8FA3C7",
            maxWidth: "800px",
          }}
        >
          Bridging terrestrial sensors and orbital telemetry to deliver
          decision-ready intelligence — directly from orbit, in minutes, not
          days.
        </p>

        {/* Chips */}
        <div className="flex flex-wrap gap-[10px] mb-8">
          {[
            "◎ On-Orbit Inference",
            "◉ SAR + EO Sensor Fusion",
            "⇄ Sovereign Data Path",
            "⚡ <50 ms Inference",
          ].map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-full px-[14px] py-[6px]"
              style={{
                border: "1px solid rgba(52,216,197,0.4)",
                background: "rgba(52,216,197,0.08)",
                color: "#34D8C5",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.06em",
              }}
            >
              {chip}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-[14px]">
          <a
            href="https://www.nodeflux.ai/contact-us"
            className="inline-flex items-center gap-[10px] rounded-lg px-[22px] py-3 text-sm font-semibold tracking-[0.04em] no-underline transition-all duration-150 ease-out"
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
            href="#architecture"
            className="inline-flex items-center gap-[10px] rounded-lg px-[22px] py-3 text-sm font-semibold tracking-[0.04em] no-underline transition-all duration-150 ease-out"
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
            Explore the Architecture
          </a>
        </div>
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes satellite-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
