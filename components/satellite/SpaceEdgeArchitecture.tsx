"use client";

export function SpaceEdgeArchitecture() {
  return (
    <section id="architecture" className="relative px-6 py-24 md:py-28 max-w-[1280px] mx-auto">
      <style>{`
        @keyframes archDash {
          to { stroke-dashoffset: -90; }
        }
        .animate-dash {
          animation: archDash 3.5s linear infinite;
        }
      `}</style>

      {/* Section tag */}
      <div className="flex items-center gap-3 mb-4">
        <span
          className="block h-px w-8"
          style={{ background: "#34D8C5" }}
        />
        <span
          className="uppercase tracking-widest text-xs font-semibold"
          style={{ color: "#34D8C5", fontFamily: "'JetBrains Mono', monospace" }}
        >
          Reference Architecture
        </span>
      </div>

      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
        style={{ color: "#E6ECF7" }}
      >
        The Space-Edge Architecture{" "}
        <span style={{ color: "#34D8C5" }}>— From Ground to Orbit</span>
      </h2>

      {/* Subtitle */}
      <p className="text-base md:text-lg mb-6 max-w-2xl" style={{ color: "#8FA3C7" }}>
        Heavy training stays on the ground. Inference moves to orbit. Optical links keep data off foreign soil.
      </p>

      {/* Narrative lede */}
      <div className="mb-8 max-w-2xl">
        <p className="text-base leading-relaxed" style={{ color: "#8FA3C7" }}>
          Train on the ground.{" "}
          <span className="font-semibold" style={{ color: "#34D8C5" }}>
            Infer in orbit.
          </span>{" "}
          Downlink only what matters — a sovereign data path where classified imagery never transits foreign ground stations.
        </p>
      </div>

      {/* Architecture stage */}
      <div
        className="relative rounded-xl overflow-hidden mb-6"
        style={{
          border: "1px solid #233252",
          minHeight: "420px",
          background: `
            radial-gradient(ellipse at 25% 40%, rgba(52,216,197,0.06) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 60%, rgba(242,182,93,0.05) 0%, transparent 55%),
            #0B1220
          `,
          paddingTop: "2.5rem",
          paddingBottom: "1rem",
        }}
      >
        {/* Zone tags */}
        <span
          className="absolute top-3 left-4 uppercase text-[10px] font-bold tracking-widest px-2 py-1 rounded"
          style={{
            color: "#34D8C5",
            background: "rgba(52,216,197,0.08)",
            border: "1px solid rgba(52,216,197,0.18)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          ORBIT · ONLINE INFERENCE
        </span>
        <span
          className="absolute bottom-3 left-4 uppercase text-[10px] font-bold tracking-widest px-2 py-1 rounded"
          style={{
            color: "#F2B65D",
            background: "rgba(242,182,93,0.08)",
            border: "1px solid rgba(242,182,93,0.18)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          GROUND · OFFLINE TRAINING
        </span>
        <span
          className="hidden sm:block absolute top-3 right-4 uppercase text-[10px] font-bold tracking-widest px-2 py-1 rounded"
          style={{
            color: "#8FA3C7",
            background: "rgba(143,163,199,0.08)",
            border: "1px solid rgba(143,163,199,0.18)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          DATA FLOW
        </span>

        {/* SVG Diagram */}
        <svg
          viewBox="-130 0 1000 445"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Space-edge architecture"
          className="w-full h-auto"
        >
          <defs>
            <marker
              id="arrow-teal"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#34D8C5" />
            </marker>
            <marker
              id="arrow-amber"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="#F2B65D" />
            </marker>
          </defs>

          {/* Horizon divider */}
          <line
            x1="0"
            y1="263"
            x2="1000"
            y2="263"
            stroke="#233252"
            strokeWidth="1"
            strokeDasharray="3 4"
          />

          {/* Imaging Satellite */}
          <g transform="translate(220,110)">
            <circle
              r="42"
              fill="rgba(52,216,197,0.08)"
              stroke="rgba(52,216,197,0.20)"
              strokeWidth="1"
            />
            {/* Satellite body */}
            <rect x="-8" y="-10" width="16" height="12" rx="2" fill="#34D8C5" fillOpacity="0.6" />
            {/* Solar panels */}
            <rect x="-28" y="-6" width="16" height="4" rx="1" fill="#34D8C5" fillOpacity="0.4" stroke="#34D8C5" strokeWidth="0.5" />
            <rect x="12" y="-6" width="16" height="4" rx="1" fill="#34D8C5" fillOpacity="0.4" stroke="#34D8C5" strokeWidth="0.5" />
            {/* Panel connectors */}
            <line x1="-12" y1="-4" x2="-8" y2="-4" stroke="#34D8C5" strokeWidth="1" strokeOpacity="0.6" />
            <line x1="8" y1="-4" x2="12" y2="-4" stroke="#34D8C5" strokeWidth="1" strokeOpacity="0.6" />
            {/* Antenna */}
            <line x1="0" y1="-10" x2="0" y2="-18" stroke="#34D8C5" strokeWidth="1" strokeOpacity="0.7" />
            <circle cx="0" cy="-20" r="2" fill="none" stroke="#34D8C5" strokeWidth="1" strokeOpacity="0.7" />
            <text
              fill="#E6ECF7"
              x="0"
              y="62"
              textAnchor="middle"
              style={{ font: "600 12px Inter, sans-serif" }}
            >
              Imaging Satellite
            </text>
            <text
              fill="#8FA3C7"
              x="0"
              y="78"
              textAnchor="middle"
              style={{ font: "500 10.5px Inter, sans-serif" }}
            >
              SAR / EO capture · on-board inference
            </text>
          </g>

          {/* Orbital Compute Node */}
          <g transform="translate(640,110)">
            <circle
              r="44"
              fill="rgba(52,216,197,0.10)"
              stroke="rgba(52,216,197,0.28)"
              strokeWidth="1"
            />
            {/* Satellite body */}
            <rect x="-10" y="-12" width="20" height="14" rx="2" fill="#34D8C5" fillOpacity="0.7" />
            {/* Solar panels */}
            <rect x="-34" y="-8" width="20" height="5" rx="1" fill="#34D8C5" fillOpacity="0.45" stroke="#34D8C5" strokeWidth="0.5" />
            <rect x="14" y="-8" width="20" height="5" rx="1" fill="#34D8C5" fillOpacity="0.45" stroke="#34D8C5" strokeWidth="0.5" />
            {/* Panel connectors */}
            <line x1="-14" y1="-5.5" x2="-10" y2="-5.5" stroke="#34D8C5" strokeWidth="1" strokeOpacity="0.6" />
            <line x1="10" y1="-5.5" x2="14" y2="-5.5" stroke="#34D8C5" strokeWidth="1" strokeOpacity="0.6" />
            {/* Antenna */}
            <line x1="0" y1="-12" x2="0" y2="-21" stroke="#34D8C5" strokeWidth="1" strokeOpacity="0.7" />
            <circle cx="0" cy="-23" r="2.5" fill="none" stroke="#34D8C5" strokeWidth="1" strokeOpacity="0.7" />
            {/* Compute indicator dots */}
            <circle cx="-4" cy="-5" r="1.5" fill="#E6ECF7" fillOpacity="0.6" />
            <circle cx="0" cy="-5" r="1.5" fill="#E6ECF7" fillOpacity="0.6" />
            <circle cx="4" cy="-5" r="1.5" fill="#E6ECF7" fillOpacity="0.6" />
            <text
              fill="#E6ECF7"
              x="0"
              y="66"
              textAnchor="middle"
              style={{ font: "600 12px Inter, sans-serif" }}
            >
              Orbital Compute Node
            </text>
            <text
              fill="#8FA3C7"
              x="0"
              y="82"
              textAnchor="middle"
              style={{ font: "500 10.5px Inter, sans-serif" }}
            >
              Rad-tolerant inference · on-orbit buffering
            </text>
          </g>

          {/* ISL Link — background glow */}
          <path
            d="M 280,80 Q 430,20 580,80"
            stroke="rgba(52,216,197,0.25)"
            strokeWidth="8"
            fill="none"
          />
          {/* ISL Link — animated dash */}
          <path
            d="M 280,80 Q 430,20 580,80"
            stroke="#34D8C5"
            strokeWidth="2.2"
            fill="none"
            strokeDasharray="6 6"
            className="animate-dash"
          />
          <text
            fill="#E6ECF7"
            x="430"
            y="22"
            textAnchor="middle"
            style={{
              font: "700 10px 'JetBrains Mono', monospace",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            OPTICAL ISL
          </text>
          <text
            fill="#8FA3C7"
            x="430"
            y="38"
            textAnchor="middle"
            style={{ font: "500 10px Inter, sans-serif" }}
          >
            2.5–10 Gbps · SDA Tranche 1 standard
          </text>

          {/* Feeder Uplink */}
          <path
            d="M 220,338 L 220,205"
            stroke="#F2B65D"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 5"
            markerEnd="url(#arrow-amber)"
            className="animate-dash"
          />
          <text
            fill="#F2B65D"
            x="200"
            y="230"
            textAnchor="end"
            style={{
              font: "700 10px 'JetBrains Mono', monospace",
              letterSpacing: "0.12em",
            }}
          >
            FEEDER UPLINK
          </text>
          <text
            fill="#8FA3C7"
            x="200"
            y="246"
            textAnchor="end"
            style={{ font: "500 10px Inter, sans-serif" }}
          >
            Ka-band · model deploy
          </text>

          {/* Insight Downlink */}
          <path
            d="M 640,205 L 640,338"
            stroke="#34D8C5"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 5"
            markerEnd="url(#arrow-teal)"
            className="animate-dash"
          />
          <text
            fill="#34D8C5"
            x="660"
            y="230"
            textAnchor="start"
            style={{
              font: "700 10px 'JetBrains Mono', monospace",
              letterSpacing: "0.12em",
            }}
          >
            INSIGHT DOWNLINK
          </text>
          <text
            fill="#8FA3C7"
            x="660"
            y="246"
            textAnchor="start"
            style={{ font: "500 10px Inter, sans-serif" }}
          >
            {"<1 KB · coords · alerts"}
          </text>

          {/* Ground: Gateway / NOC */}
          <g transform="translate(220,392)">
            {/* Dish base */}
            <rect x="-5" y="-10" width="10" height="14" rx="1" fill="#F2B65D" fillOpacity="0.5" />
            {/* Dish bowl */}
            <path
              d="M -22,-38 Q 0,-52 22,-38"
              stroke="#F2B65D"
              strokeWidth="2.5"
              fill="none"
              strokeOpacity="0.8"
            />
            {/* Dish arm */}
            <line x1="0" y1="-10" x2="0" y2="-38" stroke="#F2B65D" strokeWidth="1.5" strokeOpacity="0.6" />
            {/* Signal rings */}
            <path d="M -8,-24 Q 0,-30 8,-24" stroke="#F2B65D" strokeWidth="1" fill="none" strokeOpacity="0.5" />
            <path d="M -14,-18 Q 0,-26 14,-18" stroke="#F2B65D" strokeWidth="1" fill="none" strokeOpacity="0.3" />
            <text
              fill="#F2B65D"
              x="0"
              y="20"
              textAnchor="middle"
              style={{ font: "600 12px Inter, sans-serif" }}
            >
              Gateway · NOC
            </text>
            <text
              fill="#8FA3C7"
              x="0"
              y="36"
              textAnchor="middle"
              style={{ font: "500 10.5px Inter, sans-serif" }}
            >
              PB dataset lake · GPU training cluster
            </text>
          </g>

          {/* Ground: Mission HQ */}
          <g transform="translate(640,392)">
            <rect
              x="-34"
              y="-54"
              width="68"
              height="44"
              rx="3"
              fill="#182238"
              stroke="#F2B65D"
              strokeWidth="1.5"
            />
            <line x1="-34" y1="-40" x2="34" y2="-40" stroke="#F2B65D" strokeWidth="1" />
            <line
              x1="-12"
              y1="-54"
              x2="-12"
              y2="-10"
              stroke="rgba(242,182,93,0.4)"
              strokeWidth="1"
            />
            <line
              x1="12"
              y1="-54"
              x2="12"
              y2="-10"
              stroke="rgba(242,182,93,0.4)"
              strokeWidth="1"
            />
            <rect
              x="-38"
              y="-10"
              width="76"
              height="9"
              rx="2"
              fill="#182238"
              stroke="#F2B65D"
              strokeWidth="1.5"
            />
            <rect
              x="-8"
              y="-1"
              width="16"
              height="7"
              rx="1"
              fill="#182238"
              stroke="#F2B65D"
              strokeWidth="1.5"
            />
            <text
              fill="#F2B65D"
              x="0"
              y="20"
              textAnchor="middle"
              style={{ font: "600 12px Inter, sans-serif" }}
            >
              Mission HQ
            </text>
            <text
              fill="#8FA3C7"
              x="0"
              y="36"
              textAnchor="middle"
              style={{ font: "500 10.5px Inter, sans-serif" }}
            >
              Coast Guard · defense · civil agencies
            </text>
          </g>
        </svg>
      </div>

      {/* Feature pills */}
      <div className="flex flex-wrap gap-3">
        {[
          "◎ Earth-Independent Free-Flyer Nodes",
          "⇄ SDA Tranche 1 OISL Standard",
          "▣ On-Orbit Buffering & Triggering",
          "↓ Low-Bandwidth Insight Downlink",
        ].map((pill) => (
          <span
            key={pill}
            className="rounded-full px-4 py-1.5 text-xs font-medium"
            style={{
              color: "#34D8C5",
              border: "1px solid rgba(52,216,197,0.30)",
              background: "rgba(52,216,197,0.06)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {pill}
          </span>
        ))}
      </div>
    </section>
  );
}
