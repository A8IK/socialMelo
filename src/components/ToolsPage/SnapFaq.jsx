import { useState } from 'react';
import './SnapFaq.css';

const SnapFaq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question: 'What is SocialMelo [Platform] Video Downloader?',
      answer: 'It’s a free online tool that allows you to download [Platform] videos in MP4 or MP3 formats.'
    },
    {
      question: 'How long does it take to download a video?',
      answer: 'Most downloads are complete in seconds, depending on internet speed'
    },
    {
      question: 'How do I download [Platform] videos on Android?',
      answer: 'Copy the video link, paste it in SocialMelo, and tap download.'
    },
    {
      question: 'How do I download [Platform] videos on iPhone?',
      answer: 'Use Safari, paste the video link in SocialMelo, and save directly to your device.'
    },
    {
      question: 'Can I choose video quality?',
      answer: 'Yes, select from resolutions like 720p, 1080p, 2K, or 4K before downloading.'
    },
    {
      question: 'Is it safe to download videos from [Platform]?',
      answer: 'Yes, SocialMelo is secure and does not require installation.'
    },
    {
      question: 'Is it legal to download [Platform] videos?',
      answer: 'Downloading videos for personal use is legal. Respect copyright when sharing or publishing.'
    },
    {
      question: 'Can I download videos for free?',
      answer: 'Absolutely! SocialMelo is 100% free with unlimited downloads.'
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <h2 className="faq-title">FAQs About Snapchat Video Downloader</h2>
          <p className="faq-subtitle">
            Everything you need to know about our Snapchat downloader tool
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SnapFaq;