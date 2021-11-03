import React from "react";
import "./Faq.css";
import { faqDataOne } from "../../data/faqData";

const Faq = () => {
  const clickHandler = (btnId, answerId) => {
    if (
      document
        .getElementById(`${btnId}`)
        .classList.contains("accordionBtnActive")
    ) {
      console.log("Removing accordionBtnActive class");
      document
        .getElementById(`${btnId}`)
        .classList.remove("accordionBtnActive");
    }
    if (
      document
        .getElementById(`${answerId}`)
        .classList.contains("accordionAnswerActive")
    ) {
      console.log("Removing accordionAnswerActive class");
      document
        .getElementById(`${answerId}`)
        .classList.remove("accordionAnswerActive");
    }

    if (
      !document
        .getElementById(`${btnId}`)
        .classList.contains("accordionBtnActive")
    ) {
      console.log("Adding accordionBtnActive class");
      document.getElementById(`${btnId}`).classList.add("accordionBtnActive");
    }
    if (
      !document
        .getElementById(`${answerId}`)
        .classList.contains("accordionAnswerActive")
    ) {
      console.log("Adding accordionAnswerActive class");
      document
        .getElementById(`${btnId}`)
        .classList.add("accordionAnswerActive");
    }
  };

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
