import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { BoxCreator } from './components/BoxCreator/BoxCreator';
import { ProfileSection } from './components/ProfileSection';
import { ScrollytellingSection } from './components/ScrollytellingSection';
import { PricingSection } from './components/PricingSection';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <BoxCreator />
      <ProfileSection />
      {/* <ScrollytellingSection /> */}
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;