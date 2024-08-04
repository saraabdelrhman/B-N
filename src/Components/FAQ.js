import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function FAQ() {
  const faqs = [
    {
      question: "What is the return policy?",
      answer: "You can return any item within 30 days of purchase if it is unused and in its original packaging."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping costs will vary based on your location."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Yes, all of our products are cruelty-free and not tested on animals."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order has been shipped, you will receive an email with a tracking number and a link to track your package."
    },

  ];

  return (
    <div className="container fqa mt-5">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                {faq.question}
              </button>
            </h2>
            <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
