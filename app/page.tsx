import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { InfoSection } from "@/components/info-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <InfoSection />
      <Footer />
    </main>
  )
}
