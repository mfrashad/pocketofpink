import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Team from './components/Team';
import Projects from './components/Projects';
import MediaMentions from './components/MediaMentions';
import Supporters from './components/Supporters';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';
import ExpressToEmpower from './pages/ExpressToEmpower';
import Altorithm from './pages/Altorithm.tsx';

function App() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [route, setRoute] = useState<string>(window.location.hash.replace('#', ''));

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace('#', ''));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleDonateClick = () => {
    setIsDonationModalOpen(true);
  };

  const handleCloseDonationModal = () => {
    setIsDonationModalOpen(false);
  };

  const isExpress = route === '/express-to-empower';
  const isAltorithm = route === '/altorithm';

  return (
    <div className="min-h-screen bg-white">
      {isExpress ? (
        <ExpressToEmpower />
      ) : isAltorithm ? (
        <Altorithm />
      ) : (
        <>
          <Header onDonateClick={handleDonateClick} />
          <Hero onDonateClick={handleDonateClick} />
          <About />
          <Mission />
          <Team />
          <Projects />
          <MediaMentions />
          <Supporters />
          <GetInvolved onDonateClick={handleDonateClick} />
          <Contact />
        </>
      )}
      <Footer />
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={handleCloseDonationModal} 
      />
    </div>
  );
}

export default App;