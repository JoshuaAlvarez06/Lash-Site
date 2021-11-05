import React from "react";
import "./Faq.css";
import { faqDataOne } from "../../data/faqData";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className="faqSection">
      <div className="faqContainer">
        <h1>Frequently Asked Questions</h1>
        <div className="questionsSection">
          <div className="questionContainer">
            {faqDataOne.map((question, index) => {
              return (
                <Accordion
                  ket={index}
                  title={question.question}
                  content={question.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
