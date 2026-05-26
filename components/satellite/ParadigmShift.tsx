export function ParadigmShift() {
  return (
    <section
      id="paradigm"
      className="relative px-6 py-24 md:py-28 max-w-[1280px] mx-auto"
    >
      {/* Section tag */}
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="block w-6 h-px bg-[#34D8C5]" aria-hidden="true" />
        <span className="text-[11px] font-semibold tracking-[0.18em] text-[#34D8C5] uppercase">
          The Paradigm Shift
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-[-0.01em] text-[#E6ECF7] mb-4 max-w-4xl">
        The Downlink Bottleneck &amp; the{" "}
        <span className="text-[#34D8C5]">AI Paradigm Shift</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[16px] md:text-[18px] text-[#8FA3C7] leading-[1.55] mb-7 max-w-[900px]">
        From days-old pixels to instant, decision-ready intelligence — the
        moment intelligence is created moves from the ground to the orbital bus.
      </p>

      {/* Narrative lede */}
      <div className="mb-8 max-w-[860px]">
        <p className="text-[15px] md:text-[16px] text-[#8FA3C7] leading-relaxed">
          In defense and disaster response,{" "}
          <strong className="text-[#E6ECF7] font-semibold">
            a threat detected a day late is a mission failure
          </strong>
          . Nodeflux moves the inference loop from the ground to the satellite —
          turning gigabytes of pixels into{" "}
          <span className="text-[#34D8C5] font-semibold">
            kilobytes of decisions
          </span>
          , delivered in the same orbital pass.
        </p>
      </div>

      {/* Split grid: 3 columns on desktop, stack on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch mt-3">
        {/* Legacy card */}
        <div
          className="flex flex-col rounded-xl p-7 border border-[rgba(242,93,93,0.4)]"
          style={{
            background:
              "linear-gradient(160deg, rgba(242,93,93,0.07), rgba(11,18,32,0.50))",
          }}
        >
          <div className="text-[11px] font-bold tracking-[0.18em] text-[#F25D5D] mb-1.5">
            ◀ LEGACY MODEL
          </div>
          <h3 className="text-[20px] font-bold text-[#E6ECF7] mb-4">
            Traditional Satellite Pipeline
          </h3>

          <div className="flex flex-col gap-2 my-3">
            <PipelineStep icon="◉" label="Capture raw imagery on orbit" />
            <PipelineArrow label="500 MB – several GB per scene" variant="legacy" />
            <PipelineStep icon="▤" label="Queue at terrestrial data center" />
            <PipelineArrow label="batch processing" variant="legacy" />
            <PipelineStep icon="⌛" label="Analyst review &amp; tasking" isHtml />
          </div>

          <MetricLine
            label="Time to insight"
            value="HOURS – DAYS · ~550 ms relay"
            variant="legacy"
          />
        </div>

        {/* VS divider — hidden on mobile */}
        <div className="hidden md:flex items-center justify-center">
          <div
            className="w-11 h-11 rounded-full border border-[#233252] bg-[#0B1220] flex items-center justify-center text-[12px] font-bold tracking-[0.2em] text-[#8FA3C7]"
          >
            VS
          </div>
        </div>

        {/* Modern card */}
        <div
          className="flex flex-col rounded-xl p-7 border border-[rgba(52,216,197,0.5)]"
          style={{
            background:
              "linear-gradient(160deg, rgba(52,216,197,0.08), rgba(11,18,32,0.50))",
            boxShadow: "0 0 40px rgba(52,216,197,0.08)",
          }}
        >
          <div className="text-[11px] font-bold tracking-[0.18em] text-[#34D8C5] mb-1.5">
            ▶ NEW PARADIGM
          </div>
          <h3 className="text-[20px] font-bold text-[#E6ECF7] mb-4">
            Space-Edge Computing
          </h3>

          <div className="flex flex-col gap-2 my-3">
            <PipelineStep icon="◉" label="Capture raw imagery on orbit" />
            <PipelineArrow label="on-board inference" variant="modern" />
            <PipelineStep icon="⚡" label="AI runs directly on the satellite bus" />
            <PipelineArrow label="<1 KB per detection · 85–99% reduction" variant="modern" />
            <PipelineStep
              icon="✦"
              label="Decision-ready intelligence delivered"
              highlight
            />
          </div>

          <MetricLine
            label="Time to insight"
            value="MINUTES · <50 ms inference"
            variant="modern"
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                        */
/* ------------------------------------------------------------------ */

function PipelineStep({
  icon,
  label,
  highlight = false,
  isHtml = false,
}: {
  icon: string;
  label: string;
  highlight?: boolean;
  isHtml?: boolean;
}) {
  return (
    <div
      className={[
        "flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border text-[14px]",
        "bg-[rgba(17,26,46,0.6)]",
        highlight
          ? "border-[#34D8C5] text-[#34D8C5]"
          : "border-[#233252] text-[#E6ECF7]",
      ].join(" ")}
    >
      <span className="text-[#8FA3C7] shrink-0">{icon}</span>
      {isHtml ? (
        <span dangerouslySetInnerHTML={{ __html: label }} />
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}

function PipelineArrow({
  label,
  variant,
}: {
  label: string;
  variant: "legacy" | "modern";
}) {
  const isLegacy = variant === "legacy";

  const lineGradient = isLegacy
    ? "linear-gradient(to bottom, transparent, rgba(242,93,93,0.35) 20%, #F25D5D)"
    : "linear-gradient(to bottom, transparent, rgba(52,216,197,0.35) 20%, #34D8C5)";

  const triangleColor = isLegacy ? "#F25D5D" : "#34D8C5";
  const labelColor = isLegacy ? "text-[#F25D5D]" : "text-[#34D8C5]";

  return (
    <div className="flex flex-col items-center gap-1.5 py-3 min-h-[56px] text-[11px] tracking-[0.08em] uppercase">
      {/* Vertical line */}
      <span
        className="block w-0.5 h-7"
        style={{ background: lineGradient }}
        aria-hidden="true"
      />
      {/* Triangle */}
      <span
        className="block w-0 h-0 -mt-0.5"
        style={{
          borderLeft: "7px solid transparent",
          borderRight: "7px solid transparent",
          borderTop: `9px solid ${triangleColor}`,
        }}
        aria-hidden="true"
      />
      {/* Label */}
      <span className={`mt-0.5 ${labelColor} text-[11px] tracking-[0.06em]`}>
        {label}
      </span>
    </div>
  );
}

function MetricLine({
  label,
  value,
  variant,
}: {
  label: string;
  value: string;
  variant: "legacy" | "modern";
}) {
  const valueColor =
    variant === "legacy" ? "text-[#F25D5D]" : "text-[#34D8C5]";

  return (
    <div className="mt-auto pt-3.5 border-t border-[#233252] flex justify-between items-center text-[13px]">
      <span className="text-[#8FA3C7]">{label}</span>
      <span className={`font-bold ${valueColor}`}>{value}</span>
    </div>
  );
}
