import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqList = [
    {
      question:
        'How does an investor gain access to MF Utility?',
      answer:
        'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    {
      question:
        'Will investors be able to have multiple Common Account Numbers?',
      answer:
        'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
    {
      question:
        'How does an investor gain access to MF Utility?',
      answer:
        'Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container faq-container">

        {/* Heading */}
        <h2 className="faq-section-title">
          FAQ
        </h2>

        {/* FAQ List */}
        <div className="faq-accordion-list">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item ${
                  isOpen ? 'open' : ''
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">
                    {item.question}
                  </span>

                  <span
                    className={`faq-toggle-icon ${
                      isOpen ? 'active' : ''
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <svg
                        width="13"
                        height="2"
                        viewBox="0 0 13 2"
                        fill="none"
                      >
                        <path
                          d="M1 1H12"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <path
                          d="M6.5 1V12"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1 6.5H12"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="faq-answer-panel">
                    <p className="faq-answer-text">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;