import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrustSignals from './components/TrustSignals';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import NurserySection from './components/NurserySection';
import EcosystemBanner from './components/EcosystemBanner';
import SchoolSection from './components/SchoolSection';
import FacilitiesSection from './components/FacilitiesSection';
import TeamParentsSection from './components/TeamParentsSection';
import WhyUsSection from './components/WhyUsSection';
import ActivitiesSection from './components/ActivitiesSection';
import GallerySection from './components/GallerySection';
import ProgramsSection from './components/ProgramsSection';
import TeamPartnersSection from './components/TeamPartnersSection';
import NewsSection from './components/NewsSection';
import SocialSection from './components/SocialSection';
import AdmissionSection from './components/AdmissionSection';
import InfoSection from './components/InfoSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import VisitModal from './components/VisitModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-white">
      <Header onVisitClick={() => setModalOpen(true)} />
      <HeroSection onVisitClick={() => setModalOpen(true)} />
      <TrustSignals />
      <AboutSection />
      <EducationSection />
      <NurserySection />
      <EcosystemBanner />
      <SchoolSection />
      <FacilitiesSection />
      <TeamParentsSection />
      <WhyUsSection />
      <ActivitiesSection />
      <GallerySection />
      <ProgramsSection />
      <TeamPartnersSection />
      <NewsSection />
      <SocialSection />
      <AdmissionSection />
      <InfoSection />
      <FAQSection />
      <FinalCTASection onVisitClick={() => setModalOpen(true)} />
      <ContactSection />
      <Footer />
      <VisitModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
