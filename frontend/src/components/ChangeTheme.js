import React, { useContext, useState } from "react";

import ThemeContext from "../context/ThemeContext";

const ChangeTheme = () => {
  const [themeButton, setThemeButton] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  const buttonHandler = () => {
    setThemeButton(!themeButton);
    themeButton ? setTheme("light") : setTheme("dark");
  };

  const botonDeshabilitado = (
    <div className="form-check form-switch">
      <input
        type="checkbox"
        className="form-check-input"
        role="switch"
        id="flexSwitchCheckDisabled"
        onClick={buttonHandler}
      />
      <label
        className="form-check-label"
        htmlFor="flexSwitchCheckDisabled"
      ></label>
    </div>
  );

  const botonHabilitado = (
    <div className="form-check form-switch">
      <input
        type="checkbox"
        className="form-check-input"
        role="switch"
        id="flexSwitchCheckChecked"
        onClick={buttonHandler}
      />
      <label
        className="form-check-label"
        htmlFor="flexSwitchCheckChecked"
      ></label>
    </div>
  );

  return (
    <div>
      {themeButton ? botonHabilitado : botonDeshabilitado} <p>{theme}</p>
    </div>
  );
};

export default ChangeTheme;
