import { StyledContent } from "../styled/article/ArticleContainer.styled";

import SectionWiki from "./SectionWiki";
import SectionBaudrillard from "./SectionBaudrillard";
import SectionBetty from "./SectionBetty";
import SectionRobot from "./SectionRobot";
import SectionSlider from "./SectionSlider";
import SectionStages from "./SectionStages";
import SectionCloser from "./SectionCloser";

function Content({ progressIdx, horizontalProgressIdx, colorTheme, setColorTheme }) {
  return (
    <StyledContent prog={progressIdx}>
      <SectionWiki />
      <SectionBaudrillard prog={progressIdx} hor={horizontalProgressIdx} />
      <SectionBetty prog={progressIdx} hor={horizontalProgressIdx} />
      <SectionRobot prog={progressIdx} hor={horizontalProgressIdx} />
      <SectionSlider prog={progressIdx} hor={horizontalProgressIdx} />
      <SectionStages prog={progressIdx} hor={horizontalProgressIdx} />
      <SectionCloser prog={progressIdx} hor={horizontalProgressIdx} colorTheme={colorTheme} setColorTheme={setColorTheme} />
    </StyledContent>
  );
}

export default Content;
