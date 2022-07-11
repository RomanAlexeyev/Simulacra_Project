import { useEffect, useRef } from "react";
import throttle from "../../../../helpers/throttle";

import { useDispatch, useSelector } from "react-redux";
import { updateCounter, updateScroll } from "../../../../store/scrollSlice";

import { StyledArticleContainer } from "./styled/ArticleContainer.styled";
import ProgressBar from "./ProgressBar";

import Content from "./Content";

function ArticleContainer() {

  const isTouchDevice = useSelector((state) => state.scroll.isTouchDevice);

  const dispatch = useDispatch();
  const changeCounter = (index) => dispatch(updateCounter(index));
  const changeScroll = (index) => dispatch(updateScroll(index));

  const scrollCb = (e) => {
    e.preventDefault();
    changeScroll(e.target.scrollTop);
  };

  const scrollListener = throttle(scrollCb, 100);

  useEffect(() => {

    const mouseWheelCb = (e) => {
      e.preventDefault();
      const pos = Math.sign(e.deltaY);
      changeCounter(pos);
    };

    const wheelListener = throttle(mouseWheelCb, 800);
    
    if (!isTouchDevice) {
      window.addEventListener("wheel", wheelListener, { passive: false });
    }
    return () => {
      window.removeEventListener("wheel", wheelListener);
    };
  }, []);

  return (
    <StyledArticleContainer isTouchDevice={isTouchDevice}>
      <div className="article_header">
        <div className="title">
          simulacra
          <ProgressBar />
        </div>
      </div>
      <div className="article_body" onScroll={scrollListener}>
        <Content isTouchDevice={isTouchDevice} />
      </div>
    </StyledArticleContainer>
  );
}

export default ArticleContainer;
