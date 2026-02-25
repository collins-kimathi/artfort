// ContactPanel component/page file.
import { useState } from 'react'

function ContactPanel() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="contact-panel">
      <div className="contact-grid">
        <aside className="contact-info reveal" style={{ '--delay': '120ms' }}>
          <p className="section-kicker">Contact Details</p>
          <h2>Let&apos;s talk about your next painting.</h2>
          <p>
            Reach out for custom requests, framing questions, or shipping support.
          </p>
          <ul>
            <li>
              <span>Email</span>
              <a href="mailto:hello@artfortatelier.com">hello@artfortatelier.com</a>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:+254700000000">+254 700 000 000</a>
            </li>
            <li>
              <span>Studio</span>
              <p>Nairobi, Kenya</p>
            </li>
          </ul>
        </aside>

        <form
          className="contact-form reveal"
          style={{ '--delay': '180ms' }}
          onSubmit={handleSubmit}
        >
          <label>
            Full name
            <input type="text" placeholder="Your full name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Phone number
            <input type="tel" placeholder="+254..." required />
          </label>

          <label>
            Message
            <textarea
              rows="5"
              placeholder="Tell me what painting style or size you are looking for..."
              required
            />
          </label>

          <button type="submit">Send Message</button>
          {isSubmitted ? (
            <p className="contact-success">
              Thanks, your message has been received.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

export default ContactPanel

