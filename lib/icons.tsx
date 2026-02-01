import {
  Activity,
  Building2,
  Clock,
  Globe,
  Layers,
  Server,
  Users,
  Zap,
  Shield,
  Eye,
  Camera,
  Radio,
  Cpu,
  Lock,
  AlertTriangle,
  Car,
  MapPin,
  Wifi,
  Database,
  Monitor,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  activity: Activity,
  building2: Building2,
  clock: Clock,
  globe: Globe,
  layers: Layers,
  server: Server,
  users: Users,
  zap: Zap,
  shield: Shield,
  eye: Eye,
  camera: Camera,
  radio: Radio,
  cpu: Cpu,
  lock: Lock,
  "alert-triangle": AlertTriangle,
  car: Car,
  "map-pin": MapPin,
  wifi: Wifi,
  database: Database,
  monitor: Monitor,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] || Activity;
}

export type IconName = keyof typeof iconMap;
