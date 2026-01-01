import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageMeta = (title, description = null, canonicalUrl = null) => {
  const location = useLocation();

  useEffect(() => {
    // Set title
    document.title = title;
    
    // Set description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
      
      // Set OG title
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      } else {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        ogTitle.content = title;
        document.head.appendChild(ogTitle);
      }
      
      // Set OG description
      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      } else {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        ogDescription.content = description;
        document.head.appendChild(ogDescription);
      }
    }

    // Set canonical URL
    let canonical;
    
    if (canonicalUrl) {
      // If canonicalUrl is explicitly provided, use it
      canonical = canonicalUrl;
    } else {
      const pathname = location.pathname;
      
      // For all downloader tools - keep base URL for main/video tabs
      if (pathname === '/tools/instagram-downloader/video' || pathname === '/tools/instagram-downloader') {
        canonical = `${window.location.origin}/tools/instagram-downloader`;
      } 
      else if (pathname === '/tools/snapchat-downloader' || pathname === '/tools/snapchat-video-downloader') {
        canonical = `${window.location.origin}/tools/snapchat-downloader`;
      } 
      else if (pathname === '/tools/youtube-downloader' || pathname === '/tools/youtube-video-downloader') {
        canonical = `${window.location.origin}/tools/youtube-downloader`;
      } 
      else if (pathname === '/tools/facebook-downloader' || pathname === '/tools/facebook-video-downloader') {
        canonical = `${window.location.origin}/tools/facebook-downloader`;
      } 
      else if (pathname === '/tools/tiktok-downloader' || pathname === '/tools/tiktok-video-downloader') {
        canonical = `${window.location.origin}/tools/tiktok-downloader`;
      } 
      else if (pathname === '/tools/twitter-downloader' || pathname === '/tools/twitter-video-downloader') {
        canonical = `${window.location.origin}/tools/twitter-downloader`;
      } 
      else {
        // For all other pages/tabs, use the current pathname
        canonical = `${window.location.origin}${pathname}`;
      }
    }
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonical;
      document.head.appendChild(canonicalLink);
    }
    
    // console.log('📌 Canonical URL set to:', canonical);
  }, [title, description, canonicalUrl, location.pathname]);
};