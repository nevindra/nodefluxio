import { solutions } from "./solutions-data";

export interface NavItem {
  title: string;
  href: string;
  desc?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

// Map solution slugs to display names for navigation
const solutionDisplayNames: Record<string, { title: string; desc: string }> = {
  "massive-surveillance": {
    title: "Public Safety",
    desc: "City-wide surveillance and incident response",
  },
  "smart-city": {
    title: "Smart City",
    desc: "Traffic, crowds, and public space management",
  },
  "smart-retail": {
    title: "Smart Retail",
    desc: "Customer insights and loss prevention",
  },
  "smart-building": {
    title: "Building Security",
    desc: "Access control and facility monitoring",
  },
};

// Generate solution nav items from solutions data
const solutionNavItems: NavItem[] = solutions.map((solution) => ({
  title: solutionDisplayNames[solution.slug]?.title || solution.title,
  href: `/solutions/${solution.slug}`,
  desc: solutionDisplayNames[solution.slug]?.desc || solution.description.slice(0, 50) + "...",
}));

export const navLinks: NavGroup[] = [
  {
    title: "Products",
    items: [
      { title: "Lenz", href: "/lenz", desc: "Smart video monitoring & analytics" },
      { title: "VisionAIre", href: "/visionaire", desc: "Complete AI video surveillance platform" },
      { title: "Athena", href: "/athena", desc: "Generative AI business assistant" },
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
