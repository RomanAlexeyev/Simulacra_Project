import { React, useState, useEffect } from "react";
import GlobalStyles from "./components/styled/Global";
import './fonts.css';
import { ThemeProvider } from "styled-components";

import OuterLayout from "./components/OuterLayout";
import ArticleContainer from "./components/article/ArticleContainer";

function App() {
  const [zoom, setZoom] = useState(null);
  const [menuItem, setMenuItem] = useState(null);
  const [colorTheme, setColorTheme] = useState("dark");

  const themeVars = {
    dark: {
      background: "black",
    },
    light: {
      background: "white",
    },
  };

  const theme = {
    colors: {
      background: themeVars[colorTheme].background,
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
        <OuterLayout
          zoom={zoom}
          menuItem={menuItem}
          setMenuItem={setMenuItem}
        />
        {menuItem === "menu_about" && (
          <ArticleContainer
            colorTheme={colorTheme}
            setColorTheme={setColorTheme}
          />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
