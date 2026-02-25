// HomeInteractiveArt component/page file.
const marqueeRows = [
  {
    id: 'row-1',
    direction: 'left',
    words: ['ORIGINAL ART', 'BOLD TEXTURES', 'CURATED EDITS', 'GALLERY ENERGY'],
  },
  {
    id: 'row-2',
    direction: 'right',
    words: ['MODERN CANVAS', 'SCULPTURAL FORMS', 'COLLECTOR PICKS', 'LIMITED WORKS'],
  },
  {
    id: 'row-3',
    direction: 'left',
    words: ['ARTFORT ATELIER', 'VISUAL POETRY', 'CONTEMPORARY LINES', 'BESPOKE WALLS'],
  },
]

function HomeInteractiveArt() {
  return (
    <section className="home-word-slider">
      {marqueeRows.map((row, index) => {
        const repeatedWords = [...row.words, ...row.words]

        return (
          <div
            className="word-marquee reveal"
            style={{ '--delay': `${160 + index * 80}ms` }}
            key={row.id}
          >
            <div className={`word-track ${row.direction}`}>
              {repeatedWords.map((word, wordIndex) => (
                <span key={`${row.id}-${wordIndex}`}>{word}</span>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default HomeInteractiveArt

