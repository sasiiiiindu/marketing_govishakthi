import Button from "../components/Button"
import "../styles/sections/cta.css"

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Revolutionize Your Farming?</h2>
          <p className="cta-description">
            Join thousands of Sri Lankan farmers who are making smarter decisions, increasing yields, and maximizing profits with GoviShakthi.
          </p>
          <div className="cta-actions">
            <Button className="cta-primary-btn">
                Download the App
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="arrow-icon"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Button>
            <Button variant="outline" className="cta-secondary-btn">
              Learn More
            </Button>
          </div>
          <p className="cta-note">No hidden fees. Free to use. Upgrade anytime for premium features.</p>
        </div>
      </div>
      <div className="cta-background"></div>
    </section>
  )
}

export default CTA

