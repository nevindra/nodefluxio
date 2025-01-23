/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: process.env.SITE_URL || "https://www.nodeflux.io",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: "*", allow: "/" }],
	},
	exclude: [],
	generateIndexSitemap: false,
	additionalPaths: async (config) => {
		const paths = [
			{ loc: '/', priority: 1.0, changefreq: 'daily' },
			{ loc: '/analytics', priority: 0.7, changefreq: 'daily' },
			{ loc: '/platform', priority: 0.7, changefreq: 'daily' },
			{ loc: '/solutions/smart-building', priority: 0.7, changefreq: 'daily' },
			{ loc: '/products', priority: 0.8, changefreq: 'daily' },
			{ loc: '/solutions/smart-city', priority: 0.7, changefreq: 'daily' },
			{ loc: '/dashboard', priority: 0.8, changefreq: 'daily' },
			{ loc: '/solutions/massive-surveillance', priority: 0.7, changefreq: 'daily' },
			{ loc: '/solutions/smart-retail', priority: 0.7, changefreq: 'daily' },
			{ loc: '/contact-us', priority: 0.6, changefreq: 'daily' },
		];

		return paths.map((path) => ({
			loc: path.loc,
			changefreq: path.changefreq,
			priority: path.priority,
			lastmod: new Date().toISOString(),
		}));
	},
};
