// ProductModal component/page file.
import { createPortal } from 'react-dom'

function ProductModal({ artwork, onClose, onAddToCart, formatPrice }) {
  if (!artwork) {
    return null
  }

  return createPortal(
    <div className="product-modal-overlay" role="dialog" aria-modal="true">
      <div className="product-modal">
        <button className="modal-close" type="button" onClick={onClose}>
          Close
        </button>

        <div className="product-modal-image">
          <img src={artwork.image} alt={artwork.title} />
        </div>

        <div className="product-modal-copy">
          <p className="section-kicker">Quick View</p>
          <h3>{artwork.title}</h3>
          <p className="modal-artist">{artwork.artist}</p>
          <p className="modal-text">
            {artwork.medium} | {artwork.size} | {artwork.year}
          </p>
          <p className="modal-text">
            Hand-selected by our curators for collectors looking for expressive,
            contemporary work.
          </p>

          <div className="modal-price-row">
            <strong>{formatPrice(artwork.price)}</strong>
            <button
              type="button"
              onClick={() => {
                onAddToCart(artwork)
                onClose()
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <button
        className="product-modal-backdrop"
        type="button"
        aria-label="Close preview"
        onClick={onClose}
      />
    </div>,
    document.body,
  )
}

export default ProductModal

