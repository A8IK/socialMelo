const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/instagram', async (req, res) => {
  try {
    console.log('=== INSTAGRAM DOWNLOAD REQUEST ===');
    const { url } = req.body;
    
    if (!url || url.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Instagram URL is required'
      });
    }
    
    const trimmedUrl = url.trim();
    
    // Remove query parameters
    const cleanUrl = trimmedUrl.split('?')[0];
    console.log('Clean URL:', cleanUrl);
    
    // Extract shortcode
    const shortcodeMatch = cleanUrl.match(/\/(p|reel|tv|stories)\/([A-Za-z0-9_-]+)/);
    
    if (!shortcodeMatch) {
      return res.status(400).json({
        success: false,
        message: 'Could not extract post code from URL'
      });
    }
    
    const shortcode = shortcodeMatch[2];
    console.log('✅ Extracted shortcode:', shortcode);
    
    // Call Instagram120 API
    console.log('📡 Calling /mediaByShortcode endpoint...');
    
    const options = {
      method: 'POST',
      url: 'https://instagram120.p.rapidapi.com/api/instagram/mediaByShortcode',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'instagram120.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      },
      data: {
        shortcode: shortcode
      }
    };
    
    const response = await axios.request(options);
    console.log('✅ API Response Status:', response.status);
    
    // Response is an array of carousel items
    if (!Array.isArray(response.data) || response.data.length === 0) {
      console.log('❌ Invalid response structure or empty array');
      return res.status(404).json({
        success: false,
        message: 'No media found for this post'
      });
    }
    
    console.log(`📦 Found ${response.data.length} media item(s)`);
    
    // Get the first item (or you could return all items for carousel)
    const firstItem = response.data[0];
    
    // Extract download URL
    let downloadUrl = null;
    let thumbnail = null;
    let mediaType = 'photo';
    
    // Check if it's a video (urls array will have video URL)
    if (firstItem.urls && firstItem.urls.length > 0) {
      const urlObj = firstItem.urls[0];
      
      // Check file extension
      if (urlObj.extension === 'mp4' || urlObj.name.includes('MP4')) {
        downloadUrl = urlObj.url;
        mediaType = 'video';
        console.log('🎥 Video detected');
      } else {
        downloadUrl = urlObj.url;
        mediaType = 'photo';
        console.log('📷 Photo detected');
      }
    }
    
    // Fallback to pictureUrl if no URL found
    if (!downloadUrl && firstItem.pictureUrl) {
      downloadUrl = firstItem.pictureUrl;
      mediaType = 'photo';
      console.log('📷 Using pictureUrl as fallback');
    }
    
    // Set thumbnail
    thumbnail = firstItem.pictureUrl || downloadUrl;
    
    if (!downloadUrl) {
      console.log('❌ Could not extract download URL');
      return res.status(404).json({
        success: false,
        message: 'Could not extract download URL from response'
      });
    }
    
    console.log('✅ Success!');
    console.log('Download URL:', downloadUrl);
    console.log('Media Type:', mediaType);
    
    // Return response with all carousel items info
    const allMediaUrls = response.data.map(item => ({
      url: item.urls?.[0]?.url || item.pictureUrl,
      type: item.urls?.[0]?.extension === 'mp4' ? 'video' : 'photo',
      thumbnail: item.pictureUrl
    }));
    
    res.json({
      success: true,
      data: {
        downloadUrl: downloadUrl,
        thumbnail: thumbnail,
        mediaType: mediaType,
        caption: firstItem.meta?.title || 'Instagram Media',
        username: firstItem.meta?.username,
        likeCount: firstItem.meta?.likeCount,
        commentCount: firstItem.meta?.commentCount,
        // Include all media if it's a carousel
        allMedia: response.data.length > 1 ? allMediaUrls : undefined
      }
    });
    
  } catch (error) {
    console.error('=== ERROR ===');
    console.error('Error message:', error.message);
    
    if (error.response) {
      console.error('API Status:', error.response.status);
      console.error('API Error:', error.response.data);
      
      return res.status(error.response.status).json({
        success: false,
        message: error.response.data?.message || 'Instagram API error',
        error: process.env.NODE_ENV === 'development' ? error.response.data : undefined
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Failed to download Instagram content',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;