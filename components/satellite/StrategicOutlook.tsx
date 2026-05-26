import type { ReactNode } from "react";

export function StrategicOutlook() {
  return (
    <section
      id="outlook"
      className="relative px-6 py-24 md:py-28 max-w-[1280px] mx-auto"
    >
      {/* Section tag */}
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="block w-6 h-px bg-[#34D8C5]" aria-hidden="true" />
        <span className="text-[11px] font-semibold tracking-[0.18em] text-[#34D8C5] uppercase">
          The Strategic Era of AI in Space
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-[-0.01em] text-[#E6ECF7] mb-4 max-w-4xl">
        Hard Constraints,{" "}
        <span className="text-[#34D8C5]">Massive Tailwinds</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[16px] md:text-[18px] text-[#8FA3C7] leading-[1.55] mb-7 max-w-[900px]">
        Orbit imposes brutal physics — but the silicon curve and the market are
        bending sharply in our favor.
      </p>

      {/* Narrative lede */}
      <div className="mb-8 max-w-[820px]">
        <p className="text-[17px] text-[#E6ECF7] leading-[1.55] tracking-[-0.005em]">
          Rad-tolerant AI accelerators are shipping. The orbital AI market is{" "}
          <strong className="font-semibold">tripling this decade</strong>, with
          Asia-Pacific leading the growth.{" "}
          <span className="text-[#34D8C5] font-semibold">
            The window to lead is now.
          </span>
        </p>
      </div>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {/* Constraints column */}
        <div
          className="flex flex-col rounded-xl border border-[#233252] p-[22px_24px]"
          style={{ background: "rgba(17, 26, 46, 0.55)" }}
        >
          {/* Column header */}
          <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-[#233252]">
            <span
              className="text-[10px] font-bold tracking-[0.2em] px-2 py-[3px] rounded border"
              style={{
                background: "rgba(242,93,93,0.12)",
                color: "#F25D5D",
                border: "1px solid rgba(242,93,93,0.4)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              CONSTRAINTS
            </span>
            <span className="text-[15px] font-bold text-[#E6ECF7]">
              Brutal Physics of Orbit
            </span>
          </div>

          {/* Row items */}
          <ConstraintRow
            icon="▥"
            colorVariant="amber"
            title="Thermal &amp; SWaP"
            description="Vacuum cooling = radiation only. AI radiators stretch size, weight &amp; power envelopes."
          />
          <ConstraintRow
            icon="⚡"
            colorVariant="red"
            title="Radiation &amp; SEUs"
            description="High-energy particles flip bits and degrade COTS silicon over mission lifetime."
          />
          <ConstraintRow
            icon="◉"
            colorVariant="amber"
            title="Debris Cross-Section"
            description="Larger panels = larger target against 1M+ tracked debris objects in LEO."
          />
          <ConstraintRow
            icon="⦿"
            colorVariant="violet"
            title="Sovereignty Imperative"
            description="Classified data must never transit foreign ground stations — process it in orbit."
            isLast
          />
        </div>

        {/* Outlook column */}
        <div
          className="flex flex-col rounded-xl border border-[#233252] p-[22px_24px]"
          style={{ background: "rgba(17, 26, 46, 0.55)" }}
        >
          {/* Column header */}
          <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-[#233252]">
            <span
              className="text-[10px] font-bold tracking-[0.2em] px-2 py-[3px] rounded border"
              style={{
                background: "rgba(52,216,197,0.12)",
                color: "#34D8C5",
                border: "1px solid rgba(52,216,197,0.4)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              OUTLOOK
            </span>
            <span className="text-[15px] font-bold text-[#E6ECF7]">
              Market &amp; Silicon Tailwinds
            </span>
          </div>

          {/* Stat rows */}
          <OutlookStat
            num="$1.44B → $4.84B"
            colorVariant="teal"
            label={
              <>
                <b>Orbital AI market</b> 2025–2034 · 12.96% CAGR.
              </>
            }
          />
          <OutlookStat
            num="42.6%"
            colorVariant="amber"
            label={
              <>
                <b>Defense &amp; gov&apos;t share</b> of global orbital compute
                revenue.
              </>
            }
          />
          <OutlookStat
            num="15.3% CAGR"
            colorVariant="violet"
            label={
              <>
                <b>Asia-Pacific</b> — fastest-growing region globally.
              </>
            }
          />
          <OutlookStat
            num="100×"
            colorVariant="teal"
            label={
              <>
                <b>Silicon curve bending</b> · Starcloud-1 H100 (Nov 2025),
                Blackwell on Starcloud-2 (Oct 2026).
              </>
            }
          />
          <OutlookStat
            num="200 TOPS"
            colorVariant="amber"
            isLast
            label={
              <>
                <b>Rad-tolerant Orin</b> shipping (DARPA-backed, &lt;30 W) —
                first usable space-grade AI SoC.
              </>
            }
          />
        </div>
      </div>

      {/* Strategic banner */}
      <div
        className="mt-2 px-[22px] py-4 rounded-xl border border-[rgba(52,216,197,0.5)] text-[14.5px] leading-[1.5] text-[#E6ECF7]"
        style={{
          background:
            "linear-gradient(90deg, rgba(52,216,197,0.08), rgba(139,92,246,0.05))",
        }}
      >
        <strong className="text-[#34D8C5]">Net-net —</strong> AI is no longer a
        satellite feature; it is the{" "}
        <strong className="text-[#34D8C5]">
          defining intelligence layer
        </strong>{" "}
        of modern space infrastructure. The hardware is arriving, the market is
        tripling, and Asia-Pacific is leading the curve.
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                        */
/* ------------------------------------------------------------------ */

type ColorVariant = "amber" | "red" | "violet" | "teal";

const iconBgMap: Record<ColorVariant, string> = {
  amber: "rgba(242,182,93,0.12)",
  red: "rgba(242,93,93,0.12)",
  violet: "rgba(139,92,246,0.12)",
  teal: "rgba(52,216,197,0.12)",
};

const iconColorMap: Record<ColorVariant, string> = {
  amber: "#F2B65D",
  red: "#F25D5D",
  violet: "#8B5CF6",
  teal: "#34D8C5",
};

function ConstraintRow({
  icon,
  colorVariant,
  title,
  description,
  isLast = false,
}: {
  icon: string;
  colorVariant: ColorVariant;
  title: string;
  description: string;
  isLast?: boolean;
}) {
  return (
    <div
      className={[
        "grid gap-3 py-2.5",
        isLast ? "" : "border-b border-dashed border-[rgba(35,50,82,0.6)]",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ gridTemplateColumns: "32px 1fr" }}
    >
      {/* Icon */}
      <div
        className="w-8 h-8 rounded-[6px] flex items-center justify-center text-base shrink-0"
        style={{
          background: iconBgMap[colorVariant],
          color: iconColorMap[colorVariant],
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div>
        <h5
          className="text-[13px] font-bold tracking-[0.02em] text-[#E6ECF7] mb-0.5"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="text-[12px] text-[#8FA3C7] leading-[1.45]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}

function OutlookStat({
  num,
  colorVariant,
  label,
  isLast = false,
}: {
  num: string;
  colorVariant: ColorVariant;
  label: ReactNode;
  isLast?: boolean;
}) {
  return (
    <div
      className={[
        "flex items-baseline gap-2.5 py-2.5",
        isLast ? "" : "border-b border-dashed border-[rgba(35,50,82,0.6)]",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className="text-[22px] font-extrabold shrink-0 min-w-[132px]"
        style={{
          color: iconColorMap[colorVariant],
          fontFeatureSettings: '"tnum"',
        }}
      >
        {num}
      </span>
      <span className="text-[12px] text-[#8FA3C7] leading-[1.4]">{label}</span>
    </div>
  );
}
