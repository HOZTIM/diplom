import React, { useState } from "react";
import "./career.css";
import leaf from "../../img/leaf.png";
import modelHuman from "../../img/modelHuman.png";
import modelFigure from "../../img/modelFigure.png";
import drako from "../../img/drako.png";
export const Career = () => {
  return (
    <div className="career">
      <div className="career_title">
        как мы помогаем достичь
        <br /> карьерных целей
      </div>
      <div className="career_content">
        <div className="card">
          <div className="card_id id">
            <div className="id_text">01</div>
          </div>
          <div className="card_title">программа трудоустройства</div>
          <div className="card_text">
            Примите участие в комплексной
            <br />
            программе сопровождения студентов
            <br />
            на этапе выхода на рынок труда
          </div>
        </div>
        <div className="card">
          <div className="card_id id">
            <div className="id_text">02</div>
          </div>
          <div className="card_title">помощь с выходом на зарубежный рынок</div>
          <div className="card_text">
            Научитесь составлять резюме для выхода
            <br />
            на иностранный рынок и узнаете
            <br />
            об особенностях трудоустройства за рубежом
          </div>
        </div>
        <div className="card">
          <div className="card_id id">
            <div className="id_text">03</div>
          </div>
          <div className="card_title">
            карьерные митапы и встречи
            <br />с экспертами в сфере дизайна
          </div>
          <div className="card_text">
            Поймете, как устроена работа в сфере дизайна
            <br />и как выделиться в глазах работодателя
          </div>
        </div>
        <div className="card">
          <div className="card_id id">
            <div className="id_text">04</div>
          </div>
          <div className="card_title">
            карьерное сообщество студентов
            <br />и выпускников
          </div>
          <div className="card_text">
            Изучите опыт трудоустройства других
            <br />
            студентов, сможете собрать команду
            <br />
            для личного проекта, поделиться своей
            <br />
            экспертизой
          </div>
        </div>
        <div className="card">
          <div className="card_id id">
            <div className="id_text">05</div>
          </div>
          <div className="card_title">
            тренажер собеседования с hr-менеджером
          </div>
          <div className="card_text">
            Пройдете тестовое интервью и узнаете,
            <br />
            как грамотно отвечать на вопросы
            <br />
            на собеседованиях
          </div>
        </div>
        <div className="card">
          <div className="card_id id">
            <div className="id_text">06</div>
          </div>
          <div className="card_title">отбор вакансии со всего рынка</div>
          <div className="card_text">
            Еженедельные дайджесты вакансий
            <br />
            для джунов и регулярные анонсы вакансий
            <br />
            от компаний-партнеров
          </div>
        </div>
      </div>
    </div>
  );
};
