import { lazy, Suspense } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { AmbientGlow } from "./components/ui/AmbientGlow";
import { ParticleCanvas } from "./components/ui/ParticleCanvas";
import { Navigation } from "./components/layout/Navigation";
import { HeroSection } from "./components/sections/HeroSection";

// Below-fold sections: lazy-loaded so the initial JS bundle is smaller
const IntroSection      = lazy(() => import("./components/sections/IntroSection").then(m => ({ default: m.IntroSection })));
const TimelineSection   = lazy(() => import("./components/sections/TimelineSection").then(m => ({ default: m.TimelineSection })));
const DoubleLifeSection = lazy(() => import("./components/sections/DoubleLifeSection").then(m => ({ default: m.DoubleLifeSection })));
const AuthorSection     = lazy(() => import("./components/sections/AuthorSection").then(m => ({ default: m.AuthorSection })));
const TrailerSection    = lazy(() => import("./components/sections/TrailerSection").then(m => ({ default: m.TrailerSection })));
const LifeSection       = lazy(() => import("./components/sections/LifeSection").then(m => ({ default: m.LifeSection })));
const ReviewsSection    = lazy(() => import("./components/sections/ReviewsSection").then(m => ({ default: m.ReviewsSection })));
const FeaturesSection   = lazy(() => import("./components/sections/FeaturesSection").then(m => ({ default: m.FeaturesSection })));
const FinalCtaSection   = lazy(() => import("./components/sections/FinalCtaSection").then(m => ({ default: m.FinalCtaSection })));
const Footer            = lazy(() => import("./components/layout/Footer").then(m => ({ default: m.Footer })));

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
          <Suspense fallback={null}>
            <IntroSection />
            <TimelineSection />
            <DoubleLifeSection />
            <AuthorSection />
            <TrailerSection />
            <LifeSection />
            <ReviewsSection />
            <FeaturesSection />
            <FinalCtaSection />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </LazyMotion>
    </MotionConfig>
  );
}

export default App;
