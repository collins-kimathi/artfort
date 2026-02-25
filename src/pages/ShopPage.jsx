// ShopPage component/page file.
import Collections from '../components/Collections'
import Gallery from '../components/Gallery'

function ShopPage({
  collections,
  activeCollection,
  onCollectionChange,
  artworks,
  searchTerm,
  sortBy,
  onAddToCart,
  onPreview,
  onSearchChange,
  onSortChange,
  formatPrice,
}) {
  const handleCollectionSelect = (collectionTitle) => {
    onCollectionChange(collectionTitle)
    onSearchChange('')

    window.requestAnimationFrame(() => {
      document.getElementById('painting-gallery')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }

  return (
    <>
      <section className="page-heading reveal" style={{ '--delay': '80ms' }}>
        <p className="section-kicker">Shop</p>
        <h1>Browse and collect original artworks</h1>
      </section>

      <Collections
        collections={collections}
        activeCollection={activeCollection}
        onCollectionChange={handleCollectionSelect}
      />
      <Gallery
        artworks={artworks}
        activeCollection={activeCollection}
        searchTerm={searchTerm}
        sortBy={sortBy}
        onAddToCart={onAddToCart}
        onPreview={onPreview}
        onSearchChange={onSearchChange}
        onSortChange={onSortChange}
        formatPrice={formatPrice}
      />
    </>
  )
}

export default ShopPage

