// ArtistsPage component/page file.
import Story from '../components/Story'

function ArtistsPage() {
  return (
    <>
      <section className="page-heading reveal" style={{ '--delay': '80ms' }}>
        <p className="section-kicker">Artists</p>
        <h1>Meet the studios behind the work</h1>
      </section>
      <Story />
    </>
  )
}

export default ArtistsPage

