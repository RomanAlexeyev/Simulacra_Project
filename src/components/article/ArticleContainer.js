import { useEffect, useState } from "react";
import throttle from "../../helpers/throttle";

import {
  StyledArticleContainer,
  StyledArticleProgressBar,
} from "../styled/article/ArticleContainer.styled";

import Content from "./Content";

const xIndices = { 
  3: { start: 3, end: 9 },
  5: { start: 10, end: 13 },
  8: { start: 15, end: 23 },
  10: { start: 24, end: 29 },
  13: { start: 31, end: 40 },
};

function ArticleContainer({ colorTheme, setColorTheme }) {
  const [counter, setCounter] = useState(0);
  const [progressIdx, setProgressIdx] = useState(0);
  const [horizontalProgressIdx, setHorizontalProgressIdx] = useState(0);

  useEffect(() => {
    // const progs = Object.keys(xIndices).map((key) => parseInt(key));

    // if (
    //   progs.includes(progressIdx) &&
    //   counter >= xIndices[progressIdx].start &&
    //   counter < xIndices[progressIdx].end
    // ) {
    //   setHorizontalProgressIdx(counter - progressIdx);
    // } else {
    //   setProgressIdx(counter - horizontalProgressIdx);
    // }
    if (counter < 0) {
      setCounter(0);
    } else {
      setProgressIdx(counter - horizontalProgressIdx);
    }
  }, [counter]);


  useEffect(() => {
    const mouseWheelCb = (e) => {
      const pos = Math.sign(e.deltaY);
      setCounter((prev) => prev + pos);
    };

    const wheelListener = throttle(mouseWheelCb, 600);

    window.addEventListener("wheel", wheelListener);
    return () => {
      window.removeEventListener("wheel", wheelListener);
    };
  }, []);

  return (
    <StyledArticleContainer>
      <div className="article_header">
        <div className="title">
          simulacra
          <StyledArticleProgressBar progressIdx={progressIdx} />
        </div>
      </div>
      <div className="article_body">
        <Content
          progressIdx={progressIdx}
          horizontalProgressIdx={horizontalProgressIdx}
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
        />
      </div>
    </StyledArticleContainer>
  );
}

export default ArticleContainer;

