import { useState } from 'react';
import './SnapFaq.css';

const SnapFaq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question: 'Is SocialMelo really free?',
      answer: 'Yes. No catches. No fine print.'
    },
    {
      question: 'Do I need to install anything?',
      answer: 'Nope. Browser-only. Easy.'
    },
    {
      question: 'Can I pick video quality?',
      answer: 'Yep. From 720p all the way up to 4K.'
    },
    {
      question: 'How fast is the download?',
      answer: 'Usually seconds, depending on your internet.'
    },
    {
      question: 'Is it safe?',
      answer: '100%. No malware, no shady stuff.'
    },
    {
      question: 'Can I use this on iPhone or Android?',
      answer: 'Yes. Works in Safari, Chrome, or any browser.'
    },
    {
      question: 'Is downloading Snapchat videos legal?',
      answer: 'For personal use, yes. Just don’t repost without respecting copyrights.'
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