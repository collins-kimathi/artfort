// FaqPage component/page file.
import Faq from '../components/Faq'

function FaqPage({ faqs }) {
  return (
    <>
      <section className="page-heading reveal" style={{ '--delay': '80ms' }}>
        <p className="section-kicker">Faq</p>
        <h1>Shipping, authenticity, and support details</h1>
      </section>
      <Faq faqs={faqs} />
    </>
  )
}

export default FaqPage

