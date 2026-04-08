import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import MethodologySection from '@/components/sections/MethodologySection'
import WorkSection from '@/components/sections/WorkSection'
import BackgroundSection from '@/components/sections/BackgroundSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <MethodologySection />
        <WorkSection />
        <BackgroundSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
