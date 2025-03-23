import Badge from "../components/Badge"
import "../styles/sections/how-it-works.css"

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Sign Up & Set Your Preferences",
      description: "Create your account and customize your preferences by selecting your location, crops, and farming interests. This helps us provide tailored insights just for you.",
    },
    {
      step: "02",
      title: "Explore Smart Insights & Alerts",
      description: "Get real-time updates on weather, price forecasts, demand trends, and alternative product suggestions—all in one place. Stay informed and make data-driven farming decisions.",
    },
    {
      step: "03",
      title: "Take Action & Maximize Your Profits",
      description: "Use AI-powered recommendations to plan your farming activities, sell at the right time, and optimize your yield. Unlock premium features for expert guidance and in-depth analysis.",
    },
  ]

  return (
    <section className="how-it-works-section">
      <div className="container">
        <div className="how-it-works-header">
          <Badge>Getting Started with GoviShakthi</Badge>
          <h2 className="how-it-works-title">Smart Farming Made Simple - Get Insights, Plan Better, and Boost Your Profits</h2>
          <p className="how-it-works-description">
            Follow these three easy steps to make the most of GoviShakthi and take your farming to the next level!
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

