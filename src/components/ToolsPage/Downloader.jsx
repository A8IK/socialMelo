import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Downloader.css';
import { tabsConfig } from '../config/TabsConfig';
import { usePageMeta } from '../../usePageMeta';
import HowToUse from './HowtoUse';
import FeaturesSection from './FeatureSection';
import FAQ from './Faq';
import API_BASE_URL from '../../config/api';

export default function InstagramDownloader() {
  const navigate = useNavigate();
  const { type } = useParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('video');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const tabs = Object.values(tabsConfig);
  const stats = [
    { value: '10M+', label: 'Downloads' },
    { value: '100%', label: 'Free Forever' },
    { value: 'HD', label: 'Quality' }
  ];

  useEffect(() => {
    if (type && tabsConfig[type]) {
      setActiveTab(type);
    } else if (location.pathname === '/tools/instagram-downloader') {
      setActiveTab('video');
    }
  }, [type, location.pathname]);

  // Set page meta using existing hook
  usePageMeta(
    tabsConfig[activeTab].pageTitle,
    tabsConfig[activeTab].pageDescription
  );

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
     if (tabId === 'video') {
    navigate('/tools/instagram-downloader');
    } else {
      navigate(`/tools/instagram-downloader/${tabId}`);
    }
  };

  const currentTab = tabsConfig[activeTab];

  const isValidInstagramUrl = (url) => {
    const instagramRegex = /^https?:\/\/(www\.)?instagram\.com\/(p|reel|tv|stories)\/[A-Za-z0-9_-]+/;
    return instagramRegex.test(url);
  };

  const handleDownload = async () => {
  console.log('=== FRONTEND DOWNLOAD STARTED ===');
  console.log('URL from state:', url);
  console.log('URL length:', url.length);
  console.log('URL trimmed:', url.trim());
  
  if (!url.trim()) {
    console.log('❌ URL is empty');
    toast.error('Please enter an Instagram URL', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return;
  }

  if (!isValidInstagramUrl(url)) {
    console.log('❌ URL validation failed');
    console.log('URL value:', url);
    toast.error('Please enter a valid Instagram URL', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return;
  }

  console.log('✅ URL validation passed');
  setLoading(true);

  const loadingToast = toast.loading('Fetching download link...', {
    position: "top-right"
  });

  try {
    const requestBody = { url: url.trim() };
    // console.log('📤 Request body:', requestBody);
    // console.log('📤 Request body JSON:', JSON.stringify(requestBody));
    // console.log('📤 API endpoint:', 'http://localhost:9000/api/download/instagram');
    
    const response = await fetch(`${API_BASE_URL}/api/download/instagram`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(requestBody)
    });

    console.log('📥 Response status:', response.status);
    console.log('📥 Response ok:', response.ok);
    console.log('📥 Response headers:', response.headers);

    const result = await response.json();
    console.log('📥 Response data:', result);

    if (!result.success) {
      console.log('❌ API returned success: false');
      throw new Error(result.message || 'Failed to download');
    }

    if (result.data && result.data.downloadUrl) {
      console.log('✅ Download URL received:', result.data.downloadUrl);
      console.log('📦 Media type:', result.data.mediaType);
      
      const link = document.createElement('a');
      link.href = result.data.downloadUrl;
      link.target = '_blank';
      link.download = `instagram_${activeTab}_${Date.now()}`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log('✅ Download triggered');

      toast.update(loadingToast, {
        render: 'Download started successfully! 🎉',
        type: 'success',
        isLoading: false,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => {
        setUrl('');
      }, 1000);
    } else {
      console.log('❌ No download URL in response');
      throw new Error('No download URL received');
    }
    
  } catch (err) {
    console.error('=== FRONTEND ERROR ===');
    console.error('Error type:', err.constructor.name);
    console.error('Error message:', err.message);
    console.error('Full error:', err);
    
    toast.update(loadingToast, {
      render: err.message || 'Failed to download. Please try again.',
      type: 'error',
      isLoading: false,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  } finally {
    setLoading(false);
  }
};

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      handleDownload();
    }
  };

  return (
    <>
      {/* Downloader Section */}
      <div className="container8">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>

        <div className="wrapper">
          <h1 className="header-title">
            Free Instagram {currentTab.label} Downloader
          </h1>

          <div className="card">
            <div className="tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}>
                  <img 
                    src={tab.icon} 
                    alt={tab.label}
                    className="tab-icon"
                  />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="input-section">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={currentTab.placeholder}
                className="url-input"
                disabled={loading}/>
              <p className="privacy-text">
                © Your data is safe, private and secure
              </p>
            </div>

            <button 
              className="download-button"
              onClick={handleDownload}
              disabled={loading}
              style={{
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}>
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Downloading...
                </>
              ) : (
                'Download'
              )}
            </button>

            <p className="description">
              {currentTab.description}
            </p>

            <div className="stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-value">
                    {stat.value}
                  </div>
                  <div className="stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How To Use Section */}
      <HowToUse activeTab={activeTab} />

      {/* Features Section */}
      <FeaturesSection activeTab={activeTab} />

      {/* FAQ Section */}
      <FAQ activeTab={activeTab} />
    </>
  );
}