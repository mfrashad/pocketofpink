import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Video from './components/Video';
import Team from './components/Team';
import Projects from './components/Projects';
import Activities from './components/Activities';
import MovingMediaBanner from './components/MovingMediaBanner';
import MediaMentions from './components/MediaMentions';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';

function App() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  const handleDonateClick = () => {
    setIsDonationModalOpen(true);
  };

  const handleCloseDonationModal = () => {
    setIsDonationModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onDonateClick={handleDonateClick} />
      <Hero onDonateClick={handleDonateClick} />
      <MovingMediaBanner />
      <About />
      <Mission />
      <Video />
      <Team />
      <Projects />
      <Activities />
      <MediaMentions />
      <GetInvolved onDonateClick={handleDonateClick} />
      <Contact />
      <Footer />
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={handleCloseDonationModal} 
      />
    </div>
  );
}

export default App;