// Collections component/page file.
function Collections({ collections, activeCollection, onCollectionChange }) {
  return (
    <section className="collections-section" id="shop">
      <div className="collections-header reveal" style={{ '--delay': '120ms' }}>
        <p className="section-kicker">Shop by Collection</p>
        <h2>Browse visual catalog by category.</h2>
      </div>

      <div className="collection-filters reveal" style={{ '--delay': '180ms' }}>
        <button
          className={`filter-chip ${activeCollection === 'All' ? 'active' : ''}`}
          type="button"
          onClick={() => onCollectionChange('All')}
        >
          All
        </button>
        {collections.map((collection) => (
          <button
            className={`filter-chip ${activeCollection === collection.title ? 'active' : ''}`}
            key={collection.title}
            type="button"
            onClick={() => onCollectionChange(collection.title)}
          >
            {collection.title}
          </button>
        ))}
      </div>

      <div className="collection-grid">
        {collections.map((collection, index) => (
          <button
            className={`collection-card reveal ${activeCollection === collection.title ? 'active' : ''}`}
            style={{
              '--delay': `${240 + index * 110}ms`,
              '--collection-accent': collection.accent,
            }}
            key={collection.title}
            type="button"
            aria-pressed={activeCollection === collection.title}
            onClick={() => onCollectionChange(collection.title)}
          >
            <p className="collection-title">{collection.title}</p>
            <p className="collection-description">{collection.description}</p>
            <span className="collection-pill">{collection.pieces} works</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default Collections

