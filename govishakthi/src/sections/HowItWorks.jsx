import Badge from "../components/Badge"
import "../styles/sections/how-it-works.css"

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Create Account",
      description: "Sign up in seconds with just your email. No credit card required to get started.",
    },
    {
      step: "02",
      title: "Configure Workspace",
      description: "Customize your workspace to match your team's unique workflow and requirements.",
    },
    {
      step: "03",
      title: "Boost Productivity",
      description: "Start using our powerful features to streamline processes and achieve your goals.",
    },
  ]

  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="how-it-works-header">
          <Badge>How It Works</Badge>
          <h2 className="how-it-works-title">Simple Process, Powerful Results</h2>
          <p className="how-it-works-description">
            Get started in minutes and see the difference our platform can make for your business.
          </p>
        </div>

        <div className="steps-container">
          <div className="steps-line"></div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="how-it-works-background"></div>
    </section>
  )
}

export default HowItWorks

