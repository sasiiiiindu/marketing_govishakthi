import Badge from "../components/Badge"
import { Card, CardContent } from "../components/Card"
import "../styles/sections/testimonials.css"

function Testimonials() {
  const testimonials = [
    {
      quote:
        "SaaSify has transformed how we manage our projects. The automation features have saved us countless hours of manual work.",
      author: "Sarah Johnson",
      role: "Project Manager, TechCorp",
      rating: 5,
    },
    {
      quote:
        "The analytics dashboard provides insights we never had access to before. It's helped us make data-driven decisions that have improved our ROI.",
      author: "Michael Chen",
      role: "Marketing Director, GrowthLabs",
      rating: 5,
    },
    {
      quote:
        "Customer support is exceptional. Any time we've had an issue, the team has been quick to respond and resolve it. Couldn't ask for better service.",
      author: "Emily Rodriguez",
      role: "Operations Lead, StartupX",
      rating: 5,
    },
    {
      quote:
        "We've tried several similar solutions, but none compare to the ease of use and comprehensive features of SaaSify. It's been a game-changer.",
      author: "David Kim",
      role: "CEO, InnovateNow",
      rating: 5,
    },
    {
      quote:
        "The collaboration tools have made remote work so much easier for our team. We're more productive than ever despite being spread across different time zones.",
      author: "Lisa Patel",
      role: "HR Director, RemoteFirst",
      rating: 5,
    },
    {
      quote:
        "Implementation was seamless, and the ROI was almost immediate. We've reduced our operational costs by 30% since switching to SaaSify.",
      author: "James Wilson",
      role: "COO, ScaleUp Inc",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <Badge>Testimonials</Badge>
          <h2 className="testimonials-title">Loved by Teams Worldwide</h2>
          <p className="testimonials-description">
            Don't just take our word for it. See what our customers have to say about their experience.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card">
              <CardContent>
                <div className="testimonial-rating">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="star-icon"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                </div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.author.charAt(0)}</div>
                  <div className="author-info">
                    <p className="author-name">{testimonial.author}</p>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

