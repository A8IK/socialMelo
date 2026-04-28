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

import PartnersHero from './components/partnersPage/PartnersHero';
import WhyPartner from './components/partnersPage/WhyPartner';
import WaysToCollab from './components/partnersPage/WaysToCollab';
import SuccesStories from './components/partnersPage/SuccesStories';
import PartnershipPlan from './components/partnersPage/PartnershipPlan';
import PowerfulTools from './components/partnersPage/PowerfulTools';

import WriteForUs from './components/WriteForUs';

import Downloader from './components/ToolsPage/Downloader';

import ContactCollaboration from './components/contactUs/ContactCollaboration';

import SnapDownloader from './components/ToolsPage/SnapDownloader';

import YoutubeDownloader from './components/ToolsPage/YoutubeDownloader';
import FacebookDownloader from './components/ToolsPage/FacebookDownloader';

import ScrollToTop from './components/ScrollToTop';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './components/Login';
import SignUp from './components/SignUp';

import AuthCallback from './AuthCallback';

import AdminRoute from './components/admin/AdminRoute';
import AdminDashboard from './components/admin/AdminDashboard';

import ProfileRoute from './components/profile/ProfileRoute';
import ProfilePage from './components/profile/ProfilePage';

import Error404 from './components/Error404';
import TiktokDownloader from './components/ToolsPage/TikTokDownloader';
import TwitterDownloader from './components/ToolsPage/TwitterDownloader';
import PartnersProcess from './components/partnersPage/PartnersProcess';
import Resources from './components/partnersPage/Resources';
import TrustedLeaders from './components/partnersPage/TrustedLeaders';
import SeamlessIntegrations from './components/partnersPage/SeamlessIntegration';
import PartnersFaq from './components/partnersPage/PartnersFaq';
import TransformPartnership from './components/partnersPage/TransformPartnership';

function App() {
  return (
    <div className="font-krub">
      <Router>
        <ScrollToTop />
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

              <Route path="/partners" element={
                <>
                  <PartnersHero />
                  <BrandCarousel/>
                  <WhyPartner/>
                  <PartnersProcess/>
                  <WaysToCollab/>
                  <SuccesStories/>
                  <PowerfulTools/>
                  <PartnershipPlan/>
                  <Resources/>
                  <TrustedLeaders/>
                  <SeamlessIntegrations/>
                  <PartnersFaq/>
                  <TransformPartnership/>
                </>
              } />

              <Route path="/tools/instagram-downloader" element={<Downloader />} />

              <Route path="/tools/instagram-downloader/:type" element={<Downloader />} />

              <Route path="/tools/snapchat-downloader" element={
                  <>
                    <SnapDownloader /> 
                  </>
              } />

                <Route path="/tools/snapchat-audio-downloader" element={
                  <>
                    <SnapDownloader />
                  </>
                } />
              
                <Route path="/tools/snapchat-video-downloader" element={
                  <>
                    <SnapDownloader />
                  </>
                } />

                <Route path="/tools/youtube-downloader" element={
                  <>
                    <YoutubeDownloader /> 
                  </>
                } />

                <Route path="/tools/youtube-video-downloader" element={
                  <>
                    <YoutubeDownloader />
                  </>
                } />

                <Route path="/tools/youtube-audio-downloader" element={
                  <>
                    <YoutubeDownloader />
                  </>
                } />

                <Route path="/tools/facebook-downloader" element={
                  <>
                    <FacebookDownloader /> 
                  </>
                } />

                <Route path="/tools/facebook-video-downloader" element={
                  <>
                    <FacebookDownloader />
                  </>
                } />

                <Route path="/tools/facebook-audio-downloader" element={
                  <>
                    <FacebookDownloader />
                  </>
                } />

                <Route path="/tools/tiktok-downloader" element={
                  <>
                    <TiktokDownloader /> 
                  </>
                } />
                <Route path="/tools/tiktok-video-downloader" element={
                  <>
                    <TiktokDownloader />
                  </>
                } />

                <Route path="/tools/tiktok-audio-downloader" element={
                  <>
                    <TiktokDownloader />
                  </>
                } />

                <Route path="/tools/twitter-downloader" element={
                  <>
                    <TwitterDownloader /> 
                  </>
                } />
                <Route path="/tools/twitter-video-downloader" element={
                  <>
                    <TwitterDownloader/>
                  </>
                } />
                <Route path="/tools/twitter-audio-downloader" element={
                  <>
                    <TwitterDownloader />
                  </>
                } />
                
                <Route path = "/write-for-us" element={
                  <>
                    <WriteForUs/>
                  </>
                }/>

              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />

              <Route path="/auth/callback" element={<AuthCallback />} />

              <Route path="/admin" element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } />

              <Route path="/profile" element={
                <ProfileRoute>
                  <ProfilePage />
                </ProfileRoute>
              } />

              <Route path="/profile/:userId" element={
                <ProfileRoute>
                  <ProfilePage />
                </ProfileRoute>
              } />

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