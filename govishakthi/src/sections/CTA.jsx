import Button from "../components/Button"
import "../styles/sections/cta.css"

function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Workflow?</h2>
          <p className="cta-description">
            Join thousands of satisfied customers who have streamlined their processes and boosted productivity with our
            platform.
          </p>
          <div className="cta-actions">
            <Button className="cta-primary-btn">
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
            <Button variant="outline" className="cta-secondary-btn">
              Schedule a Demo
            </Button>
          </div>
          <p className="cta-note">No credit card required. 14-day free trial. Cancel anytime.</p>
        </div>
      </div>
      <div className="cta-background"></div>
    </section>
  )
}

export default CTA

