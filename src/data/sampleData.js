export const sampleUsers = [
  { email: 'test@example.com', password: 'password123' }
];

export const sampleProjects = [
  {
    id: 1,
    name: 'Demo Project',
    domain: 'example.com',
    country: 'Türkiye',
    language: 'Türkçe',
    device: 'desktop',
    frequency: 'günlük',
    keywords: 3,
    avgPosition: 12,
    lastUpdated: '2025-06-01'
  }
];

export const sampleKeywords = [
  {
    id: 1,
    projectId: 1,
    keyword: 'seo aracı',
    position: 5,
    targetUrl: 'https://example.com/seo-araci',
    page: 1,
    change: 2,
    firstSeen: '2025-05-01',
    lastUpdated: '2025-06-01'
  },
  {
    id: 2,
    projectId: 1,
    keyword: 'sıra takip',
    position: 8,
    targetUrl: 'https://example.com/sira-takip',
    page: 1,
    change: -1,
    firstSeen: '2025-05-01',
    lastUpdated: '2025-06-01'
  },
  {
    id: 3,
    projectId: 1,
    keyword: 'anahtar kelime',
    position: 15,
    targetUrl: 'https://example.com/anahtar-kelime',
    page: 2,
    change: 0,
    firstSeen: '2025-05-01',
    lastUpdated: '2025-06-01'
  }
];
