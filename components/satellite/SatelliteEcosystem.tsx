import Image from "next/image";

export function SatelliteEcosystem() {
  return (
    <section
      id="ecosystem"
      className="relative px-6 py-24 md:py-28 max-w-[1280px] mx-auto"
    >
      {/* Section tag */}
      <div className="inline-flex items-center gap-2 mb-4">
        <span className="block w-6 h-px bg-[#34D8C5]" aria-hidden="true" />
        <span className="text-[11px] font-semibold tracking-[0.18em] text-[#34D8C5] uppercase">
          Strategic Ecosystem
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-[28px] md:text-[42px] font-bold leading-[1.15] tracking-[-0.01em] text-[#E6ECF7] mb-4 max-w-4xl">
        Scaling through{" "}
        <span className="text-[#34D8C5]">Strategic Ecosystems</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[16px] md:text-[18px] text-[#8FA3C7] leading-[1.55] mb-7 max-w-[900px]">
        Space infrastructure rewards specialization. Nodeflux brings the
        sovereign Vision AI brain and partners with best-in-class satellite
        builders to deliver an end-to-end orbital ISR capability.
      </p>

      {/* Narrative lede */}
      <div className="mb-8 max-w-[860px]">
        <p className="text-[15px] md:text-[16px] text-[#8FA3C7] leading-relaxed">
          We don&apos;t build everything — we build the right alliances.{" "}
          <strong className="text-[#E6ECF7] font-semibold">
            Nodeflux × XDLINX
          </strong>{" "}
          pairs end-to-end small-satellite engineering with sovereign Vision AI,
          with technology transfer and local sourcing built in.
        </p>
      </div>

      {/* Partner row */}
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-9 rounded-xl border border-[#233252] px-3 py-8 md:px-8 mb-6"
        style={{ background: "rgba(11,18,32,0.5)" }}
      >
        {/* Nodeflux */}
        <div className="flex flex-col items-center text-center flex-1 max-w-[280px]">
          <Image
            src="/satellite/nodeflux.png"
            alt="Nodeflux"
            width={160}
            height={44}
            className="mb-2 brightness-0 invert opacity-95 w-auto h-[44px] object-contain"
          />
          <div className="text-[11px] tracking-[0.15em] text-[#8FA3C7] uppercase">
            Sovereign Vision AI · Brain
          </div>
        </div>

        {/* Plus divider */}
        <div className="text-[32px] font-light text-[#34D8C5] leading-none select-none">
          ✦
        </div>

        {/* XDLINX */}
        <div className="flex flex-col items-center text-center flex-1 max-w-[280px]">
          <Image
            src="/satellite/xdlinx.jpg"
            alt="XDLINX Space Labs"
            width={160}
            height={44}
            className="mb-2 w-auto h-[44px] object-contain"
          />
          <div className="text-[11px] tracking-[0.15em] text-[#8FA3C7] uppercase">
            Satellite Bus &amp; Payload · Body
          </div>
        </div>
      </div>

      {/* Mission grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Mission card */}
        <div
          className="rounded-xl border border-[#233252] p-[22px]"
          style={{ background: "rgba(17,26,46,0.5)" }}
        >
          <div className="text-[11px] font-bold tracking-[0.18em] text-[#34D8C5] mb-3">
            ▣ MISSION
          </div>
          <h4 className="text-[18px] font-bold text-[#E6ECF7] mb-2">
            Sovereign LEO ISR Satellite Mission
          </h4>
          <p className="text-[13px] text-[#8FA3C7] leading-relaxed">
            An MoU-anchored partnership to deliver sub-2 m, multi-spectral ISR
            for Indonesia — with a technology-transfer framework and
            locally-sourced components per government mandate.
          </p>
        </div>

        {/* Applications card */}
        <div
          className="rounded-xl border border-[#233252] p-[22px]"
          style={{ background: "rgba(17,26,46,0.5)" }}
        >
          <div className="text-[11px] font-bold tracking-[0.18em] text-[#34D8C5] mb-3">
            ◎ APPLICATIONS
          </div>
          <h4 className="text-[18px] font-bold text-[#E6ECF7] mb-2">
            Intelligence-as-a-Service
          </h4>
          <p className="text-[13px] text-[#8FA3C7] leading-relaxed">
            Maritime &amp; border security, disaster response, food &amp;
            agriculture, mining oversight, environmental sustainability —
            actionable intelligence streams, not raw pixels.
          </p>
        </div>
      </div>
    </section>
  );
}
