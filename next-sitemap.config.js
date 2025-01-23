/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://www.nodeflux.io",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: "*", allow: "/" }],
		additionalSitemaps: [
			`${process.env.SITE_URL || "https://www.nodeflux.io"}/sitemap.xml`,
		],
	},
	exclude: ['/company-profile', '/license-check'],
	generateIndexSitemap: false,
	transform: async (config, path) => {
		// Define priorities for auto-discovered routes
		const priorities = {
			'/': 1.0,
			'/dashboard': 0.8,
			'/products': 0.8,
			'/contact-us': 0.6,
		};

		return {
			loc: path,
			changefreq: 'daily',
			priority: priorities[path] || 0.7,
			lastmod: new Date().toISOString(),
		};
	},
};
