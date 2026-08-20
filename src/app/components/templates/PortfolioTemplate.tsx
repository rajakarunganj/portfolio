import { ScrollProgress } from '../atoms/ScrollProgress';
import { BackToTop } from '../atoms/BackToTop';
import { AmbientGlow } from '../atoms/AmbientGlow';
import { CinematicLight } from '../atoms/CinematicLight';
import { SpiderWebBackground } from '../atoms/SpiderWebBackground';
import { SpiderCrawler } from '../atoms/SpiderCrawler';
import { EmberField } from '../atoms/EmberField';
import { GrainOverlay } from '../atoms/GrainOverlay';
import { Vignette } from '../atoms/Vignette';
import { Letterbox, LetterboxBottom } from '../atoms/Letterbox';
import { FrameBrackets } from '../atoms/FrameBrackets';
import { WebCursor } from '../atoms/WebCursor';
import { Navigation } from '../organisms/Navigation';
import { Hero } from '../organisms/Hero';
import { About } from '../organisms/About';
import { Skills } from '../organisms/Skills';
import { Projects } from '../organisms/Projects';
import { Certificates } from '../organisms/Certificates';
import { Experience } from '../organisms/Experience';
import { Contact } from '../organisms/Contact';
import { Footer } from '../organisms/Footer';

export function PortfolioTemplate() {
  return (
    <div className="min-h-screen relative bg-background text-foreground">
      <CinematicLight />
      <AmbientGlow />
      <SpiderWebBackground />
      <SpiderCrawler />
      <EmberField />
      <GrainOverlay />
      <Vignette />
      <Letterbox />
      <LetterboxBottom />
      <FrameBrackets />
      <WebCursor />
      <ScrollProgress />
      <BackToTop />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}