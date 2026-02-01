import { IconName } from "./icons";

export interface Benefit {
  title: string;
  description: string;
  icon: IconName;
}

export interface TacticalSolution {
  title: string;
  description: string;
  analyticsUsed: string[];
  operationalBenefits: string[];
}

export interface UseCase {
  name: string;
  description: string;
  icon: IconName;
  capabilities: string[];
}

export interface Solution {
  slug: string;

  // Hero
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;

  // Sections
  benefits: Benefit[];
  topologyImage: string;
  tacticalSolutions: TacticalSolution[];
  useCases: UseCase[];
}

export const solutions: Solution[] = [
  {
    slug: "massive-surveillance",
    badge: "Public Safety Solution",
    title: "City-Wide",
    titleHighlight: "Surveillance",
    description:
      "Monitor thousands of cameras from one screen. Spot incidents instantly. Help your team respond faster when it matters most.",
    benefits: [
      {
        title: "24/7 AI Monitoring",
        description:
          "AI watches every camera around the clock and alerts your team the moment something happens.",
        icon: "zap",
      },
      {
        title: "One Dashboard",
        description:
          "See all your cameras in one place, no matter how many locations you manage.",
        icon: "layers",
      },
      {
        title: "Faster Response",
        description:
          "Get instant alerts on mobile or radio so your team can act immediately.",
        icon: "clock",
      },
      {
        title: "Your Data, Your Control",
        description:
          "Everything runs on your own servers. Your data never leaves your infrastructure.",
        icon: "server",
      },
    ],
    topologyImage: "/solutions/massive-surveillance.png",
    tacticalSolutions: [
      {
        title: "Body Camera System",
        description:
          "Smart body cameras for field officers with live AI analysis. Identify persons of interest instantly and stream directly to command center.",
        analyticsUsed: ["Face Recognition", "People Analytics", "Anomaly Detection"],
        operationalBenefits: [
          "Identify threats in real-time during operations",
          "Secure evidence recording with encryption",
          "Live video feed to command center",
        ],
      },
      {
        title: "Drone Surveillance",
        description:
          "AI-powered drones for aerial monitoring. Get bird's eye view of large areas, crowds, or hard-to-reach locations.",
        analyticsUsed: ["People Analytics", "Crowd Estimation", "Anomaly Detection"],
        operationalBenefits: [
          "Cover large areas quickly from the air",
          "Deploy rapidly for emergencies",
          "Track movement patterns from above",
        ],
      },
      {
        title: "Command Center Integration",
        description:
          "Connect all your existing CCTV cameras to one AI-powered command center. See everything, miss nothing.",
        analyticsUsed: [
          "Face Recognition",
          "People Analytics",
          "People Fighting",
          "Anomaly Detection",
        ],
        operationalBenefits: [
          "Monitor all locations 24/7 from one room",
          "Coordinate security across multiple sites",
          "Get automatic alerts for suspicious activity",
        ],
      },
    ],
    useCases: [
      {
        name: "Critical Infrastructure",
        description:
          "Protect airports, power plants, and government buildings. Detect intruders and suspicious activity before incidents happen.",
        icon: "building2",
        capabilities: [
          "Perimeter breach alerts",
          "Watchlist face matching",
          "Suspicious object detection",
          "Entry point monitoring",
        ],
      },
      {
        name: "Event Security",
        description:
          "Keep large gatherings safe. Monitor crowd size, spot trouble early, and coordinate response across teams.",
        icon: "users",
        capabilities: [
          "Crowd size monitoring",
          "Unusual activity alerts",
          "Multi-team coordination",
          "Mobile command support",
        ],
      },
      {
        name: "City Operations",
        description:
          "Unify all city cameras into one system. Track vehicles, investigate incidents, and respond to emergencies faster.",
        icon: "globe",
        capabilities: [
          "Vehicle & plate tracking",
          "Cross-camera incident linking",
          "Video search & playback",
          "Agency data sharing",
        ],
      },
    ],
  },
  {
    slug: "smart-building",
    badge: "Building Security Solution",
    title: "Smart Building",
    titleHighlight: "Security",
    description:
      "Secure your building with AI. Face recognition access, smart parking, and 24/7 monitoring—all in one system that makes security simple.",
    benefits: [
      {
        title: "Complete Protection",
        description:
          "One system that secures entrances, parking, and common areas together.",
        icon: "shield",
      },
      {
        title: "Automated Security",
        description:
          "AI handles routine monitoring so your team can focus on what matters.",
        icon: "zap",
      },
      {
        title: "Touchless Access",
        description:
          "No cards, no keys. People walk in with just their face—fast and secure.",
        icon: "users",
      },
      {
        title: "Clear Insights",
        description:
          "See who enters, when, and where. Get reports that help you improve security.",
        icon: "database",
      },
    ],
    topologyImage: "/solutions/building-management.webp",
    tacticalSolutions: [
      {
        title: "Smart Parking",
        description:
          "AI manages your parking automatically. Recognize vehicles, guide drivers to empty spots, and handle billing without tickets.",
        analyticsUsed: ["Vehicle Analytics", "License Plate Recognition"],
        operationalBenefits: [
          "Find empty spots faster, reduce congestion",
          "Track every vehicle entering and exiting",
          "Automate parking fees and billing",
        ],
      },
      {
        title: "Face Recognition Access",
        description:
          "Let authorized people in with just their face. No cards to lose, no PINs to forget. Fast, secure, and touchless.",
        analyticsUsed: [
          "Face Recognition",
          "Face Searching and Matching API",
          "Anomaly Detection",
        ],
        operationalBenefits: [
          "Walk-through access for registered users",
          "Instant alerts for unauthorized attempts",
          "Complete access logs for audits",
        ],
      },
      {
        title: "Visitor Management",
        description:
          "Greet visitors by name, check them in automatically, and notify hosts instantly. Make every guest feel welcome.",
        analyticsUsed: ["Face Recognition", "People Analytics"],
        operationalBenefits: [
          "Personalized welcome for VIP guests",
          "Self-service check-in for visitors",
          "Professional first impression",
        ],
      },
    ],
    useCases: [
      {
        name: "Corporate Office",
        description:
          "Secure your office with face recognition access, visitor management, and employee attendance tracking.",
        icon: "building2",
        capabilities: [
          "Department-based access",
          "Pre-register visitors",
          "Track attendance",
          "VIP arrival alerts",
        ],
      },
      {
        name: "Residential Complex",
        description:
          "Keep residents safe with face recognition entry, delivery verification, and 24/7 common area monitoring.",
        icon: "users",
        capabilities: [
          "Resident face registration",
          "Verify delivery personnel",
          "Monitor shared spaces",
          "Emergency notifications",
        ],
      },
      {
        name: "Mixed-Use Building",
        description:
          "Manage retail, office, and residential floors with one system. Different access rules for different areas.",
        icon: "layers",
        capabilities: [
          "Separate tenant access",
          "Floor-based permissions",
          "Unified parking system",
          "Single monitoring dashboard",
        ],
      },
    ],
  },
  {
    slug: "smart-city",
    badge: "Urban Management Solution",
    title: "Smart City",
    titleHighlight: "Management",
    description:
      "Make your city safer and run smoother. Monitor public spaces, manage traffic, and respond to incidents faster—all from one platform.",
    benefits: [
      {
        title: "Safer Streets",
        description:
          "Detect incidents in public areas and respond before situations escalate.",
        icon: "shield",
      },
      {
        title: "Better City Life",
        description:
          "Reduce traffic jams, manage crowds, and keep public spaces clean and safe.",
        icon: "users",
      },
      {
        title: "Smarter Planning",
        description:
          "Use real data to plan city improvements that actually solve problems.",
        icon: "database",
      },
      {
        title: "Save Resources",
        description:
          "Do more with less. AI helps your team focus where they're needed most.",
        icon: "zap",
      },
    ],
    topologyImage: "/solutions/smart-city.webp",
    tacticalSolutions: [
      {
        title: "Public Space Safety",
        description:
          "Keep parks, plazas, and public areas safe. AI spots trouble early and alerts responders instantly.",
        analyticsUsed: ["People Analytics", "Anomaly Detection", "Face Recognition"],
        operationalBenefits: [
          "Early warning for incidents",
          "Faster emergency response",
          "Data to improve public services",
        ],
      },
      {
        title: "Crowd Management",
        description:
          "Monitor crowd sizes at events and public gatherings. Get alerts when areas get too crowded or fights break out.",
        analyticsUsed: [
          "Crowd Estimation",
          "People Fighting",
          "Anomaly Detection",
          "Personal Protective Equipment",
        ],
        operationalBenefits: [
          "Prevent dangerous overcrowding",
          "Quick response to disturbances",
          "Enforce public regulations",
        ],
      },
      {
        title: "Traffic Management",
        description:
          "Monitor city traffic in real-time. Detect accidents instantly and find ways to reduce congestion.",
        analyticsUsed: ["Vehicle Analytics", "License Plate Recognition", "Anomaly Detection"],
        operationalBenefits: [
          "Reduce traffic jams",
          "Detect accidents immediately",
          "Plan better road infrastructure",
        ],
      },
    ],
    useCases: [
      {
        name: "Transit Stations",
        description:
          "Keep bus and train stations safe. Monitor crowds, detect suspicious items, and manage queues during rush hour.",
        icon: "car",
        capabilities: [
          "Crowd level monitoring",
          "Abandoned item alerts",
          "Queue management",
          "Rush hour insights",
        ],
      },
      {
        name: "District Security",
        description:
          "Connect cameras across neighborhoods. Coordinate security teams and track incidents across the city.",
        icon: "globe",
        capabilities: [
          "Cross-area coordination",
          "Link related incidents",
          "Real-time alerts",
          "Search past footage",
        ],
      },
      {
        name: "Traffic Control",
        description:
          "Monitor traffic city-wide. Spot accidents fast, optimize signal timing, and clear routes for emergency vehicles.",
        icon: "monitor",
        capabilities: [
          "Live traffic monitoring",
          "Instant accident alerts",
          "Smart signal control",
          "Emergency vehicle routing",
        ],
      },
    ],
  },
  {
    slug: "smart-retail",
    badge: "Retail Solution",
    title: "Smart Retail",
    titleHighlight: "Operations",
    description:
      "Understand your customers, shorten queues, and prevent theft. AI that helps you sell more and lose less.",
    benefits: [
      {
        title: "Know Your Customers",
        description:
          "See where customers go, what they look at, and how long they stay.",
        icon: "database",
      },
      {
        title: "Better Experience",
        description:
          "Shorter queues, faster service, and personalized attention for VIPs.",
        icon: "users",
      },
      {
        title: "Smarter Operations",
        description:
          "Staff the right areas at the right times based on real foot traffic.",
        icon: "zap",
      },
      {
        title: "Reduce Losses",
        description:
          "Spot shoplifters and known offenders before they can steal.",
        icon: "activity",
      },
    ],
    topologyImage: "/solutions/retail-solution.webp",
    tacticalSolutions: [
      {
        title: "Customer Flow Analysis",
        description:
          "See how customers move through your store. Find popular spots, dead zones, and the best places for products.",
        analyticsUsed: ["People Analytics", "Face Recognition"],
        operationalBenefits: [
          "Design better store layouts",
          "Place products where customers look",
          "Identify peak shopping times",
        ],
      },
      {
        title: "Queue Management",
        description:
          "Know when lines get long before customers complain. Open more registers or redirect staff automatically.",
        analyticsUsed: ["People Analytics", "Crowd Estimation"],
        operationalBenefits: [
          "Shorter wait times",
          "Staff where needed, when needed",
          "Handle rush hours smoothly",
        ],
      },
      {
        title: "VIP & Loss Prevention",
        description:
          "Recognize VIP customers for special service. Spot known shoplifters and get alerts before they act.",
        analyticsUsed: ["Face Recognition", "Face Searching and Matching API"],
        operationalBenefits: [
          "Welcome VIPs by name",
          "Alert staff to known offenders",
          "Reduce theft and shrinkage",
        ],
      },
    ],
    useCases: [
      {
        name: "Department Store",
        description:
          "Track customer flow across departments. See which areas attract visitors and which need improvement.",
        icon: "building2",
        capabilities: [
          "Foot traffic heat maps",
          "Time spent per area",
          "Department performance",
          "Visitor-to-buyer rates",
        ],
      },
      {
        name: "Luxury Retail",
        description:
          "Give VIP customers the recognition they deserve. Alert staff when important clients arrive.",
        icon: "users",
        capabilities: [
          "VIP arrival alerts",
          "Customer purchase history",
          "Personal shopper notification",
          "Loyalty member recognition",
        ],
      },
      {
        name: "Supermarket",
        description:
          "Keep checkout lines short and shelves stocked. Get alerts for suspicious activity before losses happen.",
        icon: "layers",
        capabilities: [
          "Checkout queue alerts",
          "Shelf monitoring",
          "Theft prevention",
          "Staff scheduling insights",
        ],
      },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((s) => s.slug);
}
