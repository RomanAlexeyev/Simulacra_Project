import { useSelector } from "react-redux";
import GlobalStyles from "./components/styled/Global";
import "./fonts.css";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./custom_hooks";

import OuterLayout from "./components/OuterLayout";
import ArticleContainer from "./components/article/ArticleContainer";
import ThemeChangerContainer from "./components/article/ThemeChangerContainer";
import SourceContainer from "./components/SourceContainer";

function App() {
  const menuItem = useSelector((state) => state.menu.menuItem);
  const theme = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <OuterLayout menuItem={menuItem} />
        {menuItem === "menu_about" && <ArticleContainer />}
        {(menuItem === "menu_about" || menuItem === "betweenThemes") && (
          <ThemeChangerContainer />
        )}
        {menuItem === "menu_source" && <SourceContainer />}
      </ThemeProvider>
    </>
  );
}

export default App;
