/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.nodeflux.ai",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  exclude: ["/company-profile", "/license-check"],
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    // Manually add solution routes since they are client-rendered
    // and not discoverable by next-sitemap at build time
    const solutionSlugs = [
      "public-security",
      "smart-building",
      "smart-city",
      "smart-retail",
    ];

    return solutionSlugs.map((slug) => ({
      loc: `/solutions/${slug}`,
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
  transform: async (config, path) => {
    // Static route priorities
    const priorities = {
      "/": 1.0,
      "/visionaire": 0.9,
      "/lenz": 0.9,
      "/athena": 0.9,
      "/blog": 0.8,
      "/contact-us": 0.6,
    };

    // Dynamic route priority matching
    let priority = priorities[path];
    let changefreq = "weekly";

    if (priority === undefined) {
      if (path.startsWith("/solutions/")) {
        priority = 0.8;
        changefreq = "weekly";
      } else if (path.startsWith("/blog/")) {
        priority = 0.7;
        changefreq = "monthly";
      } else {
        priority = 0.5;
      }
    }

    // Homepage and blog index change more frequently
    if (path === "/" || path === "/blog") {
      changefreq = "daily";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
