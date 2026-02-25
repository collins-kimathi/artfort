// HomeStatements component/page file.
const lines = [
  'Welcome to our shop, where every paint you see is lovingly handcrafted by a passionate and talented artist dedicated to quality and color',
  <br />,
  'Our paints are not just colors, but a reflection of our commitment to excellence and creativity,designed to inspire and bring your artistic',
  <br />,
  'visions to life',
]

function HomeStatements() {
  return (
    <section className="home-statements">
      {lines.map((line, index) => (
        <p
          className="home-statement reveal"
          style={{ '--delay': `${140 + index * 90}ms` }}
          key={line}
        >
          <span>{line}</span>
        </p>
      ))}
    </section>
  )
}

export default HomeStatements

