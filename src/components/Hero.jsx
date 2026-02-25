// Hero component/page file.
function Hero({ featuredArtworks, onNavigate }) {
  const featured = featuredArtworks[0]

  return (
    <section className="hero-section" id="home">
      <article className="hero-single reveal" style={{ '--delay': '120ms' }}>
        <img src={featured.image} alt={featured.title} loading="eager" />
        <div className="hero-single-overlay">
          <p className="hero-kicker">Artfort Atelier</p>
          <h1>Original art for bold, expressive spaces.</h1>
          <p>
            Discover handpicked contemporary works from independent artists and
            collect pieces that transform your home.
          </p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => onNavigate('shop')}
          >
            Shop Collection
          </button>
        </div>
      </article>
    </section>
  )
}

export default Hero

