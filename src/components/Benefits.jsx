// Benefits component/page file.
function Benefits({ items }) {
  return (
    <section className="benefits-section">
      <div className="benefits-header reveal" style={{ '--delay': '80ms' }}>
        <p className="section-kicker">Collector Care</p>
        <h2>A boutique buying experience from checkout to final wall placement.</h2>
      </div>

      <div className="benefits-grid">
        {items.map((item, index) => (
          <article
            className="benefit-card reveal"
            style={{ '--delay': `${130 + index * 90}ms` }}
            key={item.title}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Benefits

