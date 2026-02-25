// Header component/page file.
const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Shop', id: 'shop' },
  { label: 'Contact', id: 'contact' },
]

const currencyOptions = ['KES', 'USD', 'EUR', 'GBP']

function Header({
  activePage,
  cartCount,
  selectedCurrency,
  onCartOpen,
  onCurrencyChange,
  onNavigate,
}) {
  return (
    <header className="site-header reveal" style={{ '--delay': '60ms' }}>
      <div className="brand-lockup">
        <p className="brand-kicker">Online Gallery</p>
        <button
          className="brand-name"
          type="button"
          onClick={() => onNavigate('home')}
          aria-label="Go to home page"
        >
          <span className="brand-name-text">Artfort Atelier</span>
        </button>
      </div>

      <nav className="site-nav" aria-label="Primary">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={activePage === item.id ? 'active' : ''}
            type="button"
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="header-controls">
        <label className="currency-picker" htmlFor="currency-picker">
          <span>Currency</span>
          <select
            id="currency-picker"
            value={selectedCurrency}
            onChange={(event) => onCurrencyChange(event.target.value)}
          >
            {currencyOptions.map((currencyCode) => (
              <option key={currencyCode} value={currencyCode}>
                {currencyCode}
              </option>
            ))}
          </select>
        </label>

        <button className="cart-pill" type="button" onClick={onCartOpen}>
          <span>Cart</span>
          <span className="cart-count" aria-label={`${cartCount} items in cart`}>
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header

