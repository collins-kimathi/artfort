// Story component/page file.
function Story() {
  return (
    <section className="story-section" id="artists">
      <div className="story-shell">
        <div className="story-visual reveal" style={{ '--delay': '80ms' }} />
        <div className="story-copy reveal" style={{ '--delay': '170ms' }}>
          <p className="section-kicker">About Artfort</p>
          <h2>Built for collectors who want more than decorative prints.</h2>
          <p>
            Artfort partners directly with independent artists and small studios,
            making limited original art accessible without gallery complexity.
          </p>
          <p>
            We curate by story and process, then help each collector choose work
            that feels intentional in their home or office.
          </p>
          <ul className="story-stats">
            <li>
              <strong>98%</strong>
              Customer satisfaction
            </li>
            <li>
              <strong>12</strong>
              Countries served each month
            </li>
            <li>
              <strong>100%</strong>
              Authenticity guaranteed
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Story

