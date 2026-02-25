// Faq component/page file.
import { useState } from 'react'

function Faq({ faqs }) {
  const [activeQuestion, setActiveQuestion] = useState(0)

  const toggleQuestion = (index) => {
    setActiveQuestion((current) => (current === index ? -1 : index))
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-header reveal" style={{ '--delay': '80ms' }}>
        <p className="section-kicker">Faq</p>
        <h2>Everything you need before collecting your first piece.</h2>
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = activeQuestion === index

          return (
            <article
              className={`faq-item reveal ${isOpen ? 'open' : ''}`}
              style={{ '--delay': `${130 + index * 90}ms` }}
              key={item.question}
            >
              <button type="button" onClick={() => toggleQuestion(index)}>
                <span>{item.question}</span>
                <strong>{isOpen ? '-' : '+'}</strong>
              </button>
              {isOpen ? <p>{item.answer}</p> : null}
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Faq

