import Badge from "../components/Badge"
import Button from "../components/Button"
import "../styles/sections/hero.css"

function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <Badge className="hero-badge">Launching Soon</Badge>
          <h1 className="hero-title">Elevate Your Workflow with SaaSify</h1>
          <p className="hero-description">
            The all-in-one platform that helps teams collaborate, automate, and deliver exceptional results. Streamline
            your processes and focus on what matters most.
          </p>
          <div className="hero-actions">
            <Button className="hero-cta">
              Start Free Trial
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
            <Button variant="outline" className="hero-secondary-cta">
              Book a Demo
            </Button>
          </div>
          <div className="hero-features">
            <div className="hero-feature">
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
                className="check-icon"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>No credit card</span>
            </div>
            <div className="hero-feature">
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
                className="check-icon"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>14-day trial</span>
            </div>
            <div className="hero-feature">
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
                className="check-icon"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src="https://cdn.dribbble.com/userupload/12302729/file/original-fa372845e394ee85bebe0389b9d86871.png?resize=1504x1128&vertical=center"
            alt="SaaSify dashboard"
            className="hero-image"
          />
          <div className="hero-image-glow hero-image-glow-1"></div>
          <div className="hero-image-glow hero-image-glow-2"></div>
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  )
}

export default Hero

