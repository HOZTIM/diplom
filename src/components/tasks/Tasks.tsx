import React, { useState } from "react";
import leaf from "../../img/leaf.png";
import modelHuman from "../../img/modelHuman.png";
import modelFigure from "../../img/modelFigure.png";
import drako from "../../img/drako.png";
import "./tasks.css";
export const Tasks = () => {
  return (
    <>
      <div className="tasks">
        <h2 className="tasks_title">
          какие задачи выполняет
          <br /> 3d-художник
        </h2>
        <div className="tasks_container">
          <div className="task">
            <img src={leaf} alt="" className="task_img" />
            <div className="task_description">
              отрисовывает целые миры
              <br /> для индрустрии геймдева
            </div>
          </div>
          <div className="task">
            <img src={modelHuman} alt="" className="task_img" />
            <div className="task_description">
              разрабатывает реалистичные <br />
              3d-модели персонажей
            </div>
          </div>
          <div className="task">
            <img src={modelFigure} alt="" className="task_img" />
            <div className="task_description">
              создает детализированные <br /> 3d-объекты для рекламы
            </div>
          </div>
          <div className="task">
            <img src={drako} alt="" className="task_img" />
            <div className="task_description">
              делает графику <br />и спецэффекты для фильмов
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
