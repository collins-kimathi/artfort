// Gallery component/page file.
function Gallery({
  artworks,
  activeCollection,
  searchTerm,
  sortBy,
  onAddToCart,
  onPreview,
  onSearchChange,
  onSortChange,
  formatPrice,
}) {
  return (
    <section className="gallery-section" id="painting-gallery">
      <div className="gallery-header reveal" style={{ '--delay': '80ms' }}>
        <p className="section-kicker">Featured Originals</p>
        <h2>Fresh arrivals from this month&apos;s studio drops.</h2>
      </div>

      <div className="gallery-controls reveal" style={{ '--delay': '100ms' }}>
        <label className="gallery-search" htmlFor="art-search">
          <span className="sr-only">Search artworks</span>
          <input
            id="art-search"
            type="search"
            placeholder="Search by title, artist, or medium"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </label>

        <label className="gallery-sort" htmlFor="art-sort">
          <span>Sort</span>
          <select
            id="art-sort"
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price low to high</option>
            <option value="price-desc">Price high to low</option>
          </select>
        </label>
      </div>

      <p className="gallery-meta reveal" style={{ '--delay': '120ms' }}>
        Showing {artworks.length} artwork{artworks.length === 1 ? '' : 's'} in{' '}
        {activeCollection}.
      </p>

      <div className="gallery-grid">
        {artworks.length === 0 ? (
          <article className="gallery-empty">
            <p>No artworks match your search. Try a different keyword.</p>
          </article>
        ) : null}

        {artworks.map((artwork, index) => (
          <article
            className="art-card reveal"
            style={{ '--delay': `${130 + index * 90}ms` }}
            key={artwork.id}
          >
            <div className="art-thumb">
              <img src={artwork.image} alt={artwork.title} loading="lazy" />
            </div>
            <div className="art-meta">
              <p className="art-name">{artwork.title}</p>
              <p className="art-artist">{artwork.artist}</p>
              <p className="art-details">
                {artwork.size} | {artwork.year}
              </p>
            </div>
            <div className="art-footer">
              <strong>{formatPrice(artwork.price)}</strong>
              <div className="art-actions">
                <button
                  className="btn-ghost"
                  type="button"
                  onClick={() => onPreview(artwork)}
                >
                  Quick view
                </button>
                <button type="button" onClick={() => onAddToCart(artwork)}>
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Gallery

