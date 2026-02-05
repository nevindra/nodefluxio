import { solutions } from "./solutions-data";

export interface NavItem {
  title: string;
  href: string;
  desc?: string;
  longDesc?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

// Map solution slugs to display names for navigation
const solutionDisplayNames: Record<string, { title: string; desc: string; longDesc: string }> = {
  "massive-surveillance": {
    title: "Public Safety",
    desc: "City-wide surveillance and incident response",
    longDesc: "Monitor vast areas efficiently, detect anomalies in real-time, and respond swiftly to potential threats with advanced large-scale surveillance.",
  },
  "smart-city": {
    title: "Smart City",
    desc: "Traffic, crowds, and public space management",
    longDesc: "Optimize traffic flow, improve resource allocation, and enhance quality of life for citizens through data-driven urban management.",
  },
  "smart-retail": {
    title: "Smart Retail",
    desc: "Customer insights and loss prevention",
    longDesc: "Gain insights into customer behavior, optimize store layouts, and enhance the shopping experience with cutting-edge retail analytics.",
  },
  "smart-building": {
    title: "Building Security",
    desc: "Access control and facility monitoring",
    longDesc: "Monitor access points, track occupancy, and ensure safety protocols through a single integrated security platform.",
  },
};

// Generate solution nav items from solutions data
const solutionNavItems: NavItem[] = solutions.map((solution) => ({
  title: solutionDisplayNames[solution.slug]?.title || solution.title,
  href: `/solutions/${solution.slug}`,
  desc: solutionDisplayNames[solution.slug]?.desc || solution.description.slice(0, 50) + "...",
  longDesc: solutionDisplayNames[solution.slug]?.longDesc || solution.description,
}));

export const navLinks: NavGroup[] = [
  {
    title: "Products",
    items: [
      { title: "Lenz", href: "/lenz", desc: "Unified video management system for monitoring thousands of cameras" },
      { title: "VisionAIre", href: "/visionaire", desc: "Powerful vision AI engine with ready-to-deploy detection models" },
      { title: "Athena", href: "/athena", desc: "Enterprise AI assistant with RAG-powered knowledge retrieval" },
    ],
  },
  {
    title: "Solutions",
    items: solutionNavItems,
  },
  {
    title: "Resources",
    items: [
      { title: "Documentation", href: "/docs", desc: "Technical guides and API reference" },
      { title: "Blog", href: "/blog", desc: "Insights and updates from our team" },
    ],
  },
];

// For footer - simplified without descriptions
export const footerNavigation = {
  products: navLinks[0].items.map(({ title, href }) => ({ name: title, href })),
  solutions: navLinks[1].items.map(({ title, href }) => ({ name: title, href })),
  resources: [
    ...navLinks[2].items.map(({ title, href }) => ({ name: title, href })),
    { name: "Contact", href: "/contact-us" },
  ],
};
