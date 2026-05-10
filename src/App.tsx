import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { AmbientGlow } from './components/ui/AmbientGlow';
import { ParticleCanvas } from './components/ui/ParticleCanvas';
import { Navigation } from './components/layout/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { Footer } from './components/layout/Footer';

// Lazy load sections below the fold
const AboutSection = lazy(() => import('./components/sections/AboutSection').then(m => ({ default: m.AboutSection })));
const DoubleLifeSection = lazy(() => import('./components/sections/DoubleLifeSection').then(m => ({ default: m.DoubleLifeSection })));
const AuthorSection = lazy(() => import('./components/sections/AuthorSection').then(m => ({ default: m.AuthorSection })));
const TrailerSection = lazy(() => import('./components/sections/TrailerSection').then(m => ({ default: m.TrailerSection })));
const ReviewsSection = lazy(() => import('./components/sections/ReviewsSection').then(m => ({ default: m.ReviewsSection })));
const FeaturesSection = lazy(() => import('./components/sections/FeaturesSection').then(m => ({ default: m.FeaturesSection })));
const FinalCtaSection = lazy(() => import('./components/sections/FinalCtaSection').then(m => ({ default: m.FinalCtaSection })));

function App() {
  useSmoothScroll();

  return (
    <LazyMotion features={domAnimation}>
      <AmbientGlow />
      <ParticleCanvas />
      
      <Navigation />
      
      <main className="relative z-[2]">
        <HeroSection />
        <Suspense fallback={null}>
          <AboutSection />
          <DoubleLifeSection />
          <AuthorSection />
          <TrailerSection />
          <ReviewsSection />
          <FeaturesSection />
          <FinalCtaSection />
        </Suspense>
      </main>

      <Footer />
    </LazyMotion>
  );
}

export default App;
