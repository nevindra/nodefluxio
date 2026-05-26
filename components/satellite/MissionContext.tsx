import Image from "next/image";

export function MissionContext() {
  return (
    <section
      id="usecases"
      className="relative px-6 py-24 md:py-28 max-w-[1280px] mx-auto"
    >
      {/* Section tag */}
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="block w-6 h-px bg-[#34D8C5]" aria-hidden="true" />
        <span className="text-[11px] font-semibold tracking-[0.18em] text-[#34D8C5] uppercase">
          Mission Context
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-[-0.01em] text-[#E6ECF7] mb-4 max-w-4xl">
        Solving the{" "}
        <span className="text-[#34D8C5]">&ldquo;Dark Vessel&rdquo; Problem</span>{" "}
        — and Beyond
      </h1>

      {/* Subtitle */}
      <p className="text-[16px] md:text-[18px] text-[#8FA3C7] leading-[1.55] mb-7 max-w-[900px]">
        Persistent overhead surveillance is the only credible answer to
        non-cooperative targets across one of the world&apos;s largest Exclusive
        Economic Zones — and the same AI capability serves disaster response,
        food security, and environmental missions.
      </p>

      {/* Narrative lede */}
      <div className="mb-8 max-w-[820px]">
        <p className="text-[17px] text-[#E6ECF7] leading-[1.55] tracking-[-0.005em]">
          17,000 islands. 3 million km² of EEZ.{" "}
          <strong className="text-[#E6ECF7] font-semibold">
            No ground network can watch it continuously
          </strong>{" "}
          — and AIS-spoofing &ldquo;dark vessels&rdquo; are designed to disappear from
          the ones that try.{" "}
          <span className="text-[#34D8C5] font-semibold">
            One capability, many national missions.
          </span>
        </p>
      </div>

      {/* Map + stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-7">
        {/* Map wrap */}
        <div className="relative rounded-xl border border-[#233252] bg-[rgba(11,18,32,0.5)] min-h-[360px] overflow-hidden">
          {/* Satellite imagery */}
          <Image
            src="/satellite/dark_vessels.png"
            alt="SAR satellite imagery showing dark vessel detections over Indonesian waters"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 60vw"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 rounded-xl pointer-events-none z-[1]"
            style={{
              background:
                "linear-gradient(to bottom, rgba(11,18,32,0.18) 0%, rgba(11,18,32,0.52) 100%), radial-gradient(circle at 80% 20%, rgba(52,216,197,0.12), transparent 55%)",
            }}
            aria-hidden="true"
          />

          {/* Caption */}
          <span
            className="absolute left-[14px] z-[2] font-mono text-[9px] tracking-[0.18em] text-[rgba(52,216,197,0.7)]"
            style={{ bottom: "44px" }}
          >
            EEZ · INDONESIAN ARCHIPELAGO · LEO PASS 04:32 UTC
          </span>

          {/* Legend */}
          <div
            className="absolute left-[14px] right-[14px] z-[2] flex flex-wrap gap-[14px] rounded-[6px] px-[10px] py-[6px] text-[11px] text-[#8FA3C7]"
            style={{
              bottom: "12px",
              background: "rgba(11,18,32,0.55)",
              backdropFilter: "blur(4px)",
            }}
          >
            <span className="inline-flex items-center gap-[6px]">
              <span
                className="block w-[10px] h-[10px] rounded-full shrink-0"
                style={{ background: "#F25D5D" }}
                aria-hidden="true"
              />
              Dark Vessel Detection
            </span>
            <span className="inline-flex items-center gap-[6px]">
              <span
                className="block w-[10px] h-[10px] rounded-full shrink-0"
                style={{ background: "#34D8C5" }}
                aria-hidden="true"
              />
              EEZ Boundary
            </span>
            <span className="inline-flex items-center gap-[6px]">
              <span
                className="block w-[10px] h-[10px] rounded-full shrink-0"
                style={{ background: "#34D8C5", opacity: 0.5 }}
                aria-hidden="true"
              />
              LEO Pass
            </span>
          </div>
        </div>

        {/* Stat cards column */}
        <div className="flex flex-col gap-[14px]">
          {/* Card 1 — Archipelago Footprint (teal) */}
          <div className="rounded-xl border border-[#233252] bg-[rgba(17,26,46,0.6)] px-5 py-[18px]">
            <div className="text-[11px] font-semibold tracking-[0.16em] text-[#8FA3C7] uppercase mb-[6px]">
              Archipelago Footprint
            </div>
            <div className="text-[32px] font-extrabold leading-none text-[#34D8C5]">
              17,000+{" "}
              <span className="text-[14px] text-[#8FA3C7] font-medium">
                islands
              </span>
            </div>
            <div className="text-[12px] text-[#8FA3C7] mt-[6px]">
              Millions of km² of EEZ to monitor continuously.
            </div>
          </div>

          {/* Card 2 — Maritime & Border Security (amber) */}
          <div className="rounded-xl border border-[#233252] bg-[rgba(17,26,46,0.6)] px-5 py-[18px]">
            <div className="text-[11px] font-semibold tracking-[0.16em] text-[#8FA3C7] uppercase mb-[6px]">
              Maritime &amp; Border Security
            </div>
            <div className="text-[32px] font-extrabold leading-none text-[#F2B65D]">
              3M{" "}
              <span className="text-[14px] text-[#8FA3C7] font-medium">
                km² EEZ
              </span>
            </div>
            <div className="text-[12px] text-[#8FA3C7] mt-[6px]">
              Persistent overhead detection of non-cooperative vessels.
            </div>
            <div className="flex flex-wrap gap-2 mt-[10px]">
              {["IUU FISHING", "AIS SPOOFING", "GRAY-ZONE OPS"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-semibold tracking-[0.05em] px-[10px] py-[5px] rounded-[4px] border border-[rgba(242,93,93,0.4)] bg-[rgba(242,93,93,0.06)] text-[#F25D5D]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 — Food Security & Forests (violet) */}
          <div className="rounded-xl border border-[#233252] bg-[rgba(17,26,46,0.6)] px-5 py-[18px]">
            <div className="text-[11px] font-semibold tracking-[0.16em] text-[#8FA3C7] uppercase mb-[6px]">
              Food Security &amp; Forests
            </div>
            <div className="text-[24px] font-extrabold leading-none text-[#8B5CF6]">
              30M ha{" "}
              <span className="text-[14px] text-[#8FA3C7] font-medium">
                farmland
              </span>{" "}
              · 2M km²{" "}
              <span className="text-[14px] text-[#8FA3C7] font-medium">
                forest
              </span>
            </div>
            <div className="text-[12px] text-[#8FA3C7] mt-[6px]">
              Crop yield, deforestation &amp; ESG monitoring at national scale.
            </div>
          </div>

          {/* Card 4 — Disaster, Mining & Urban (teal, smaller text) */}
          <div className="rounded-xl border border-[#233252] bg-[rgba(17,26,46,0.6)] px-5 py-[14px]">
            <div className="text-[11px] font-semibold tracking-[0.16em] text-[#8FA3C7] uppercase mb-[6px]">
              Disaster, Mining &amp; Urban
            </div>
            <div className="text-[20px] font-extrabold leading-none text-[#34D8C5]">
              Rapid response · Resource oversight
            </div>
            <div className="text-[12px] text-[#8FA3C7] mt-[6px]">
              Earthquake/flood damage assessment, illegal mining, urban planning.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
