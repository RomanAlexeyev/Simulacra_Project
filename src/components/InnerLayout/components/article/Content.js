import { StyledContent } from "./styled/ArticleContainer.styled";

import { useSelector } from "react-redux";

import SectionHero from "./SectionHero";
import SectionWiki from "./SectionWiki";
import SectionBaudrillard from "./SectionBaudrillard";
import SectionTextSlider from "./SectionTextSlider";
import SectionRobot from "./SectionRobot";
import SectionImageSlider from "./SectionImageSlider";
import SectionMovies from "./SectionMovies";
import SectionStages from "./SectionStages";
import SectionCloser from "./SectionCloser";

function Content() {

  const prog = useSelector(state => state.scroll.counterY);

  return (
    <StyledContent prog={prog}>
      <SectionHero />
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
