import { useSmoothScroll } from './hooks/useSmoothScroll';
import { AmbientGlow } from './components/ui/AmbientGlow';
import { ParticleCanvas } from './components/ui/ParticleCanvas';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { DoubleLifeSection } from './components/sections/DoubleLifeSection';
import { AuthorSection } from './components/sections/AuthorSection';
import { TrailerSection } from './components/sections/TrailerSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';

function App() {
  useSmoothScroll();

  return (
    <>
      <AmbientGlow />
      <ParticleCanvas />
      
      <Navigation />
      
      <main className="relative z-[2]">
        <HeroSection />
        <AboutSection />
        <DoubleLifeSection />
        <AuthorSection />
        <TrailerSection />
        <ReviewsSection />
        <FeaturesSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
