import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';    
import Footer from './components/Footer';  
import Home from './components/Home'; 
import WorldwideCommunity from './components/WorldCommunity';
import FindContent from './components/FindContent';
import ManageChannels from './components/ManageChannels';
import CampaignEffort from './components/CampaignEffort';
import UserReview from './components/UserReview';
import FixMeeting from './components/FixMeeting';
import CreatorsSection from './components/CreatorsSection';
import BrandCarousel from './components/BrandCarousel';

import PricingHero from './components/PricingPage/PricingHero';
import PricingPlan from './components/PricingPage/PricingPlan';
import SocialNetworks from './components/PricingPage/SocialNetworks';
import PricingCta from './components/PricingPage/PricingCta';

import AboutHero from './components/AboutUs/AboutHero';
import AboutRemarkable from './components/AboutUs/AboutRemarkable';
import ValuesTeamSection from './components/AboutUs/ValuesTeamSection';
import CultureTabs from './components/AboutUs/CultureTabs';

import ContactCollaboration from './components/contactUs/ContactCollaboration';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/Login';
import SignUp from './components/SignUp';

import Error404 from './components/Error404';

function App() {
  return (
    <div className="font-krub">
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Home/>
                  <BrandCarousel />
                  <FindContent/>
                  <CreatorsSection />
                   <CampaignEffort />
                  <ManageChannels/>
                  <UserReview />
                  <WorldwideCommunity/>
                  <FixMeeting />
                </>
              } /> 

               <Route path="/pricing" element={
                <>
                  <PricingHero />
                  <PricingPlan />
                  <SocialNetworks />
                  <PricingCta />
                </>
              } />

               <Route path="/about" element={
                <>
                  <AboutHero/>
                  <AboutRemarkable />
                  <ValuesTeamSection />
                  <CultureTabs />
                </>
              } />

              <Route path="/contact" element={
                <>
                  <ContactCollaboration />
                </>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />

              <Route path ="*" element={<Error404/>} />
            </Routes>
          </main>
          <Footer /> 
        </div>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          theme="colored"
          toastStyle={{
          background: "#FFAF7BD6",
          color: "white",
          borderRadius: "12px",
          fontWeight: "600"
        }}
          />
      </Router>
    </div>
  );
}

export default App;