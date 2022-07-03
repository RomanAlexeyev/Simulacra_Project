import { StyledSection } from "../styled/article/ArticleContainer.styled";

import movies from "./images/movies_slider.png";

function SectionImageSlider() {
  return (
    <StyledSection id="image-slider" className="centered short_bottom">
      <div className="text">
        <p>Specific examples of Simulacra in film and television include:</p>
        <div className="image_slider">
          <img
            src={movies}
            id="movies_slider"
            style={{
              height: "100%",
              // transform: `translateX(-${hor * 2}%)`,
              transform: `translateX(-10%)`,
              transition: "transform 0.7s ease",
            }}
            alt=""
          />
          <div id="image_slider_mask"></div>
        </div>
      </div>
    </StyledSection>
  );
}

export default SectionImageSlider;
