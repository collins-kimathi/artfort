// HomePage component/page file.
import Hero from '../components/Hero'
import HomeAwards from '../components/HomeAwards'
import HomeCta from '../components/HomeCta'
import HomeInteractiveArt from '../components/HomeInteractiveArt'
import HomeStatements from '../components/HomeStatements'

function HomePage({ artworks, onNavigate }) {
  return (
    <>
      <Hero featuredArtworks={artworks.slice(0, 3)} onNavigate={onNavigate} />
      <HomeInteractiveArt />
      <HomeStatements />
      <HomeAwards />
      <HomeCta onNavigate={onNavigate} />
    </>
  )
}

export default HomePage

