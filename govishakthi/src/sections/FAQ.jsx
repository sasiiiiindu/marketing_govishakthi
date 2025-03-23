import Badge from "../components/Badge"
import { Accordion, AccordionItem } from "../components/Accordion"
import "../styles/sections/faq.css"

function FAQ() {
  const faqs = [
    {
      question: "What Is GoviShakthi?",
      answer:
        "GoviShakthi is an AI powered platform that helps farmers to get the right information at the right time to make informed decisions. It provides information on weather, crop management, pest management, market prices, and government schemes.",
    },
    {
      question: "How does GoviShakthi help improve farmers' income?",
      answer:
        "We provide tools and insights, such as price forecasting, alternative product recommendations, and access to reliable markets, enabling farmers to make data-driven decisions and maximixe their profits.",
    },
    {
      question: "What makes GoviShakthi's services unique?",
      answer:
        "Our innovative approach combines technology with agricultural expertise to offer taliored solutions. Services like price prediction, market insights, and alternative product recommendations empower farmers with actionable insights.",
    },
    {
      question: "How does GoviShakthi's news feed benefit farmers?",
      answer:
        "Our news feed keeps farmers updated on the latest agricultural trends, government policies, subsidy programs, and market changes. This real-time information empowers them to make informed decisions and adapt to industry developments.",
    },
    {
      question: " How does GoviShakthi's price and demand prediction help farmers?",
      answer:
        "GoviShakthi uses AI-driven analytics to predict future market prices and demand trends for different crops. By understanding these forecasts, farmers can decide the best time to sell their produce and choose high-demand crops, ensuring better profitability.",
    },
    {
      question: "How does GoviShakthi's weather updates improve farming decisions?",
      answer:
        "Our real-time weather updates and early alerts help farmers plan their agricultural activities effectively. From scheduling irrigation to preparing for extreme weather conditions, GoviShakthi ensures farmers minimize risks and optimize yield.",
    },
  ]

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <Badge>FAQ</Badge>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">Find answers to common questions about our application.</p>
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

