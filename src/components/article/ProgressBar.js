import { useSelector } from "react-redux";
import { StyledArticleProgressBar } from "../styled/article/ArticleContainer.styled";

function ProgressBar() {
  const sectionProgress = useSelector((state) => state.scroll.sectionProgress);
  return <StyledArticleProgressBar prog={sectionProgress} />;
}

export default ProgressBar;
