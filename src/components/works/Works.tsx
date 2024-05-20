import React, { useState } from "react";
import "./works.css";
import drako from "../../img/drako.png";
import leaf from "../../img/leaf.png";
import modelHuman from "../../img/modelHuman.png";
import modelFigure from "../../img/modelFigure.png";

export const Works = () => {
  const [img, setImg] = useState();
  const [popupStatus, setPopupStatus] = useState(0);
  function setPopupImg(image: any) {
    setImg(image);
    setPopupStatus(1);
  }
  function closePopup() {
    setPopupStatus(0);
  }
  return (
    <div className="works">
      <div className="works_top">
        <div className="works_title">работы наших студентов</div>
        <div className="works_description">
          Каждое портфолио наших выпускников
          <br />
          уникально. Наша задача - не только
          <br />
          помочь развить навыки, но и раскрыть
          <br />
          индивидуальность каждого будущего
          <br />
          3D-художника
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <img
            src={drako}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(drako)}
          />
        </div>
        <div className="image">
          <img
            src={leaf}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(leaf)}
          />
        </div>
        <div className="image">
          <img
            src={modelHuman}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(modelHuman)}
          />
        </div>
        <div className="image">
          <img
            src={modelFigure}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(modelFigure)}
          />
        </div>
        <div className="image">
          <img
            src={drako}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(drako)}
          />
        </div>
        <div className="image">
          <img
            src={drako}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(drako)}
          />
        </div>
        <div className="image">
          <img
            src={drako}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(drako)}
          />
        </div>
        <div className="image">
          <img
            src={leaf}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(leaf)}
          />
        </div>
        <div className="image">
          <img
            src={modelHuman}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(modelHuman)}
          />
        </div>
        <div className="image">
          <img
            src={modelFigure}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(modelFigure)}
          />
        </div>
        <div className="image">
          <img
            src={drako}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(drako)}
          />
        </div>
        <div className="image">
          <img
            src={drako}
            alt="drako"
            className="image_img"
            onClick={() => setPopupImg(drako)}
          />
        </div>
      </div>
      <div className={popupStatus ? "popup-image" : "hidden"}>
        <span className="popup_span" onClick={() => closePopup()}>
          &times;
        </span>
        <img src={img} alt="drako" />
      </div>
    </div>
  );
};
