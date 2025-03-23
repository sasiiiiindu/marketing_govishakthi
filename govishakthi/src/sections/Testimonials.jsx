import Badge from "../components/Badge"
import { Card, CardContent } from "../components/Card"
import "../styles/sections/testimonials.css"

function Testimonials() {
  const testimonials = [
    {
      quote:
        "GoviShakthi's price predictions have helped me sell my harvest at the right time, earning me a much better profit. Now, I never have to guess market prices!",
      author: "Nimal Perera",
      role: "Paddy Farmer, Polonnaruwa",
      rating: 5,
    },
    {
      quote:
        "The alternative product suggestions gave me new ideas for crops that grow well in my area. I diversified my farm and saw a significant income boost!",
      author: "Sanduni Rathnayake",
      role: "Vegetable Farmer, Nuwara Eliya",
      rating: 5,
    },
    {
      quote:
        "With GoviShakthi's weather updates, I can prepare for sudden rains or dry spells in advance. It has saved my crops more than once!",
      author: "Kamal Jayasena",
      role: "Tea Grower, Kandy",
      rating: 5,
    },
    {
      quote:
        "Thanks to the demand prediction feature, I now know what products will be in high demand. It has helped me plan better and reduce waste",
      author: "Priyantha Silva",
      role: "Coconut Estate Owner, Kurunegala",
      rating: 5,
    },
    {
      quote:
        "Farming is unpredictable, but GoviShakthi's insights have given me more control over my business. The app is like having an expert advisor with me all the time!",
      author: "Thilini Wijesingha",
      role: "Aquaculture Farmer, Negombo",
      rating: 5,
    },
    {
      quote:
        "GoviShakthi's news feed keeps me updated on government schemes and subsidies. I’ve benefited from programs I never knew existed before!",
      author: "Wasantha Ekanayaka",
      role: "Mixed Crop Farmer, Anuradhapura",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <Badge>Testimonials</Badge>
          <h2 className="testimonials-title">What Farmers Say About GoviShakthi</h2>
          <p className="testimonials-description">
          Trusted by Sri Lanka's Farming Community for Smarter, More Profitable Agriculture
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

