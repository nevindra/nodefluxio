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
    title: "Public Safety",
    titleHighlight: "Intelligence",
    description:
      "Equip your officers with AI-powered surveillance. From body cameras to drones, identify threats in real-time and coordinate response across all units.",
    benefits: [
      {
        title: "Real-Time Identification",
        description:
          "Instantly match faces against watchlists during field operations. Know who you're dealing with before engagement.",
        icon: "zap",
      },
      {
        title: "Unified Command View",
        description:
          "Stream live feeds from body cams, drones, and fixed cameras to one command center. See the full picture.",
        icon: "layers",
      },
      {
        title: "Instant Alerts",
        description:
          "Receive notifications via radio, mobile, or command dashboard the moment a threat is detected.",
        icon: "clock",
      },
      {
        title: "Secure Infrastructure",
        description:
          "All data stays on your servers. No external access. Full compliance with government security standards.",
        icon: "server",
      },
    ],
    topologyImage: "/solutions/massive-surveillance.png",
    tacticalSolutions: [
      {
        title: "Body Cam & Mobile Stream",
        description:
          "Equip field officers with AI-enabled body cameras. Run face recognition on the move and stream footage directly to command for real-time support.",
        analyticsUsed: [
          "Face Recognition",
          "People Analytics",
          "Crowd Estimation",
        ],
        operationalBenefits: [
          "Identify persons of interest during patrol or raids",
          "Stream live video to command center for tactical support",
          "Secure evidence capture with encrypted storage",
        ],
      },
      {
        title: "Drone Surveillance",
        description:
          "Deploy AI-powered drones for aerial reconnaissance. Cover large areas, monitor crowds, and track movements from above with real-time analysis.",
        analyticsUsed: [
          "People Analytics",
          "Crowd Estimation",
          "Vehicle Analytics",
        ],
        operationalBenefits: [
          "Rapid deployment for emergency situations",
          "Monitor large gatherings and crowd movements",
          "Track suspect vehicles across wide areas",
        ],
      },
      {
        title: "Static Camera Network",
        description:
          "Connect all fixed CCTV installations to a centralized AI command center. Monitor multiple locations simultaneously with automated threat detection.",
        analyticsUsed: [
          "Face Recognition",
          "License Plate Recognition",
          "Fighting Detection",
          "Fire & Smoke Detection",
        ],
        operationalBenefits: [
          "24/7 automated monitoring across all installations",
          "Instant alerts when watchlist individuals appear",
          "Cross-camera tracking of persons and vehicles",
        ],
      },
    ],
    useCases: [
      {
        name: "Police Operations",
        description:
          "Support patrol units with real-time intelligence. Match suspects against databases, coordinate multi-unit responses, and gather evidence automatically.",
        icon: "shield",
        capabilities: [
          "Watchlist face matching during stops",
          "Live body cam streaming to dispatch",
          "Automatic event recording and tagging",
          "Cross-unit coordination via unified dashboard",
        ],
      },
      {
        name: "Military & Defense",
        description:
          "Secure installations and monitor perimeters with AI surveillance. Detect intrusions, track unauthorized vehicles, and maintain situational awareness.",
        icon: "building2",
        capabilities: [
          "Perimeter breach detection and alerts",
          "Vehicle tracking and plate recognition",
          "Drone integration for aerial coverage",
          "Encrypted data transmission and storage",
        ],
      },
      {
        name: "Intelligence & Investigation",
        description:
          "Support investigative operations with AI-powered analysis. Search across camera networks, track movements, and build evidence timelines.",
        icon: "globe",
        capabilities: [
          "Face search across historical footage",
          "Vehicle movement pattern analysis",
          "Cross-camera person tracking",
          "Export evidence with timestamps",
        ],
      },
    ],
  },
  {
    slug: "smart-building",
    badge: "Building Security Solution",
    title: "Building",
    titleHighlight: "Security",
    description:
      "Secure any facility with AI-powered access control and monitoring. From corporate offices to government buildings, one system for complete protection.",
    benefits: [
      {
        title: "Complete Coverage",
        description:
          "Protect entrances, parking areas, and common spaces with unified AI monitoring across your entire facility.",
        icon: "shield",
      },
      {
        title: "Automated Surveillance",
        description:
          "AI detects threats and unusual activity automatically. Your security team focuses on response, not monitoring screens.",
        icon: "zap",
      },
      {
        title: "Touchless Access",
        description:
          "Face recognition entry for authorized personnel. No cards to manage, no PINs to remember, no security gaps.",
        icon: "users",
      },
      {
        title: "Complete Audit Trail",
        description:
          "Every entry, exit, and event logged automatically. Full visibility for compliance and investigation.",
        icon: "database",
      },
    ],
    topologyImage: "/solutions/building-management.webp",
    tacticalSolutions: [
      {
        title: "Face Recognition Access",
        description:
          "Authorize personnel entry using face recognition. Eliminate cards and credentials while maintaining strict access control with complete logging.",
        analyticsUsed: ["Face Recognition", "People Analytics"],
        operationalBenefits: [
          "Walk-through access for registered personnel",
          "Instant alerts for unauthorized access attempts",
          "Complete entry and exit logs for audit",
        ],
      },
      {
        title: "Vehicle & Parking Management",
        description:
          "Automate parking access with license plate recognition. Track all vehicles entering and exiting your facility with full documentation.",
        analyticsUsed: ["License Plate Recognition", "Vehicle Analytics"],
        operationalBenefits: [
          "Automatic gate control for registered vehicles",
          "Track all vehicle entries and exits",
          "Manage parking allocation efficiently",
        ],
      },
      {
        title: "Incident Detection",
        description:
          "AI monitors for fights, fire, smoke, and other incidents. Get immediate alerts and recorded evidence when something happens.",
        analyticsUsed: [
          "Fighting Detection",
          "Fire & Smoke Detection",
          "Crowd Estimation",
        ],
        operationalBenefits: [
          "Automatic detection of physical altercations",
          "Early fire and smoke warning",
          "Crowd density monitoring for safety compliance",
        ],
      },
    ],
    useCases: [
      {
        name: "Corporate & Private Facilities",
        description:
          "Secure office buildings, factories, and private facilities with AI access control, visitor management, and 24/7 monitoring.",
        icon: "building2",
        capabilities: [
          "Face recognition for employee access",
          "Visitor registration and tracking",
          "Meeting room and floor-based permissions",
          "Integration with HR systems for automatic updates",
        ],
      },
      {
        name: "Government Buildings",
        description:
          "Protect government facilities with high-security AI surveillance. Strict access control, watchlist monitoring, and full compliance logging.",
        icon: "shield",
        capabilities: [
          "Multi-factor authentication with face recognition",
          "Watchlist alerts for restricted individuals",
          "Security clearance-based access zones",
          "Tamper-proof audit logs for compliance",
        ],
      },
      {
        name: "Mixed-Use & Residential",
        description:
          "Manage access for residential complexes with multiple user types. Residents, visitors, delivery personnel, and staff—all handled seamlessly.",
        icon: "users",
        capabilities: [
          "Resident face registration and access",
          "Delivery and visitor verification",
          "Common area monitoring",
          "Emergency notification system",
        ],
      },
    ],
  },
  {
    slug: "smart-city",
    badge: "Urban Management Solution",
    title: "Smart City",
    titleHighlight: "Operations",
    description:
      "Transform how your city operates. AI monitors public spaces, detects incidents as they happen, and gives your teams the data to respond faster and plan smarter.",
    benefits: [
      {
        title: "Proactive Safety",
        description:
          "Detect fights, fires, and disturbances the moment they start. Your teams get alerts before situations escalate.",
        icon: "shield",
      },
      {
        title: "Smoother Traffic",
        description:
          "Spot accidents instantly, understand congestion patterns, and keep vehicles moving across the city.",
        icon: "users",
      },
      {
        title: "Evidence-Based Decisions",
        description:
          "Real data on traffic flow, crowd patterns, and incident frequency. Plan infrastructure that addresses actual needs.",
        icon: "database",
      },
      {
        title: "Unified Monitoring",
        description:
          "One dashboard for all city cameras. AI filters the noise so operators focus on what requires attention.",
        icon: "zap",
      },
    ],
    topologyImage: "/solutions/smart-city.webp",
    tacticalSolutions: [
      {
        title: "Public Area Safety",
        description:
          "Monitor parks, plazas, and gathering spaces around the clock. AI detects physical altercations, fires, and smoke automatically and alerts responders immediately.",
        analyticsUsed: [
          "People Analytics",
          "Fighting Detection",
          "Fire & Smoke Detection",
        ],
        operationalBenefits: [
          "Immediate alerts when fights break out",
          "Early fire and smoke detection",
          "Incident records for follow-up and analysis",
        ],
      },
      {
        title: "Crowd Monitoring",
        description:
          "Track crowd sizes at events, markets, and public gatherings in real-time. Receive warnings when density reaches unsafe levels.",
        analyticsUsed: ["Crowd Estimation", "People Analytics"],
        operationalBenefits: [
          "Capacity alerts before overcrowding occurs",
          "Live attendance counts for event management",
          "Historical data for future event planning",
        ],
      },
      {
        title: "Traffic Monitoring",
        description:
          "Watch traffic across major roads and intersections. Detect collisions the moment they happen and analyze flow patterns for infrastructure planning.",
        analyticsUsed: [
          "Vehicle Analytics",
          "License Plate Recognition",
          "Road Crash Monitoring",
        ],
        operationalBenefits: [
          "Collision alerts within seconds of impact",
          "Traffic volume data by time and location",
          "Vehicle tracking for investigations",
        ],
      },
    ],
    useCases: [
      {
        name: "Transit Stations",
        description:
          "Manage passenger flow at bus terminals and train stations. Monitor platform crowding, detect unattended items, and keep queues moving during rush hours.",
        icon: "car",
        capabilities: [
          "Platform and waiting area crowd levels",
          "Unattended baggage detection",
          "Queue length monitoring",
          "Passenger volume trends by hour",
        ],
      },
      {
        name: "Multi-District Operations",
        description:
          "Unify camera networks across neighborhoods and districts. Track incidents that span multiple areas and coordinate response between teams.",
        icon: "globe",
        capabilities: [
          "Cross-district incident tracking",
          "Person and vehicle search across cameras",
          "Coordinated alerts to multiple teams",
          "Centralized footage archive and search",
        ],
      },
      {
        name: "Road Network Management",
        description:
          "Monitor arterial roads and key intersections city-wide. Detect accidents immediately, clear routes for emergency vehicles, and collect data to improve road design.",
        icon: "monitor",
        capabilities: [
          "Real-time traffic density visualization",
          "Automatic collision detection",
          "Vehicle count and classification",
          "Emergency corridor prioritization",
        ],
      },
    ],
  },
  {
    slug: "smart-retail",
    badge: "Retail Solution",
    title: "Smart Retail",
    titleHighlight: "Analytics",
    description:
      "Turn your cameras into business intelligence. Understand how customers shop, keep queues short, and stop losses before they happen.",
    benefits: [
      {
        title: "Actionable Traffic Data",
        description:
          "Know exactly where customers walk, where they stop, and which displays get the most attention.",
        icon: "database",
      },
      {
        title: "Faster Checkout",
        description:
          "Get alerts when queues build up. Open registers before customers notice the wait.",
        icon: "users",
      },
      {
        title: "Right Staff, Right Place",
        description:
          "Schedule and position staff based on actual foot traffic patterns, not guesswork.",
        icon: "zap",
      },
      {
        title: "Shrinkage Reduction",
        description:
          "Recognize known offenders when they enter. Alert security before theft happens.",
        icon: "activity",
      },
    ],
    topologyImage: "/solutions/retail-solution.webp",
    tacticalSolutions: [
      {
        title: "Traffic & Heatmap Analysis",
        description:
          "Visualize customer movement through your store. See which aisles draw traffic, which displays get ignored, and where customers spend the most time.",
        analyticsUsed: ["People Analytics", "Crowd Estimation"],
        operationalBenefits: [
          "Redesign layouts based on actual movement data",
          "Position promotions where customers naturally look",
          "Compare traffic across stores and time periods",
        ],
      },
      {
        title: "Queue Detection",
        description:
          "Monitor checkout areas continuously. When lines start forming, managers get notified to open additional registers or redirect customers.",
        analyticsUsed: ["People Analytics", "Crowd Estimation"],
        operationalBenefits: [
          "Reduce average wait time at checkout",
          "Match staffing levels to real-time demand",
          "Track queue metrics to improve scheduling",
        ],
      },
      {
        title: "Customer Recognition",
        description:
          "Identify VIP customers for personalized service and flag known shoplifters before they can act. One system for hospitality and security.",
        analyticsUsed: ["Face Recognition"],
        operationalBenefits: [
          "Greet loyal customers by name",
          "Alert staff when flagged individuals enter",
          "Build customer visit profiles over time",
        ],
      },
    ],
    useCases: [
      {
        name: "Large Format Retail",
        description:
          "Understand traffic flow across thousands of square meters. See which departments draw visitors, measure dwell time, and optimize product placement.",
        icon: "building2",
        capabilities: [
          "Zone-by-zone visitor counts",
          "Dwell time by area and display",
          "Path analysis between departments",
          "Hourly and daily traffic comparisons",
        ],
      },
      {
        name: "Premium & Boutique Stores",
        description:
          "Deliver white-glove service with AI assistance. Know when your best customers arrive so staff can provide immediate, personalized attention.",
        icon: "users",
        capabilities: [
          "VIP arrival alerts to sales staff",
          "Visit frequency tracking",
          "Preferred associate matching",
          "Clienteling integration",
        ],
      },
      {
        name: "Grocery & Convenience",
        description:
          "High volume, tight margins. Keep lines moving, monitor high-theft areas, and staff efficiently based on traffic peaks.",
        icon: "layers",
        capabilities: [
          "Real-time queue length alerts",
          "High-shrinkage zone monitoring",
          "Peak hour traffic forecasting",
          "Self-checkout area oversight",
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
