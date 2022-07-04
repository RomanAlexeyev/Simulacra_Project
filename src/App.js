import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GlobalStyles from "./components/styled/Global";
import "./fonts.css";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./custom_hooks";

import OuterLayout from "./components/OuterLayout";
import ArticleContainer from "./components/article/ArticleContainer";
import ThemeChangerContainer from "./components/article/ThemeChangerContainer";

function App() {
  const menuItem = useSelector((state) => state.menu.menuItem);
  const [zoom, setZoom] = useState(null);

  const theme = useTheme();

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
