import { useSelector } from "react-redux";

import ArticleContainer from "./components/article/ArticleContainer";
import ThemeChangerContainer from "./components/article/ThemeChangerContainer";
import SourceContainer from "./components/SourceContainer";

function InnerLayout() {
  const menuItem = useSelector((state) => state.menu.menuItem);
  const themeChanging = useSelector((state) => state.colorTheme.isChanging);
  return (
    <>
      {menuItem === "menu_about" && <ArticleContainer />}
      {(themeChanging || menuItem === "betweenThemes") && (
        <ThemeChangerContainer />
      )}
      {menuItem === "menu_source" && <SourceContainer />}
    </>
  );
}

export default InnerLayout;
