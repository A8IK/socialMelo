import { useState } from 'react';
import './Faq.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question: 'What is this Instagram Video Downloader?',
      answer: 'Our Instagram Video Downloader is a free online tool that allows you to download Instagram videos in HD quality without watermarks. Simply paste the video URL and get instant downloads.'
    },
    {
      question: 'How do I download Instagram videos with SocialMelo?',
      answer: 'Simply copy the Instagram video URL, paste it into our downloader tool, and click the download button. Your video will be ready in seconds in high quality without any watermarks.'
    },
    {
      question: 'Can I use this Instagram Video Downloader to save videos without watermarks?',
      answer: 'Yes! Our Instagram Video Downloader allows you to save videos without any watermarks. All downloads are clean and in original quality, perfect for personal use or content creation.'
    },
    {
      question: 'Is SocialMelo IG Video Downloader free?',
      answer: 'Yes, SocialMelo IG Video Downloader is completely free to use. There are no hidden fees, subscriptions, or limitations on the number of videos you can download.'
    },
    {
      question: 'Can I use the Instagram Story Downloader on mobile devices?',
      answer: 'Absolutely! Our Instagram Story Downloader works perfectly on all devices including mobile phones, tablets, and desktop computers. Simply access our website from any browser.'
    },
    {
      question: 'Are there any limits on the number of videos I can download?',
      answer: 'No, there are no limits! You can download as many Instagram videos as you want, completely free. Enjoy unlimited downloads without any restrictions.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <h2 className="faq-title">FAQs About Instagram Video Downloader</h2>
          <p className="faq-subtitle">
            Everything you need to know about our Instagram downloader tool
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

export default FAQ;