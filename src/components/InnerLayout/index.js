import { useSelector } from "react-redux";

import ArticleContainer from "./components/article/ArticleContainer";
import ThemeChangerContainer from "./components/article/ThemeChangerContainer";
import SourceContainer from "./components/SourceContainer";

function InnerLayout() {
  const menuItem = useSelector((state) => state.menu.menuItem);
  const direction = useSelector((state) => state.scroll.counterDirection);

  return (
    <>
      <ArticleContainer show={menuItem === "menu_about"}/>
      <ThemeChangerContainer show={direction === "horizontal"}/>
      <SourceContainer show={menuItem === "menu_source"}/>
    </>
  );
}

export default InnerLayout;
