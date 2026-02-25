// Testimonials component/page file.
function Testimonials({ testimonials }) {
  return (
    <section className="testimonials-section" id="journal">
      <div className="testimonials-header reveal" style={{ '--delay': '80ms' }}>
        <p className="section-kicker">Collector Stories</p>
        <h2>What buyers say after hanging their first Artfort piece.</h2>
      </div>

      <div className="quote-grid">
        {testimonials.map((item, index) => (
          <article
            className="quote-card reveal"
            style={{ '--delay': `${130 + index * 100}ms` }}
            key={item.name}
          >
            <p>&quot;{item.quote}&quot;</p>
            <span>
              {item.name} | {item.role}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

