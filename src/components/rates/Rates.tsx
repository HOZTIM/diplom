import React, { useState } from "react";
import "./rates.css";
export const Rates = () => {
  return (
    <div className="rates">
      <div className="rates_top">
        <div className="rates_title">
          выберите тариф
          <br /> который вам подходит
        </div>
        <div className="rates_descritrion">
          наш менеджер свяжется с вами <br />и проконсультирует по наиболее
          <br />
          подходящим условиям
        </div>
      </div>
      <div className="rates_cards">
        <div className="rates_rate">
          <div className="rate_title">БАЗОВЫЙ</div>
          <div className="rate_content">
            менторы отвечают по тема курсы
            <br />
            <br />
            координаторы помогают в обучении,
            <br />
            решают технические проблемы
            <br />
            <br />
            доступ к материалам курса навсегда
            <br />
            <br />
            <div className="bold">Бонус</div>
            программма трудоустройства
          </div>
          <div className="rate_price">
            <div className="price_discont">
              <div className="discont">-35%</div>
            </div>
            <div className="old_price">
              <s>8600 Р/мес.</s>
            </div>
            <div className="new_price">
              <div className="bold">5590</div>
            </div>
            <div className="price_desc">
              <div className="currency">Р/месяц</div>
              <div className="plan">при рассрочке на 36 мес.</div>
            </div>
          </div>
          <div className="rate_btn">Оплатить курс сразу</div>
        </div>
        <div className="rates_rate">
          <div className="rate_title">ОПТИМАЛЬНЫЙ</div>
          <div className="rate_content">
            все опции базового тарифа
            <br />
            <br />
            4 дополнительных блока
            <br />
            по анимации в After Affects
            <div className="bold">МОДУЛЬ ПО НЕЙРОСЕТЯМ</div>
            <div className="bold">Бонус</div>
            10 индивидуальных консультаций
            <br />с ментором по часу по материалам курса
            <br />
            <br />
            групповые воркшопы для тренировки
            <br />
            насмотренности
            <br />
            <br />
            тестовое собеседование с экспертом +<br />
            разбор портфолио
            <br />
            <br />
            1 индивидуальная карьерная консультация
            <br />
            <br />
            ревью резюме
          </div>
          <div className="rate_price">
            <div className="price_discont">
              <div className="discont">-40%</div>
            </div>
            <div className="old_price">13 150 Р/мес.</div>
            <div className="new_price">
              <div className="bold">7890</div>
            </div>
            <div className="price_desc">
              <div className="currency">Р/месяц</div>
              <div className="plan">при рассрочке на 36 мес.</div>
            </div>
          </div>
          <div className="rate_btn">Оплатить курс сразу</div>
        </div>
        <div className="rates_rate">
          <div className="rate_title">VIP</div>
          <div className="rate_content">
            все опции базового <br />
            и оптимального тарифа
            <br />
            <br />
            8 дополнительных блоков
            <br /> по анимации в After Effects
            <br />
            и созданию кинетической
            <br />
            типографики
            <div className="bold">МОДУЛЬ ПО НЕЙРОСЕТЯМ</div>
            <div className="bold">Бонус</div>
            еженедельные персональные
            <br /> консультации с менторами
            <br /> по 60 минут, ответы на вопросы
            <br />
            по теории и практике
            <br />
            <br />
            совместная работа с ментором
            <br />
            над вашим проектом онлайн
            <br />
            <br />
            индивидуальная консультация
            <br />с топовым жкспертом рынка
            <br />
            <br />
            дополнительная карьерная
            <br />
            консультация
          </div>
          <div className="rate_price">
            <div className="price_discont">
              <div className="discont">-35%</div>
            </div>
            <div className="old_price">8600 Р/мес.</div>
            <div className="new_price">
              <div className="bold">5590</div>
            </div>
            <div className="price_desc">
              <div className="currency">Р/месяц</div>
              <div className="plan">при рассрочке на 36 мес.</div>
            </div>
          </div>
          <div className="rate_btn">Оплатить курс сразу</div>
        </div>
      </div>
    </div>
  );
};
