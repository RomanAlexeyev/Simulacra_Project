import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuItem } from "../../../../store/menuSlice";
import { setTheme, setThemeIsChanging } from "../../../../store/themeSlice";
import { resetCounter } from "../../../../store/scrollSlice";

import { StyledThemeChangerContainer } from "./styled/ThemeChangerContainer.styled";

function ThemeChangerContainer() {
  const dispatch = useDispatch();
  const newCounter = () => dispatch(resetCounter());
  const updateMenu = (item) => dispatch(setMenuItem(item));
  const updateTheme = (theme) => dispatch(setTheme(theme));
  const setIsChanging = (bool) => dispatch(setThemeIsChanging(bool));

  const colorTheme = useSelector((state) => state.colorTheme.theme);
  const [currentTheme, setCurrentTheme] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    setCurrentTheme(colorTheme);
  }, []);

  const launchNewTheme = (theme) => {
    updateTheme(theme);
    setLeaving(true);
    setTimeout(() => {
      newCounter();
      setIsChanging(false);
      updateMenu(null);
    }, 3600);
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
        className="theme_mask"
        onAnimationEnd={changeTheme}
      ></div>
      <div
        className="opposite_word"
        id="word_1"
      >
        the opposite
      </div>
      <div
        className="opposite_word"
        id="word_2"
      >
        the opposite
      </div>
      <div
        className="opposite_word"
        id="word_3"
      >
        the opposite
      </div>
      <div
        className="opposite_word"
        id="word_4"
      >
        the opposite
      </div>
      <div
        className="opposite_word"
        id="word_5"
      >
        the opposite
      </div>
      <div
        className="opposite_word"
        id="word_6"
      >
        the opposite
      </div>
      <div
        className="opposite_word"
        id="word_7"
      >
        the opposite
      </div>
      <div
        className="opposite_word"
        id="word_8"
      >
        the opposite
      </div>
    </StyledThemeChangerContainer>
  );
}

export default ThemeChangerContainer;
