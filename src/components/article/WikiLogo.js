import { StyledWikiLogo } from "../styled/article/ArticleContainer.styled";

import wikipediaLogo from "./images/wikipedia_logo.png";

function WikiLogo({ outer, progressIdx }) {
  return (
    <StyledWikiLogo outer={outer} prog={progressIdx}>
      <img
        src={wikipediaLogo}
        alt="wikipedia logo"
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
        }}
      />
    </StyledWikiLogo>
  );
}

export default WikiLogo;
