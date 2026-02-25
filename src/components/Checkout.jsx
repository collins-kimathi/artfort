// Checkout component/page file.
import { useState } from 'react'

function Checkout({
  items,
  subtotal,
  formatPrice,
  orderPlaced,
  onContinueShopping,
  onPlaceOrder,
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  })

  const shipping = items.length > 0 ? 28 : 0
  const tax = Math.round(subtotal * 0.08)
  const total = subtotal + shipping + tax

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (items.length === 0) {
      return
    }

    onPlaceOrder({
      customerName: formData.fullName,
      email: formData.email,
      total,
    })
  }

  if (orderPlaced) {
    return (
      <section className="checkout-success reveal" style={{ '--delay': '80ms' }}>
        <p className="section-kicker">Order Confirmed</p>
        <h2>Thanks, {orderPlaced.customerName}. Your order is in progress.</h2>
        <p>
          Confirmation was sent to {orderPlaced.email}. Order number:{' '}
          <strong>{orderPlaced.orderNumber}</strong>
        </p>
        <p>Total paid: {formatPrice(orderPlaced.total)}</p>
        <button type="button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
      </section>
    )
  }

  if (items.length === 0) {
    return (
      <section className="checkout-empty reveal" style={{ '--delay': '80ms' }}>
        <p className="section-kicker">Checkout</p>
        <h2>Your cart is empty.</h2>
        <p>Add artwork from the shop before checking out.</p>
        <button type="button" onClick={onContinueShopping}>
          Go to Shop
        </button>
      </section>
    )
  }

  return (
    <section className="checkout-section">
      <form
        className="checkout-form reveal"
        style={{ '--delay': '80ms' }}
        onSubmit={handleSubmit}
      >
        <p className="section-kicker">Shipping Details</p>
        <h2>Complete your order</h2>

        <label className="checkout-field">
          Full name
          <input
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label className="checkout-field">
          Email address
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label className="checkout-field">
          Street address
          <input
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <div className="checkout-row">
          <label className="checkout-field">
            City
            <input
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>

          <label className="checkout-field">
            State
            <input
              name="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </label>

          <label className="checkout-field">
            ZIP
            <input
              name="zip"
              type="text"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <button type="submit">Place Order</button>
      </form>

      <aside className="checkout-summary reveal" style={{ '--delay': '120ms' }}>
        <p className="section-kicker">Order Summary</p>
        <h3>{items.length} item(s)</h3>

        <div className="checkout-items">
          {items.map((item) => (
            <article className="checkout-item" key={item.id}>
              <img src={item.image} alt={item.title} loading="lazy" />
              <div>
                <p>{item.title}</p>
                <small>
                  {item.artist} | Qty: {item.quantity}
                </small>
              </div>
              <strong>{formatPrice(item.price * item.quantity)}</strong>
            </article>
          ))}
        </div>

        <div className="checkout-totals">
          <p>
            <span>Subtotal</span>
            <strong>{formatPrice(subtotal)}</strong>
          </p>
          <p>
            <span>Shipping</span>
            <strong>{formatPrice(shipping)}</strong>
          </p>
          <p>
            <span>Tax</span>
            <strong>{formatPrice(tax)}</strong>
          </p>
          <p className="checkout-total">
            <span>Total</span>
            <strong>{formatPrice(total)}</strong>
          </p>
        </div>
      </aside>
    </section>
  )
}

export default Checkout

