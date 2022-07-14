import { useEffect } from "react";
import throttle from "../../../../helpers/throttle";

import { useDispatch, useSelector } from "react-redux";
import { updateCounter, updateScroll } from "../../../../store/scrollSlice";

import { StyledArticleContainer } from "./styled/ArticleContainer.styled";
import ProgressBar from "./ProgressBar";

import Content from "./Content";

function ArticleContainer({ show }) {
  const isTouchDevice = useSelector((state) => state.scroll.isTouchDevice);
  const counterDirection = useSelector(
    (state) => state.scroll.counterDirection
  );

  const dispatch = useDispatch();
  const changeCounter = (index) => dispatch(updateCounter(index));
  const changeScroll = (index) => dispatch(updateScroll(index));

  const scrollCb = (e) => {
    e.preventDefault();
    changeScroll(e.target.scrollTop);
  };

  const scrollListener = throttle(scrollCb, 100);

  useEffect(() => {

    if (!show) return;

    const mouseWheelCb = (e) => {
      e.preventDefault();
      const pos = Math.sign(e.deltaY);
      changeCounter(pos);
    };

    let wheelDelay = counterDirection === "vertical" ? 800 : 200;
    const wheelListener = throttle(mouseWheelCb, wheelDelay);

    window.addEventListener("wheel", wheelListener, { passive: false });

    if (isTouchDevice) {
      window.removeEventListener("wheel", wheelListener);
    }
    return () => {
      window.removeEventListener("wheel", wheelListener);
    };
  }, [counterDirection, show]);

  return (
    <StyledArticleContainer isTouchDevice={isTouchDevice} show={show}>
      <div className="article_header">
        <div className="title">
          simulacra
          <ProgressBar />
        </div>
      </div>
      <div className="article_body" onScroll={scrollListener}>
        <Content
          isTouchDevice={isTouchDevice}
          show={show}
        />
      </div>
    </StyledArticleContainer>
  );
}

export default ArticleContainer;
