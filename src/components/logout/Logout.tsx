import React, { useState } from "react";
import Userfront from "@userfront/toolkit/react";
import "./logout.css";
Userfront.init("demo1234");
export const LogoutButton = () => {
  const [disabled, setDisabled] = useState(!Userfront.tokens.accessToken);
  function handleClick() {
    // event.preventDefault();
    Userfront.logout();
  }
  return (
    <button
      id="logout-button"
      className="logout"
      onClick={handleClick}
      disabled={disabled}
    >
      Выход
    </button>
  );
};
