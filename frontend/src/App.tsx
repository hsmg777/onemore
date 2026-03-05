import { Navigation } from "./components/Navigation";
import { ParticleBackground } from "./components/ParticleBackground";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { SolutionsSection } from "./components/SolutionsSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { ProblemsSection } from "./components/ProblemsSection";
import { DemoSection } from "./components/DemoSection";
import { BusinessSection } from "./components/BusinessSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0f24]">
      <ParticleBackground />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <HowItWorksSection />
        <SolutionsSection />
        <BenefitsSection />
        <ProblemsSection />
        <DemoSection />
        <BusinessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
