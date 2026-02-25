// Newsletter component/page file.
import { useState } from 'react'

function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="newsletter-section" id="contact">
      <div className="newsletter-shell reveal" style={{ '--delay': '80ms' }}>
        <div>
          <p className="section-kicker">Private Drop Alerts</p>
          <h2>Get first access to limited releases and artist interviews.</h2>
          {isSubmitted ? (
            <p className="newsletter-success">
              Thanks for subscribing. You are on the preview list.
            </p>
          ) : null}
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input id="email" type="email" placeholder="Enter your email" />
          <button type="submit">Join the list</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter

