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
                  <FindContent/>
                  <CreatorsSection />
                   <CampaignEffort />
                  <ManageChannels/>
                  <UserReview />
                  <WorldwideCommunity/>
                  <FixMeeting />
                </>
              } /> 
            </Routes>
          </main>
          <Footer /> 
        </div>
      </Router>
    </div>
  );
}

export default App;