/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://nodeflux.io",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
        { userAgent: "*", allow: "/" },
        ],
    },
    changefreq: "daily",
    priority: 0.7,
    sitemapSize: 5000,
    generateIndexSitemap: true,
    outDir: "public",
};
