import React, { useState } from "react";
import "./titleWindow.css";
import logo from "../../img/logo.png";

export const TitleWindow = () => {
  return (
    <div className="titleWindow">
      <div className="titleWindow_shadow">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" className="logo_img" />
            <div className="logo_title">
              Онлайн <br /> курсы
            </div>
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
            <form action="" className="order_form order_el">
              <h3 className="h3Form">
                Получить полную <br /> программу обучения
              </h3>
              <input type="text" placeholder="ваше имя" className="inputForm" />
              <input type="text" placeholder="e-mail" className="inputForm" />
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                className="inputForm"
                placeholder="+7 (999) 999-99-99"
              />
              <input type="text" placeholder="telegram" className="inputForm" />
              <button type="submit" className="btnForm">
                Получить
              </button>
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
