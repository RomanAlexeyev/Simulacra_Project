import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GlobalStyles from "./components/styled/Global";
import "./fonts.css";
import { ThemeProvider } from "styled-components";

import OuterLayout from "./components/OuterLayout";
import ArticleContainer from "./components/article/ArticleContainer";
import ThemeChangerContainer from "./components/article/ThemeChangerContainer";

const themeVars = {
  dark: {
    masterBackground: "black",
    articleBackground: "rgba(0, 0, 0, 0.8)",
    textAndEls: "white",
    scrollIconBrightness: "brightness(1)",
    menuTextColor: "0 0 0 rgb(20, 20, 20)",
    textStroke: "2px #000",
    logoShadow:
      "drop-shadow(0 0 5px rgb(236, 12, 199)) drop-shadow(0 0 10px rgb(199, 12, 236))",
    logoStrokeColored: "#CC20FF",
    logoBlendMode: "color-dodge",
    shardShadow: "drop-shadow(30px 30px 9px rgba(0, 0, 0, 0.4))",
    shardsBrightness: "brightness(1.1)",
    gridBrightness: "brightness(1.3)",
  },
  light: {
    masterBackground: "#d9d9d9",
    articleBackground: "rgba(255, 255, 255, 0.9)",
    textAndEls: "black",
    scrollIconBrightness: "brightness(0)",
    menuTextColor: "0 0 0 rgb(210, 210, 210)",
    textStroke: "2px #B5B5B5",
    logoShadow: "none",
    logoStrokeColored: "#9408A3",
    logoBlendMode: "color-burn",
    shardShadow: "drop-shadow(30px 30px 9px rgba(0, 0, 0, 0.1))",
    shardsBrightness: "brightness(12)",
    gridBrightness: "brightness(12)",
  },
};

function App() {
  const menuItem = useSelector((state) => state.menu.menuItem);
  const colorTheme = useSelector((state) => state.colorTheme.theme);

  const [zoom, setZoom] = useState(null);

  const theme = {
    colors: {
      masterBackground: themeVars[colorTheme].masterBackground,
      articleBackground: themeVars[colorTheme].articleBackground,
      textAndEls: themeVars[colorTheme].textAndEls,
      menuTextColor: themeVars[colorTheme].menuTextColor,
      textStroke: themeVars[colorTheme].textStroke,
      logoStrokeColored: themeVars[colorTheme].logoStrokeColored,
    },
    brightnessModes: {
      scrollIconBrightness: themeVars[colorTheme].scrollIconBrightness,
      shardsBrightness: themeVars[colorTheme].shardsBrightness,
      gridBrightness: themeVars[colorTheme].gridBrightness,
    },
    shadows: {
      logoShadow: themeVars[colorTheme].logoShadow,
      shardShadow: themeVars[colorTheme].shardShadow,
    },
    blendModes: {
      logoBlendMode: themeVars[colorTheme].logoBlendMode,
    },
  };

  useEffect(() => {
    if (menuItem === "menu_author") {
      setZoom("out");
    }
  }, [menuItem]);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <OuterLayout zoom={zoom} />
        {menuItem === "menu_about" && <ArticleContainer />}
        {(menuItem === "menu_about" || menuItem === "blank") && (
          <ThemeChangerContainer />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
