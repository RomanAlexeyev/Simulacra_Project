import { StyledContent } from "../styled/article/ArticleContainer.styled";

import SectionHero from "./SectionHero";
import SectionWiki from "./SectionWiki";
import SectionBaudrillard from "./SectionBaudrillard";
import SectionTextSlider from "./SectionTextSlider";
import SectionRobot from "./SectionRobot";
import SectionImageSlider from "./SectionImageSlider";
import SectionMovies from "./SectionMovies";
import SectionStages from "./SectionStages";
import SectionCloser from "./SectionCloser";

function Content({ progressIdx, horizontalProgressIdx, colorTheme, setColorTheme }) {
  return (
    <StyledContent prog={progressIdx}>
      <SectionHero colorTheme={colorTheme}/>
      <SectionWiki />
      <SectionBaudrillard />
      <SectionTextSlider />
      <SectionRobot />
      <SectionImageSlider />
      <SectionMovies />
      <SectionStages />
      <SectionCloser />
    </StyledContent>
  );
}

export default Content;
