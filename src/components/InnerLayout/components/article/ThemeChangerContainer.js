import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuItem } from "../../../../store/menuSlice";
import { setTheme, setThemeIsChanging } from "../../../../store/themeSlice";
import { resetCounter } from "../../../../store/scrollSlice";

import { StyledThemeChangerContainer } from "./styled/ThemeChangerContainer.styled";

function ThemeChangerContainer({ show }) {
  const dispatch = useDispatch();
  const newCounter = () => dispatch(resetCounter());
  const updateMenu = (item) => dispatch(setMenuItem(item));
  const updateTheme = (theme) => dispatch(setTheme(theme));

  const prog = useSelector((state) => state.scroll.counterX);
  const isTouchDevice = useSelector((state) => state.scroll.isTouchDevice);
  const colorTheme = useSelector((state) => state.colorTheme.theme);
  const [currentTheme, setCurrentTheme] = useState(false);
  const [maskIsOn, setMaskIsOn] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (show) {
      setCurrentTheme(colorTheme);
      if (isTouchDevice) {
        setMaskIsOn(true);
      }
    } else {
      setMaskIsOn(false);
      setLeaving(false);
    }
  }, [show]);

  useEffect(() => {
    if (prog >= 2) {
      setMaskIsOn(true);
    }
  }, [prog]);

  const changeTheme = (e) => {
    if (e.target.id !== "mask") return;
    updateMenu(null);
    let targetTheme = "light";
    if (colorTheme !== "dark") {
      targetTheme = "dark";
    }
    updateTheme(targetTheme);
    setLeaving(true);
  };

  const unmount = (e) => {
    if (e.target.id !== "container") return;
    newCounter();
  };

  const oppositeWordTransformStyle = () => {
    return {
      transform: `translate(-50%, -50%) scale(${0.3 * prog})`,
      opacity: `${prog / 7}`,
    };
  };

  const renderOppositeWords = () => {
    const words = [];
    for (let i = 0; i < 8; i++) {
      let id = `word_${i + 1}`;
      words.push(
        <div
          className="opposite_word"
          id={id}
          key={id}
          style={oppositeWordTransformStyle()}
        >
          the opposite
        </div>
      );
    }
    return words;
  };

  if (!show) return null;

  return (
    <StyledThemeChangerContainer
      className={`${leaving ? "leaving" : ""}`}
      currentTheme={currentTheme}
      maskIsOn={maskIsOn}
      id="container"
      onAnimationEnd={(e) => unmount(e)}
    >
      <div
        className="theme_mask"
        id="mask"
        onAnimationEnd={(e) => changeTheme(e)}
      ></div>
      {renderOppositeWords()}
    </StyledThemeChangerContainer>
  );
}

export default ThemeChangerContainer;
