import { useEffect } from 'react';

export const useDocumentTitle = (title, description) => {
  useEffect(() => {
    // Set title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = description;
    } 
    else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }
    
  }, [title, description]);
};