import React, { useRef, useState } from "react";
import "./titleWindow.css";
import logo from "../../img/logo.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import Userfront, {
  SignupForm,
  LoginForm,
  PasswordResetForm,
  // LogoutButton,
} from "@userfront/toolkit/react";
import emailjs from "@emailjs/browser";
import { LogoutButton } from "../logout/Logout.tsx";
import { Navbar } from "../navbar/Navbar.tsx";
Userfront.init("demo1234");

export const TitleWindow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_eqfr7v4";
    const templateId = "template_yhvkzsq";
    const publicKey = "4tYOIapCZqQvppJkO";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Онлайн курсы",
      telegram: telegram,
      phone: phone,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        // setName("");
        // setEmail("");
        // setTelegram("");
        // setPhone("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_eqfr7v4", "template_yhvkzsq", form.current, {
        publicKey: "4tYOIapCZqQvppJkO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="titleWindow">
      <div className="titleWindow_shadow">
        <div className="container">
          <div className="logo">
            <div className="logo_content">
              <img src={logo} alt="Logo" className="logo_img" />
              <div className="logo_title">
                Онлайн <br /> курсы
              </div>
            </div>
            <Navbar />
          </div>
          <div className="titleWindow_middle order">
            <div className="titleWindow_description newSkills order_el">
              <div className="newSkills_skill">
                воплотите идеи в жизнь, создавая <br />
                детализированные 3d-объекты и сцены
              </div>
              <div className="newSkills_skill">
                постройте карьеру в индустрии геймдева, кино
                <br />
                или рекламе
              </div>
              <div className="newSkills_skill">
                станьте универсальным специалистом с<br />
                востребованным набором навыков
              </div>
              <div className="newSkills_skill">
                научитесь работать с востребованными
                <br />
                инструментами
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              id="order_form order_el"
              className="order_form order_el"
            >
              <h3 className="h3Form">
                Получить полную <br /> программу обучения
              </h3>
              <input
                type="text"
                placeholder="ваше имя"
                name="user_name"
                className="inputForm"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="e-mail"
                name="user_email"
                className="inputForm"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="inputForm"
                placeholder="+7 (999) 999-99f-99"
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="text"
                placeholder="telegram"
                className="inputForm"
                onChange={(e) => setTelegram(e.target.value)}
              />
              <input type="submit" value="Send" className="btnForm" />
            </form>
          </div>
          <div className="titleWindow_footer">
            <div className="award">
              <div className="award_title">Портфолио</div>
              <div className="award_text">из 20 работ</div>
            </div>
            <div className="award">
              <div className="award_title">Стажировка</div>
              <div className="award_text">в TDS Virtual Production</div>
            </div>
            <div className="award">
              <div className="award_title">Практика</div>
              <div className="award_text">200+ часов опыта</div>
            </div>
            <div className="award">
              <div className="award_title">Сертификат</div>
              <div className="award_text">об окончании курса</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// class LogoutButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       disabled: !Userfront.tokens.accessToken,
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(event) {
//     event.preventDefault();
//     Userfront.logout();
//   }

//   render() {
//     return (
//       <button
//         id="logout-button"
//         onClick={this.handleClick}
//         disabled={this.state.disabled}
//       >
//         Log out
//       </button>
//     );
//   }
// }
