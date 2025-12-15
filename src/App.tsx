import React from 'react';
import { HeroSection } from './components/HeroSection';
import { SkillsSection } from './components/SkillsSection';
import { ActivitySection } from './components/ActivitySection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    
    <div className="app-container">
      <main className="main-wrapper">
        <HeroSection />
        <SkillsSection />
        <ActivitySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;