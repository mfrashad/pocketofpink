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
import EditToolbar from './components/EditToolbar';
import ExpressToEmpower from './pages/ExpressToEmpower';
import Altorithm from './pages/Altorithm.tsx';

function App() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [route, setRoute] = useState<string>(window.location.hash.replace('#', ''));

  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash.replace('#', '');
      setRoute(next);
      // When moving between top-level routes (subpage <-> home), snap to top.
      // Don't override scroll for same-page section anchors (#about, #mission...).
      if (next.startsWith('/') || next === '' || next === 'home') {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // First load on a subpage URL — ensure we start at the top.
  useEffect(() => {
    if (route.startsWith('/')) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="min-h-screen bg-white overflow-x-hidden w-full relative">
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
      <EditToolbar />
    </div>
  );
}

export default App;