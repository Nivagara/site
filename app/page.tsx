import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { ServicesSection } from "@/components/services-section"
import { HeroSection } from "@/components/hero-section"
import { ReviewForm } from "@/components/review-form"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <FaqSection />
      <ContactSection />
      <Testimonials />
      <ReviewForm />
    </main>
  )
}
