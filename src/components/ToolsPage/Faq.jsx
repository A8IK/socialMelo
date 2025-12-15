import { useState } from 'react';
import './Faq.css';
import { tabsConfig } from '../config/TabsConfig';

const FAQ = ({ activeTab = 'video' }) => {
  const [openIndex, setOpenIndex] = useState(-1);
  const faqs = tabsConfig[activeTab].faqs;
  const tabLabel = tabsConfig[activeTab].label;

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <h2 className="faq-title">
            FAQs About Instagram {tabLabel} Downloader
          </h2>
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