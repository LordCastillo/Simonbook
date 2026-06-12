import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { AmbientGlow } from "./components/ui/AmbientGlow";
import { ParticleCanvas } from "./components/ui/ParticleCanvas";
import { Navigation } from "./components/layout/Navigation";
import { HeroSection } from "./components/sections/HeroSection";
import { IntroSection } from "./components/sections/IntroSection";
import { TimelineSection } from "./components/sections/TimelineSection";
import { DoubleLifeSection } from "./components/sections/DoubleLifeSection";
import { AuthorSection } from "./components/sections/AuthorSection";
import { TrailerSection } from "./components/sections/TrailerSection";
import { LifeSection } from "./components/sections/LifeSection";
import { ReviewsSection } from "./components/sections/ReviewsSection";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { FinalCtaSection } from "./components/sections/FinalCtaSection";
import { Footer } from "./components/layout/Footer";

function App() {
  useSmoothScroll();

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <AmbientGlow />
        <ParticleCanvas />

        <Navigation />

        <main className="relative z-[2]">
          <HeroSection />
          <IntroSection />
          <TimelineSection />
          <DoubleLifeSection />
          <AuthorSection />
          <TrailerSection />
          <LifeSection />
          <ReviewsSection />
          <FeaturesSection />
          <FinalCtaSection />
        </main>

        <Footer />
      </LazyMotion>
    </MotionConfig>
  );
}

export default App;
