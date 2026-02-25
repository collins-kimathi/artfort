// CheckoutPage component/page file.
import Checkout from '../components/Checkout'

function CheckoutPage({
  items,
  subtotal,
  formatPrice,
  orderPlaced,
  onContinueShopping,
  onPlaceOrder,
}) {
  return (
    <>
      <section className="page-heading reveal" style={{ '--delay': '80ms' }}>
        <p className="section-kicker">Checkout</p>
        <h1>Secure order placement</h1>
      </section>
      <Checkout
        items={items}
        subtotal={subtotal}
        formatPrice={formatPrice}
        orderPlaced={orderPlaced}
        onContinueShopping={onContinueShopping}
        onPlaceOrder={onPlaceOrder}
      />
    </>
  )
}

export default CheckoutPage

