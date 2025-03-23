import "../styles/sections/logos.css"

function Logos() {

  const logoImages=[
    "/Alternative Products.png",
    "/farmers.png",
    "/plant.png",
    "/gardening.png",
    "/Market.png",
    ];
  return (
    <section className="logos-section">
      <div className="container">
        <p className="logos-text">For our very own farming community</p>
        <div className="logos-grid">
          {logoImages.map((src, index) => (
            <div key={index} className="logo-item">
              <img src={src} alt={`Company logo ${index + 1}`} className="logo-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Logos

