const express = require('express');
const router = express.Router();

router.post('/instagram', async (req, res) => {
  try {
    const { url } = req.body;
    
    if (!url) {
      return res.status(400).json({
        success: false,
        message: 'Instagram URL is required'
      });
    }
    
    // Updated regex to handle URLs with username
    const instagramRegex = /^https?:\/\/(www\.)?instagram\.com\/.*\/(p|reel|tv|stories)\/[A-Za-z0-9_-]+/;
    if (!instagramRegex.test(url)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Instagram URL'
      });
    }

    // Extract shortcode from URL
    const shortcodeMatch = url.match(/\/(p|reel|tv|stories)\/([A-Za-z0-9_-]+)/);
    if (!shortcodeMatch) {
      return res.status(400).json({
        success: false,
        message: 'Could not extract post ID from URL'
      });
    }
    
    const shortcode = shortcodeMatch[2]; // This will be "DPbyxSeAE86"
    
    console.log('Extracted shortcode:', shortcode);
    
    // Call Instagram120 API
    const response = await fetch('https://instagram120.p.rapidapi.com/api/instagram/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'instagram120.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      },
      body: JSON.stringify({
        username: 'instagram', // You can extract this from URL if needed
        maxId: ''
      })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', response.status, errorText);
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    console.log('API Response:', JSON.stringify(data, null, 2));
    
    // Extract download URL from response
    let downloadUrl = null;
    let thumbnail = null;
    
    if (data && data.data && data.data.items) {
      const items = data.data.items;
      if (items.length > 0) {
        const item = items[0];
        
        // For videos/reels
        if (item.video_versions && item.video_versions.length > 0) {
          downloadUrl = item.video_versions[0].url;
        }
        // For images
        else if (item.image_versions2 && item.image_versions2.candidates) {
          downloadUrl = item.image_versions2.candidates[0].url;
        }
        
        // Thumbnail
        if (item.image_versions2 && item.image_versions2.candidates) {
          thumbnail = item.image_versions2.candidates[0].url;
        }
      }
    }
    
    if (!downloadUrl) {
      return res.status(404).json({
        success: false,
        message: 'Could not find download URL',
        debug: data
      });
    }
    
    res.json({
      success: true,
      data: {
        downloadUrl: downloadUrl,
        thumbnail: thumbnail,
        title: 'Instagram Media'
      }
    });
    
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to download Instagram content',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;