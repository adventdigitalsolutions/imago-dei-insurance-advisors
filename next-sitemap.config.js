/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://imagodeinsuranceadvisors.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  exclude: ['/our-team'],
  transform: async (config, path) => {
    const priorities = {
      '/': 1.0,
      '/solutions': 0.9,
      '/about': 0.8,
      '/resources': 0.8,
    };

    return {
      loc: path,
      changefreq: path.startsWith('/resources/') ? 'monthly' : 'weekly',
      priority: priorities[path] ?? 0.6,
      lastmod: new Date().toISOString(),
    };
  },
};
