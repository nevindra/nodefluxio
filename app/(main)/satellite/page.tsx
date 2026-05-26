import { SatelliteHero } from "@/components/satellite/SatelliteHero";
import { ParadigmShift } from "@/components/satellite/ParadigmShift";
import { SpaceEdgeArchitecture } from "@/components/satellite/SpaceEdgeArchitecture";
import { MissionContext } from "@/components/satellite/MissionContext";
import { SensorFusion } from "@/components/satellite/SensorFusion";
import { StrategicOutlook } from "@/components/satellite/StrategicOutlook";
import { SatelliteEcosystem } from "@/components/satellite/SatelliteEcosystem";
import { SatelliteCTA } from "@/components/satellite/SatelliteCTA";

export const dynamic = "force-static";
export const revalidate = false;

export default function SatellitePage() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-[#E6ECF7] overflow-x-hidden">
      <SatelliteHero />
      <ParadigmShift />
      <SpaceEdgeArchitecture />
      <MissionContext />
      <SensorFusion />
      <StrategicOutlook />
      <SatelliteEcosystem />
      <SatelliteCTA />
    </main>
  );
}
