import React from 'react';
import { ScrollProgress } from '../atoms/ScrollProgress';
import { BackToTop } from '../atoms/BackToTop';
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
    <div className="min-h-screen">
      <ScrollProgress />
      <BackToTop />
      <Navigation />
      <main>
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