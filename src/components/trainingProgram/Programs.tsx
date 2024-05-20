import React, { useState } from "react";
import "./Programs.css";
import plus from "../../img/plus.png";
import minus from "../../img/minus.png";

const Program = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.open || false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="program">
      <dt
        aria-expanded={isOpen ? "true" : "false"}
        onClick={toggle}
        className="program_question"
      >
        <div className="program_title">
          {faq.question.map((text) => (
            <div>
              {text}
              <br />
            </div>
          ))}
        </div>
        <img
          src={`${isOpen ? minus : plus}`}
          alt={isOpen ? "Collapse" : "Expand"}
          width="40"
          height="40"
        />
      </dt>
      <dd className={!isOpen ? "hidden program_answer" : "program_answer"}>
        <div className="program_inner">
          <div className="program_time">{faq.time}</div>
          <div className="program_text">
            <div className="program_desc">
              {faq.desc.map((text) => (
                <div>
                  {text}
                  <br />
                  <br />
                </div>
              ))}
            </div>
            <div className="program_content">
              {faq.content.map((text) => (
                <div>
                  {text}
                  <br />
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </dd>
    </div>
  );
};

export const Programs = ({ faqs }) => {
  return (
    <dl>
      {faqs.map((faq, index) => (
        <Program faq={faq} key={index} />
      ))}
    </dl>
  );
};
