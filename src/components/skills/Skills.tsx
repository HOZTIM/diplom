import React, { useState } from "react";
import "./skills.css";
export const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skills_container">
          <h2 className="skills_title">
            На курсе вы
            <br />
            научитесь
          </h2>
          <div className="skills_content">
            <div className="skills_skill">
              моделировать и анимировать персонажей, <br />
              окружение, предметы
            </div>
            <div className="skills_skill">
              работать над сложными объектами и
              <br />
              полигональными примитивами
            </div>
            <div className="skills_skill">
              делать качественные рендеры
            </div>
            <div className="skills_skill">
              создавать реалистичные текстуры
            </div>
            <div className="skills_skill">
              работать в Maya, Blender, Cinema 4D,
              <br />
              Substance Painter  ZBrush
            </div>
            <div className="skills_skill">
              решать реальные задачи от заказчиков
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
