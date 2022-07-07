import { useSelector } from "react-redux";
import { StyledArticleProgressBar } from "./styled/ArticleContainer.styled";

function ProgressBar() {
  const sectionProgress = useSelector((state) => state.scroll.sectionProgress);
  return <StyledArticleProgressBar prog={sectionProgress} />;
}

export default ProgressBar;
