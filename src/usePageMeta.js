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
    const canonical = canonicalUrl || `${window.location.origin}${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonical;
      document.head.appendChild(canonicalLink);
    }
  }, [title, description, canonicalUrl, location.pathname]);
};