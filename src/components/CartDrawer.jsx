// CartDrawer component/page file.
import { createPortal } from 'react-dom'

function CartDrawer({
  isOpen,
  items,
  subtotal,
  onClose,
  onCheckout,
  onItemQuantityChange,
  onRemoveItem,
  formatPrice,
}) {
  return createPortal(
    <div className={`cart-drawer-shell ${isOpen ? 'open' : ''}`}>
      <button
        className="cart-drawer-backdrop"
        type="button"
        aria-label="Close cart"
        onClick={onClose}
      />

      <aside className="cart-drawer" aria-label="Shopping cart">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button type="button" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="cart-items">
          {items.length === 0 ? (
            <p className="cart-empty">Your cart is empty. Add an artwork to begin.</p>
          ) : null}

          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="cart-item-info">
                <p>{item.title}</p>
                <small>{item.artist}</small>
                <strong>{formatPrice(item.price)}</strong>
              </div>
              <div className="cart-item-actions">
                <div className="qty-control">
                  <button
                    type="button"
                    onClick={() => onItemQuantityChange(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => onItemQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="cart-remove"
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="cart-footer">
          <p>
            <span>Subtotal</span>
            <strong>{formatPrice(subtotal)}</strong>
          </p>
          <button
            type="button"
            disabled={items.length === 0}
            onClick={onCheckout}
          >
            Checkout
          </button>
        </div>
      </aside>
    </div>,
    document.body,
  )
}

export default CartDrawer

