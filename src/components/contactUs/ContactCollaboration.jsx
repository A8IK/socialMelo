import React, { useState } from 'react';
import './ContactCollaboration.css';
import { usePageMeta } from '../../usePageMeta';

const ContactCollaboration = () => {
  usePageMeta(
    'Contact SocialMelo | Influencer Marketing Company', 
    'Have questions or want to collaborate? Reach out to SocialMelo, the global influencer marketing company. Email us at hello@socialmelo.io today'
  );
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.name || !formData.contact || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    
    try {
      // Here you would integrate with your backend/email service
      // Example integrations: EmailJS, Formspree, Netlify Forms, or custom backend
      
      console.log('Form submitted:', formData);
      
      // Example with EmailJS (you'd need to install and configure):
      // await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
      
      alert('Message sent successfully!');
      setFormData({
        name: '',
        contact: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="cosmos-contact-collaboration-main-container">
      <div className="cosmos-contact-content-wrapper">
        
        {/* Rotating Get In Touch Badge */}
        <div className="cosmos-rotating-badge">
          <div className="cosmos-rotating-text">
            <svg width="120" height="120" viewBox="0 0 120 120" className="cosmos-circular-text">
              <defs>
                <path
                  id="circle-path"
                  d="M 60, 60 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text className="cosmos-rotating-letters">
                <textPath href="#circle-path">
                 - CONTACT - GET IN TOUCH - CONTACT - 
                </textPath>
              </text>
            </svg>
            <div className="cosmos-play-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="cosmos-contact-main-content">
          
          {/* Left Side - Text Content */}
          <div className="cosmos-contact-text-section">
            <h1 className="cosmos-contact-main-heading">
              Come <span className="cosmos-gradient-text">collaborate</span><br />
              with <span className="cosmos-gradient-text">SOCIAMELO</span>
            </h1>
            
            <p className="cosmos-contact-description">
              Need support or have a question? Send us a message, 
              and we'll be in touch. Reach out to us at:
            </p>
            
            <a href="mailto:hello@socialmelo.io" className="cosmos-email-link">
              hello@socialmelo.io
            </a>
          </div>

          {/* Right Side - Contact Form */}
          <div className="cosmos-contact-form-section">
            <div className="cosmos-form-container">
              <h3 className="cosmos-form-heading">Say hello!</h3>
              
              <div className="cosmos-contact-form">
                <div className="cosmos-form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="cosmos-form-input"
                  />
                </div>
                
                <div className="cosmos-form-group">
                  <input
                    type="tel"
                    name="contact"
                    placeholder="Enter contact number"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="cosmos-form-input"
                  />
                </div>
                
                <div className="cosmos-form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="cosmos-form-input"
                  />
                </div>
                
                <div className="cosmos-form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter message title/subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="cosmos-form-input"
                  />
                </div>
                
                <div className="cosmos-form-group">
                  <textarea
                    name="message"
                    placeholder="Write a message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="cosmos-form-textarea"
                    rows="5"
                  ></textarea>
                </div>
                
                <button onClick={handleSubmit} className="cosmos-submit-button">
                  Submit
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCollaboration;