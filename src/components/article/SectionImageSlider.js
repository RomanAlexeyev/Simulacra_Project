import { useRef } from "react";
import { useParallax, useIntersectionObserver } from "../../custom_hooks";
import { StyledSection } from "../styled/article/ArticleContainer.styled";

import movies from "./images/movies_slider.png";

function SectionImageSlider() {
  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(
    {
      root: null,
      rootMargin: "40%",
      threshold: 0.05,
    },
    targetRef
  );

  const parallaxIndex = useParallax(isVisible);

  return (
    <StyledSection
      id="image-slider"
      className="centered short_bottom"
      ref={targetRef}
    >
      <div className="text">
        <p
          style={{
            transform: `scale(${4 / (parallaxIndex + 1)})`,
            opacity: `${parallaxIndex * 0.33}`,
            transition: "all 1s ease-in-out",
          }}
        >
          Specific examples of Simulacra in film and television include:
        </p>
        <div className="image_slider">
          <img
            src={movies}
            id="movies_slider"
            style={{ transform: `translateX(${-(parallaxIndex * 5 + 10)}%)` }}
            alt=""
          />
          <div id="image_slider_mask"></div>
        </div>
      </div>
    </StyledSection>
  );
}

export default SectionImageSlider;
