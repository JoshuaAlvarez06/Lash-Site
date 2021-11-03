import React from "react";
import "./Faq.css";
import { faqDataOne } from "../../data/faqData";

const Faq = () => {
  return (
    <div className="faqSection">
      <div className="faqContainer">
        <h1>Frequently Asked Questions</h1>
        <div className="questionsSection">
          <div className="questionContainer">
            {faqDataOne.map((question, index) => {
              return (
                <>
                  <div className="wrap">
                    <p>{question.question}</p>
                  </div>
                  <p>{question.answer}</p>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
