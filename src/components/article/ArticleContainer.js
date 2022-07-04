import { useEffect } from "react";
import throttle from "../../helpers/throttle";

import { useDispatch, useSelector } from "react-redux";
import { updateCounter } from "../../store/scrollSlice";

import {
  StyledArticleContainer,
  StyledArticleProgressBar,
} from "../styled/article/ArticleContainer.styled";

import Content from "./Content";

function ArticleContainer() {
  const isTouchDevice = useSelector((state) => state.scroll.isTouchDevice);

  const dispatch = useDispatch();
  const changeCounter = (index) => dispatch(updateCounter(index));

  useEffect(() => {
    const mouseWheelCb = (e) => {
      e.preventDefault();
      const pos = Math.sign(e.deltaY);
      changeCounter(pos);
    };

    const wheelListener = throttle(mouseWheelCb, 800);

    window.addEventListener("wheel", wheelListener, { passive: false });
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
        <Content />
      </div>
    </StyledArticleContainer>
  );
}

export default ArticleContainer;
