/*
  EASY CATALOG EDITING
  1) Add your painting image into: public/paintings/
  2) Add a painting object to `paintings` below.
     Use image path like: /paintings/your-file.jpg
*/

export const collectionMeta = [
  {
    title: 'Abstract',
    description: 'Bold palettes and expressive movement for statement walls.',
    accent: '#b96344',
  },
  {
    title: 'Figurative',
    description: 'Human forms and storytelling scenes with emotional depth.',
    accent: '#486f6f',
  },
  {
    title: 'Minimal',
    description: 'Quiet tones, negative space, and calming compositions.',
    accent: '#6f5a8a',
  },
  {
    title: 'Landscape',
    description: 'Nature-inspired works from coastal to mountain atmospheres.',
    accent: '#8b6c49',
  },
]

export const paintings = [
  {
    id: 1,
    title: 'Velvet Horizon',
    artist: 'Isla Moreno',
    size: '24 x 30 in',
    medium: 'Acrylic on linen',
    year: '2026',
    collection: 'Abstract',
    price: 320,
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    title: 'After Rain',
    artist: 'Noah Fischer',
    size: '20 x 24 in',
    medium: 'Oil and charcoal',
    year: '2026',
    collection: 'Landscape',
    price: 280,
    image:
      'https://images.unsplash.com/photo-1459908676235-d5f02a50184b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    title: 'Still Voices',
    artist: 'Mina Cho',
    size: '30 x 30 in',
    medium: 'Mixed media on canvas',
    year: '2025',
    collection: 'Minimal',
    price: 390,
    image:
      'https://images.unsplash.com/photo-1529429617124-aee71138f5c9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 4,
    title: 'Paper Sky',
    artist: 'Luca Hale',
    size: '18 x 24 in',
    medium: 'Ink and watercolor',
    year: '2025',
    collection: 'Abstract',
    price: 260,
    image:
      'https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 5,
    title: 'Passing Light',
    artist: 'Aya Bennett',
    size: '24 x 36 in',
    medium: 'Oil on canvas',
    year: '2026',
    collection: 'Figurative',
    price: 420,
    image:
      'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 6,
    title: 'Red Studio',
    artist: 'Theo Park',
    size: '20 x 20 in',
    medium: 'Acrylic on board',
    year: '2025',
    collection: 'Figurative',
    price: 305,
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 7,
    title: 'Tide Atlas',
    artist: 'Ari Watts',
    size: '30 x 40 in',
    medium: 'Oil on panel',
    year: '2026',
    collection: 'Landscape',
    price: 450,
    image:
      'https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 8,
    title: 'Quiet Geometry',
    artist: 'Sera Klein',
    size: '16 x 20 in',
    medium: 'Graphite and gesso',
    year: '2025',
    collection: 'Minimal',
    price: 240,
    image:
      'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 9,
    title: 'Crimson Current',
    artist: 'Riva Snow',
    size: '28 x 34 in',
    medium: 'Acrylic and pastel',
    year: '2026',
    collection: 'Abstract',
    price: 510,
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 10,
    title: 'City Reverie',
    artist: 'Jonas Reed',
    size: '22 x 28 in',
    medium: 'Oil and varnish',
    year: '2026',
    collection: 'Figurative',
    price: 365,
    image:
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 11,
    title: 'Moss Path',
    artist: 'Eleni Moss',
    size: '24 x 32 in',
    medium: 'Oil on canvas',
    year: '2025',
    collection: 'Landscape',
    price: 430,
    image:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 12,
    title: 'Dust and Line',
    artist: 'Tao Greene',
    size: '18 x 22 in',
    medium: 'Charcoal on paper',
    year: '2026',
    collection: 'Minimal',
    price: 295,
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80',
  },
]

const fallbackAccents = ['#8f5f4a', '#5d7281', '#75638b', '#5f7b67']

export function buildCollectionsFromPaintings(paintingsList) {
  const countByCollection = paintingsList.reduce((counts, item) => {
    const key = item.collection
    counts[key] = (counts[key] || 0) + 1
    return counts
  }, {})

  const knownCollections = collectionMeta.map((meta) => ({
    ...meta,
    pieces: countByCollection[meta.title] || 0,
  }))

  const metaTitles = new Set(collectionMeta.map((item) => item.title))
  const unknownTitles = Object.keys(countByCollection).filter(
    (title) => !metaTitles.has(title),
  )

  const unknownCollections = unknownTitles.map((title, index) => ({
    title,
    description: 'Original works in this custom category.',
    accent: fallbackAccents[index % fallbackAccents.length],
    pieces: countByCollection[title],
  }))

  return [...knownCollections, ...unknownCollections]
}
