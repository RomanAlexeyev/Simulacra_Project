import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuItem } from "../../store/menuSlice";
import { setTheme } from "../../store/themeSlice";
import { resetCounter } from "../../store/scrollSlice";

import { StyledThemeChangerContainer } from "../styled/article/ThemeChangerContainer.styled";

function ThemeChangerContainer() {
  const dispatch = useDispatch();
  const newCounter = () => dispatch(resetCounter());
  const updateMenu = (item) => dispatch(setMenuItem(item));
  const updateTheme = (theme) => dispatch(setTheme(theme));

  const prog = useSelector((state) => state.scroll.counterX);
  const colorTheme = useSelector((state) => state.colorTheme.theme);
  const [currentTheme, setCurrentTheme] = useState(false);
  const [themeChanging, setThemeChanging] = useState(false);
  const [leaving, setLeaving] = useState(false);


  const oppositeWordTransformStyle = (idx) => {
    return {
      transform: `translate(-50%, -50%) scale(${0.5 * (prog - idx)})`,
      opacity: `${(prog - idx) / 2}`,
    };
  };

  useEffect(() => {
    if (prog > 3) {
      setThemeChanging(true);
    }
  }, [prog]);

  useEffect(() => {
    setCurrentTheme(colorTheme);
  }, []);

  const launchNewTheme = (theme) => {
    updateTheme(theme);
    setLeaving(true);
    setTimeout(() => {
      newCounter();
      updateMenu(null);
    }, 3000);
  };

  const changeTheme = () => {
    updateMenu("betweenThemes");
    let targetTheme = "light";
    if (colorTheme !== "dark") {
      targetTheme = "dark";
    }
    launchNewTheme(targetTheme);
  };
  

  return (
    <StyledThemeChangerContainer
      className={`${leaving ? "leaving" : ""}`}
      currentTheme={currentTheme}
    >
      <div
        className={`theme_mask ${themeChanging ? "changing" : ""}`}
        onAnimationEnd={changeTheme}
      ></div>
      <div
        className="opposite_word"
        id="word_1"
        style={oppositeWordTransformStyle(1)}
      >
        the opposite
      </div>
      <div
        className="opposite_word"
        id="word_2"
        style={oppositeWordTransformStyle(1)}
      >
        the opposite
      </div>
      <div
        className="opposite_word"
        id="word_3"
        style={oppositeWordTransformStyle(2)}
      >
        the opposite
      </div>
      <div
        className="opposite_word"
        id="word_4"
        style={oppositeWordTransformStyle(2)}
      >
        the opposite
      </div>
      <div
        className={`opposite_word ${themeChanging ? "changing" : ""}`}
        id="word_5"
      >
        the opposite
      </div>
      <div
        className={`opposite_word ${themeChanging ? "changing" : ""}`}
        id="word_6"
      >
        the opposite
      </div>
      <div
        className={`opposite_word ${themeChanging ? "changing" : ""}`}
        id="word_7"
      >
        the opposite
      </div>
      <div
        className={`opposite_word ${themeChanging ? "changing" : ""}`}
        id="word_8"
      >
        the opposite
      </div>
    </StyledThemeChangerContainer>
  );
}

export default ThemeChangerContainer;
