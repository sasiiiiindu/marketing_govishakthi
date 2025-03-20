import Badge from "../components/Badge"
import { Accordion, AccordionItem } from "../components/Accordion"
import "../styles/sections/faq.css"

function FAQ() {
  const faqs = [
    {
      question: "How does the 14-day free trial work?",
      answer:
        "Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to sign up, and you can cancel at any time during the trial period with no obligation.",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a limit to how many users I can add?",
      answer:
        "The number of users depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.",
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer:
        "Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform is compliant with GDPR, CCPA, and other relevant regulations.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "Support varies by plan. All plans include email support, with the Professional plan offering priority email support. The Enterprise plan includes 24/7 phone and email support. We also have an extensive knowledge base and community forum available to all users.",
    },
  ]

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <Badge>FAQ</Badge>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">Find answers to common questions about our platform.</p>
        </div>

        <div className="faq-container">
          <Accordion>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} trigger={faq.question}>
                <p>{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQ

