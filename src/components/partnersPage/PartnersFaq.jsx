import { useState, useEffect } from 'react';
import './partnersFaq.css';

const PartnersFaq = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.partners-faq-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const faqs = [
    {
      question: 'How does the platform matching algorithm work?',
      answer: "Our intelligent matching algorithm connects brands with creators based on multiple factors, including audience demographics, engagement rates, content style, niche expertise, and campaign objectives. The system analyzes historical performance data and creator profiles to recommend the best partnerships for your brand's specific goals."
    },
    {
      question: 'Who can become a SocialMelo Creator?',
      answer: 'To become a SocialMelo Creator, you must be at least 18 years old and live in the USA, UK, Germany, Australia, or Canada. You should have the skills to produce high-quality video content. Having an active presence on TikTok, Instagram, YouTube, or Amazon is a plus, as it helps you earn additional income through our platform.'
    },
    {
      question: 'What types of businesses can benefit from SocialMelo?',
      answer: "SocialMelo works with businesses of all sizes—from emerging startups to established enterprises—across various industries including e-commerce, beauty, fashion, tech, food & beverage, and lifestyle brands. Whether you're launching a new product or scaling an existing campaign, our platform adapts to your needs."
    },
    {
      question: 'How do you ensure creator quality and authenticity?',
      answer: "We maintain strict vetting standards for all creators on our platform. This includes verification of follower authenticity, engagement rate analysis, content quality reviews, and background checks. We also monitor creator performance and collect brand feedback to ensure consistently high standards."
    },
    {
      question: 'Can I track ROI and attribution for my campaigns?',
      answer: "Yes! Our comprehensive analytics dashboard provides real-time tracking of campaign performance, including reach, engagement, conversions, and ROI metrics. You'll receive detailed attribution reports showing exactly how each creator partnership impacts your business results."
    },
    {
      question: 'What support and training do you provide?',
      answer: "SocialMelo offers dedicated account management, onboarding training for both brands and creators, best practice guides, campaign optimization support, and responsive customer service. We're committed to helping you succeed at every stage of your partnership journey."
    },
    {
      question: 'Is there a minimum contract period?',
      answer: 'No minimum contract is required. You can start with a single campaign or opt for ongoing partnerships. Our flexible pricing model allows you to scale up or down based on your needs and budget.'
    },
  ];

  return (
    <section className="partners-faq-section">
      <div className="partners-faq-container">
        {/* Header */}
        <div className={`partners-faq-header ${isVisible ? 'partners-faq-fade-in' : ''}`}>
          <h2 className="partners-faq-title">
            Frequently Asked <span className="partners-faq-gradient">Questions</span>
          </h2>
          <p className="partners-faq-subtitle">
            Everything you need to know about our partnership platform
          </p>
        </div>

        {/* FAQ Items */}
        <div className="partners-faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`partners-faq-item ${openIndex === index ? 'partners-faq-active' : ''} ${isVisible ? 'partners-faq-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                className="partners-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className={`partners-faq-icon ${openIndex === index ? 'partners-faq-open' : ''}`}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="partners-faq-answer">
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

export default PartnersFaq;