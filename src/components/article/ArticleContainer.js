import { useEffect, useState, useCallback } from "react";
import useThrottle from "../../custom_hooks/useThrottle";

import {
  StyledArticleContainer,
  StyledArticleProgressBar,
} from "../styled/article/ArticleContainer.styled";

import Content from "./Content";

function ArticleContainer({ colorTheme, setColorTheme }) {
  const [progressIdx, setProgressIdx] = useState(1);
  const [listening, setListening] = useState(false);
  const [сurrentSection, setCurrentSection] = useState("wiki_article");
  // const [lastUnmounted, setLastUnmounted] = useState(null);

  let mouseWheelCb = useCallback(
    (e) => {
      if (!listening) return;
      setListening(false);
      const pos = Math.sign(e.deltaY);
      setProgressIdx((prev) => prev + pos);
    },
    [listening]
  );

  const wheelListener = useThrottle(mouseWheelCb, 50, true);

  useEffect(() => {
    window.addEventListener("wheel", wheelListener);

    return () => window.removeEventListener("wheel", wheelListener);
  }, [wheelListener]);

  // useEffect(() => {
  //   if (progressIdx > 0 && progressIdx < 4) {
  //     setCurrentSection("wiki_article");
  //   } else if (progressIdx > 3) {
  //     setCurrentSection("baudrillard");
  //   }
  // }, [progressIdx]);

  console.log(progressIdx);

  return (
    <StyledArticleContainer>
      <div className="article_header">
        <div className="title">
          simulacra
          {/* <StyledArticleProgressBar /> */}
        </div>
      </div>
      <div className="article_body">
        <Content progressIdx={progressIdx} />



        {/* {сurrentSection === "wiki_article" && (
          <SectionWiki
            setListening={setListening}
            progressIdx={progressIdx}
            setProgressIdx={setProgressIdx}
          />
        )}
        {сurrentSection === "baudrillard" && (
          <SectionBaudrillard
            setListening={setListening}
            progressIdx={progressIdx}
            setProgressIdx={setProgressIdx}
          />
        )} */}
      </div>
    </StyledArticleContainer>
  );
}

export default ArticleContainer;
