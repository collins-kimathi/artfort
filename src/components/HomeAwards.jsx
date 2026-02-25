// HomeAwards component/page file.
const awards = {
  painting: [
    'Rising Contemporary Artist - Amsterdam',
    'Canvas & Form Distinction - Milan',
    'Art Direction Mention - Cape Town',
  ],
  photography: [
    'Visual Narrative Prize - Nairobi',
    'Modern Lens Award - Copenhagen',
    'Editorial Portrait Selection - Berlin',
  ],
}

function HomeAwards() {
  return (
    <section className="home-awards">
      <div className="home-awards-copy reveal" style={{ '--delay': '120ms' }}>
        <p className="section-kicker">/02 Awards</p>
        <h2>Honorable mentions</h2>
      </div>

      <div className="home-awards-grid">
        <article className="home-award-card reveal" style={{ '--delay': '170ms' }}>
          <h3>Painting</h3>
          <ul>
            {awards.painting.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="home-award-card reveal" style={{ '--delay': '230ms' }}>
          <h3>Photography</h3>
          <ul>
            {awards.photography.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default HomeAwards

