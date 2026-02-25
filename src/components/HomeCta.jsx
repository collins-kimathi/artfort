// HomeCta component/page file.
function HomeCta({ onNavigate }) {
  return (
    <section className="home-cta reveal" style={{ '--delay': '150ms' }}>
      <p className="section-kicker">Start Collecting</p>
      <h2>Ready to find a piece that fits your space?</h2>
      <button className="btn btn-primary" type="button" onClick={() => onNavigate('shop')}>
        Explore the Shop
      </button>
    </section>
  )
}

export default HomeCta

