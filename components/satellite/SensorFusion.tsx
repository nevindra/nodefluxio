import Image from "next/image";

export function SensorFusion() {
  return (
    <section
      id="sensors"
      className="relative px-6 py-24 md:py-28 max-w-[1280px] mx-auto"
    >
      {/* Section tag */}
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="block w-6 h-px bg-[#34D8C5]" aria-hidden="true" />
        <span className="text-[11px] font-semibold tracking-[0.18em] text-[#34D8C5] uppercase">
          Sensor Fusion · On-Orbit Inference
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-[-0.01em] text-[#E6ECF7] mb-4 max-w-4xl">
        Fusing <span className="text-[#34D8C5]">SAR</span> and{" "}
        <span className="text-[#34D8C5]">On-Orbit AI</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[16px] md:text-[18px] text-[#8FA3C7] leading-[1.55] mb-7 max-w-[900px]">
        Cloud-penetrating Synthetic Aperture Radar paired with space-rated AI
        accelerators turns raw radar returns into geolocated targets in minutes.
      </p>

      {/* Narrative lede */}
      <div className="mb-8 max-w-[820px]">
        <p className="text-[17px] text-[#E6ECF7] font-normal leading-[1.55] tracking-[-0.005em]">
          Equatorial cloud cover blinds optical satellites where it matters most.{" "}
          <span className="text-[#34D8C5] font-semibold">
            SAR sees through the weather
          </span>{" "}
          — and Nodeflux runs the interpretation on-orbit, so only coordinates
          and classifications come down.{" "}
          <strong className="text-[#E6ECF7] font-semibold">
            Interceptors dispatch in minutes, not days.
          </strong>
        </p>
      </div>

      {/* SAR grid — 2-column on desktop, single column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {/* Optical pane — "bad" */}
        <div
          className="flex flex-col rounded-xl overflow-hidden border border-[#233252] bg-[rgba(11,18,32,0.5)]"
        >
          {/* Image container */}
          <div className="relative h-[220px] overflow-hidden">
            <Image
              src="/satellite/optical_image.png"
              alt="Optical EO satellite image obscured by cloud cover"
              fill
              className="object-cover object-center"
            />
            {/* Cloud-cover overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(11,18,32,0.28)" }}
            >
              <span
                className="text-[11px] font-bold tracking-[0.2em] text-[#F25D5D]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  textShadow: "0 0 8px rgba(0,0,0,0.8)",
                }}
              >
                OBSCURED BY CLOUD COVER
              </span>
            </div>
          </div>

          {/* Pane body */}
          <div className="px-5 py-[18px]">
            <h4
              className="text-[16px] mb-2 text-[#F25D5D]"
            >
              ◉ Optical EO · Tropical Reality
            </h4>
            <p className="text-[13px] text-[#8FA3C7] leading-[1.55]">
              Persistent equatorial cloud cover renders traditional optical
              satellites blind for large parts of the day, exactly when illegal
              activity peaks.
            </p>
          </div>
        </div>

        {/* SAR pane — "good" */}
        <div
          className="flex flex-col rounded-xl overflow-hidden border border-[#233252] bg-[rgba(11,18,32,0.5)]"
        >
          {/* Image container */}
          <div className="relative h-[220px] overflow-hidden">
            <Image
              src="/satellite/sar_image.png"
              alt="SAR satellite image showing dark vessel detections"
              fill
              className="object-cover object-center"
            />
            {/* Target reticle */}
            <div
              className="absolute z-10"
              style={{
                top: "53%",
                left: "62%",
                width: 30,
                height: 30,
                border: "1px solid #F25D5D",
                borderRadius: 2,
                transform: "translate(-50%, -50%)",
                boxShadow: "0 0 0 4px rgba(242,93,93,0.15)",
              }}
              aria-hidden="true"
            />
            {/* Bottom-left label */}
            <span
              className="absolute bottom-3 left-3 text-[10px] font-bold tracking-[0.18em] text-[#F25D5D]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                textShadow: "0 0 6px rgba(0,0,0,0.9)",
              }}
            >
              TARGET ACQUIRED · DARK VESSEL
            </span>
          </div>

          {/* Pane body */}
          <div className="px-5 py-[18px]">
            <h4
              className="text-[16px] mb-2 text-[#34D8C5]"
            >
              ◎ Synthetic Aperture Radar · All-Weather
            </h4>
            <p className="text-[13px] text-[#8FA3C7] leading-[1.55]">
              SAR penetrates cloud day and night, exposing dark vessels and
              coastal incursions — but at the cost of compute-heavy
              interpretation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
