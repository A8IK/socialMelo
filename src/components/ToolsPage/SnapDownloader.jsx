import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SnapDownloader.css';
import { usePageMeta } from '../../usePageMeta';
import { snapConfig } from '../config/SnapConfig';
import SnapMannual from './SnapMannual';
import SnapFeature from './SnapFeature';
import SnapFaq from './SnapFaq';

export default function SnapDownloader() {
  const navigate = useNavigate();
  const [url, setUrl] = useState('');
   const { type } = useParams();
  const [format, setFormat] = useState('mp4');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (type === 'audio') {
      setFormat('mp3');
    } else if (type === 'video') {
      setFormat('mp4');
    } else {
      setFormat('mp4');
    }
  }, [type]);

  const currentConfig = snapConfig[format];

  usePageMeta(
    currentConfig.pageTitle,
    currentConfig.pageDescription
  );

  const stats = [
    { value: '10M+', label: 'Downloads' },
    { value: '100%', label: 'Free Forever' },
    { value: 'HD', label: 'Quality' }
  ];

  const handleFormatChange = (newFormat) => {
  setFormat(newFormat);
  
  if (newFormat === 'mp4') {
    navigate('/tools/snapchat-video-downloader');
  } else if (newFormat === 'mp3') {
    navigate('/tools/snapchat-audio-downloader');
  }
}

  const isValidSnapchatUrl = (url) => {
    const snapchatRegex = /^https?:\/\/(www\.)?(snapchat\.com|story\.snapchat\.com|t\.snapchat\.com)\/.+/;
    return snapchatRegex.test(url);
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      toast.error('Please enter a Snapchat URL', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    if (!isValidSnapchatUrl(url)) {
      toast.error('Please enter a valid Snapchat URL', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setLoading(true);

    const loadingToast = toast.loading('Fetching download link...', {
      position: "top-right"
    });

    try {
      const response = await fetch('http://localhost:9000/api/download/snapchat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ url: url, format: format })
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || 'Failed to download');
      }

      if (result.data.downloadUrl) {
        const link = document.createElement('a');
        link.href = result.data.downloadUrl;
        link.target = '_blank';
        link.download = `snapchat_${format}_${Date.now()}`;
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

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
      }
      
    } catch (err) {
      console.error('Download error:', err);
      
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
      <div className="snap-downloader-container">
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

        <div className="snap-wrapper">
          <h1 className="snap-header-title">
            {currentConfig.downloaderTitle}
          </h1>

          <p className="snap-header-subtitle">
            {currentConfig.downloaderSubtitle}
          </p>

          <div className="snap-card">
            <div className="snap-input-section">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Paste Snapchat Video URL Here"
                className="snap-url-input"
                disabled={loading}/>
              <p className="snap-privacy-text">
                🔒 Your downloads are private and secure
              </p>
            </div>

            <div className="snap-format-buttons">
              <button
                onClick={() => handleFormatChange('mp4')}
                className={`snap-format-button ${format === 'mp4' ? 'active' : ''}`}
                disabled={loading}>
                MP4 Video
              </button>
              <button
                onClick={() => handleFormatChange('mp3')}
                className={`snap-format-button ${format === 'mp3' ? 'active' : ''}`}
                disabled={loading}>
                MP3 Audio
              </button>
            </div>

            <button 
              className="snap-download-button"
              onClick={handleDownload}
              disabled={loading}
              style={{
                opacity: loading ? 0.7 : 1,
                cursor: loading ? 'not-allowed' : 'pointer'
              }}>
              {loading ? (
                <>
                  <span className="snap-spinner"></span>
                  Downloading...
                </>
              ) : (
                'Download'
              )}
            </button>

            <div className="snap-stats">
              {stats.map((stat, index) => (
                <div key={index} className="snap-stat-item">
                  <div className="snap-stat-value">
                    {stat.value}
                  </div>
                  <div className="snap-stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SnapMannual format={format} />
      <SnapFeature format={format} />
      <SnapFaq format = {format} />
    </>
  );
}