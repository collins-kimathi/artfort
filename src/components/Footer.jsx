// Footer component/page file.
function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <p>Artfort Atelier</p>
      <div className="footer-links">
        <button type="button" onClick={() => onNavigate('home')}>
          Home
        </button>
        <button type="button" onClick={() => onNavigate('shop')}>
          Shop
        </button>
        <button type="button" onClick={() => onNavigate('contact')}>
          Contact
        </button>
      </div>
      <small>Original paintings by plato artistry.</small>
    </footer>
  )
}

export default Footer

