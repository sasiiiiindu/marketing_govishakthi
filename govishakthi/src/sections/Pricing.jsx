import Badge from "../components/Badge"
import Button from "../components/Button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/Tabs"
import "../styles/sections/pricing.css"

function Pricing() {
  const plans = {
    monthly: [
      {
        name: "Starter",
        price: "$29",
        description: "Perfect for small teams and startups.",
        features: ["Up to 5 team members", "Basic analytics", "5GB storage", "Email support"],
        cta: "Start Free Trial",
      },
      {
        name: "Professional",
        price: "$79",
        description: "Ideal for growing businesses.",
        features: [
          "Up to 20 team members",
          "Advanced analytics",
          "25GB storage",
          "Priority email support",
          "API access",
        ],
        cta: "Start Free Trial",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$199",
        description: "For large organizations with complex needs.",
        features: [
          "Unlimited team members",
          "Custom analytics",
          "Unlimited storage",
          "24/7 phone & email support",
          "Advanced API access",
          "Custom integrations",
        ],
        cta: "Contact Sales",
      },
    ],
    annually: [
      {
        name: "Starter",
        price: "$23",
        description: "Perfect for small teams and startups.",
        features: ["Up to 5 team members", "Basic analytics", "5GB storage", "Email support"],
        cta: "Start Free Trial",
      },
      {
        name: "Professional",
        price: "$63",
        description: "Ideal for growing businesses.",
        features: [
          "Up to 20 team members",
          "Advanced analytics",
          "25GB storage",
          "Priority email support",
          "API access",
        ],
        cta: "Start Free Trial",
        popular: true,
      },
      {
        name: "Enterprise",
        price: "$159",
        description: "For large organizations with complex needs.",
        features: [
          "Unlimited team members",
          "Custom analytics",
          "Unlimited storage",
          "24/7 phone & email support",
          "Advanced API access",
          "Custom integrations",
        ],
        cta: "Contact Sales",
      },
    ],
  }

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <Badge>Pricing</Badge>
          <h2 className="pricing-title">Simple, Transparent Pricing</h2>
          <p className="pricing-description">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>

        <Tabs defaultValue="monthly" className="pricing-tabs">
          <TabsList className="pricing-tabs-list">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="annually">Annually (Save 20%)</TabsTrigger>
          </TabsList>

          <TabsContent value="monthly">
            <div className="pricing-plans">
              {plans.monthly.map((plan, index) => (
                <div key={index} className={`pricing-plan ${plan.popular ? "popular" : ""}`}>
                  {plan.popular && <div className="pricing-plan-popular-badge">Most Popular</div>}
                  <h3 className="pricing-plan-name">{plan.name}</h3>
                  <div className="pricing-plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">/month</span>
                  </div>
                  <p className="pricing-plan-description">{plan.description}</p>
                  <ul className="pricing-plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="pricing-plan-feature">
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? "primary" : "outline"} className="pricing-plan-cta">
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="annually">
            <div className="pricing-plans">
              {plans.annually.map((plan, index) => (
                <div key={index} className={`pricing-plan ${plan.popular ? "popular" : ""}`}>
                  {plan.popular && <div className="pricing-plan-popular-badge">Most Popular</div>}
                  <h3 className="pricing-plan-name">{plan.name}</h3>
                  <div className="pricing-plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="period">/month</span>
                  </div>
                  <p className="pricing-plan-description">{plan.description}</p>
                  <ul className="pricing-plan-features">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="pricing-plan-feature">
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
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.popular ? "primary" : "outline"} className="pricing-plan-cta">
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="pricing-background"></div>
    </section>
  )
}

export default Pricing

