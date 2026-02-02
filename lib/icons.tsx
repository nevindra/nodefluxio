import {
  ActivityIcon as Activity,
  Broadcast,
  Buildings,
  Camera,
  Car,
  Clock,
  Cpu,
  Database,
  Eye,
  Globe,
  HardDrives,
  Icon,
  Lightning,
  Lock,
  MapPin,
  Monitor,
  Shield,
  Stack,
  Users,
  Warning,
  WifiHigh,
} from "@phosphor-icons/react";

const iconMap: Record<string, Icon> = {
  activity: Activity,
  building2: Buildings,
  clock: Clock,
  globe: Globe,
  layers: Stack,
  server: HardDrives,
  users: Users,
  zap: Lightning,
  shield: Shield,
  eye: Eye,
  camera: Camera,
  radio: Broadcast,
  cpu: Cpu,
  lock: Lock,
  "alert-triangle": Warning,
  car: Car,
  "map-pin": MapPin,
  wifi: WifiHigh,
  database: Database,
  monitor: Monitor,
};

export function getIcon(name: string): Icon {
  return iconMap[name] || Activity;
}

export type IconName = keyof typeof iconMap;
