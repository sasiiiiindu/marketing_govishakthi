import "../styles/sections/logos.css"

function Logos() {
  return (
    <section className="logos-section">
      <div className="container">
        <p className="logos-text">Trusted by innovative companies worldwide</p>
        <div className="logos-grid">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="logo-item">
              <img src={`/placeholder-logo.svg`} alt={`Company logo ${i}`} className="logo-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos

