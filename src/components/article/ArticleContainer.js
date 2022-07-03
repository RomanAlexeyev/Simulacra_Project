import { useEffect } from "react";
import throttle from "../../helpers/throttle";

import { useDispatch, useSelector } from "react-redux";
import { updateCounter } from "../../store/scrollSlice";

import {
  StyledArticleContainer,
  StyledArticleProgressBar,
} from "../styled/article/ArticleContainer.styled";

import Content from "./Content";

function ArticleContainer({ colorTheme, setColorTheme }) {

  const isTouchDevice = useSelector(state => state.scroll.isTouchDevice);

  const dispatch = useDispatch();
  const changeCounter = (index) => dispatch(updateCounter(index));

  useEffect(() => {
    const mouseWheelCb = (e) => {
      e.preventDefault();
      const pos = Math.sign(e.deltaY);
      changeCounter(pos);
    };

    const wheelListener = throttle(mouseWheelCb, 800);

    window.addEventListener("wheel", wheelListener, {passive: false});
    return () => {
      window.removeEventListener("wheel", wheelListener);
    };
  }, []);

  return (
    <StyledArticleContainer isTouchDevice={isTouchDevice}>
      <div className="article_header">
        <div className="title">
          simulacra
          {/* <StyledArticleProgressBar progressIdx={progressIdx} /> */}
        </div>
      </div>
      <div className="article_body">
        <Content
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
        />
      </div>
    </StyledArticleContainer>
  );
}

export default ArticleContainer;

  // const xIndices = {
  //   3: { start: 3, end: 9 },
  //   5: { start: 10, end: 13 },
  //   8: { start: 15, end: 23 },
  //   10: { start: 24, end: 29 },
  //   13: { start: 31, end: 40 },
  // };

    // const [counter, setCounter] = useState(0);
  // const [progressIdx, setProgressIdx] = useState(0);
  // const [horizontalProgressIdx, setHorizontalProgressIdx] = useState(0);

  // useEffect(() => {
  //   // const progs = Object.keys(xIndices).map((key) => parseInt(key));

  //   // if (
  //   //   progs.includes(progressIdx) &&
  //   //   counter >= xIndices[progressIdx].start &&
  //   //   counter < xIndices[progressIdx].end
  //   // ) {
  //   //   setHorizontalProgressIdx(counter - progressIdx);
  //   // } else {
  //   //   setProgressIdx(counter - horizontalProgressIdx);
  //   // }
  //   if (counter < 0) {
  //     setCounter(0);
  //   } else {
  //     setProgressIdx(counter - horizontalProgressIdx);
  //   }
  // }, [counter]);
