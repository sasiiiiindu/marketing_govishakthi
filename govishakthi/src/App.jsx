import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import Logos from "./sections/Logos"
import Features from "./sections/Features"
import HowItWorks from "./sections/HowItWorks"
import Testimonials from "./sections/Testimonials"
import Pricing from "./sections/Pricing"
import FAQ from "./sections/FAQ"
import CTA from "./sections/CTA"
import { ThemeProvider } from "./components/ThemeProvider"
import "./styles/global.css"

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Logos />
          <Features />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

