import React, { useState } from "react";
import "./FAQ.css";
import plus from "../../img/plus.png";
import minus from "../../img/minus.png";
// function FAQ() {
//   return (

//     <div className="FAQ">
//         <h2>часто задаваемые вопросы</h2>
//         <span className="FAQ_question">что нужно для обучения?</span>
//         <span className="FAQ_question">кто проверяет задания на курсе 3D-художник?</span>
//         <span className="FAQ_question">как проходит обучение?</span>
//         <span className="FAQ_question">на какой перод предоставлется доступ к курсу?</span>
//         <span className="FAQ_question">как проходит стажировка?</span>
//         <span className="FAQ_question">помогаете ли вы с трудоустройством?</span>
//         <span className="FAQ_question">какие есть варианты оплаты обучения?</span>
//         <span className="FAQ_question">какая ваша политика возврата денег за курсы?</span>
//         <span className="FAQ_question">как быть, если я пропускаю уроки и не успеваю учиться?</span>
//         <span className="FAQ_question">мне 15 лет. Могу ли я учиться у вас? и есть ли у вас возрастные ограничения для студентов</span>
//         <span className="FAQ_question">я могу подарить обучения дизайну близкому человеку?</span>
//         <span className="FAQ_question">какие курсы мне ещ могут быть интересны?</span>
//         <span className="FAQ_question">как стать 3d-дизайнером?</span>
//         <span className="FAQ_question">как стать 3d-художником?</span>
//         <span className="FAQ_question">как сделать 3d-анимацию?</span>
//         <span className="FAQ_question">как стать 3d-художником?</span>
//     </div>
//   );
// }
// export default FAQ;

const FAQ = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.open || false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="FAQ_container">
      <dt aria-expanded={isOpen ? "true" : "false"} onClick={toggle} className="FAQ_question">
        <div>{faq.question}</div>
        <img
          src={`${isOpen ? minus : plus}`}
          alt={isOpen ? "Collapse" : "Expand"}
          width="20"
          height="20"
        />
      </dt>
      <dd className={!isOpen ? "hidden FAQ_answer" : "FAQ_answer"}>
        {faq.answer.map((text) => (
          <div>
            {text}
            <br />
          </div>
        ))}
        {/* {faq.answer} */}
      </dd>
    </div>
  );
};

export const FAQs = ({ faqs }) => {
  return (
    <dl className="FAQ_main">
      {faqs.map((faq, index) => (
        <FAQ faq={faq} key={index} />
      ))}
    </dl>
  );
};
