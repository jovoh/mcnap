import React from 'react';
import Header from './components/Header';
import HeroCarousel from './sections/HeroCarousel';
import PresidentsMessage from './sections/PresidentsMessage';
import EventsSection from './sections/EventsSection';
import WelcomeSection from './sections/WelcomeSection';
import ProgramsSection from './sections/ProgramsSection';
import LeadershipTeam from './sections/LeadershipTeam';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroCarousel />
      <PresidentsMessage />
      <EventsSection />
      <WelcomeSection />
      <ProgramsSection />
      <LeadershipTeam />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
