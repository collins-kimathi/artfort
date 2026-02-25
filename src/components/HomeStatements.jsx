// HomeStatements component/page file.
const lines = [
  'Welcome to our shop, where every paint you see is lovingly handcrafted by a passionate and talented artist dedicated to quality and color',
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

