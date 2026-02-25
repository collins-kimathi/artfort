// ContactPage component/page file.
import ContactPanel from '../components/ContactPanel'

function ContactPage() {
  return (
    <>
      <section className="page-heading reveal" style={{ '--delay': '80ms' }}>
        <p className="section-kicker">Contact</p>
        <h1>Get in touch directly</h1>
      </section>
      <ContactPanel />
    </>
  )
}

export default ContactPage

