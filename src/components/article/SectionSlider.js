import { StyledSection } from "../styled/article/ArticleContainer.styled";

import movies from "./images/movies_slider.png";

function SectionSlider({ prog, hor }) {
  return (
    <StyledSection
      id="slider"
      // additionalDelay={0}
      // leaving={progressIdx > 7}
      // onAnimationEnd={(e) => unmountSection(e.target.id)}
    >
      <div className="text-full centered">
        <p>Specific examples of Simulacra in film and television include:</p>
        <div className="slider">
          <img
            src={movies}
            id="movies_slider"
            style={{
              maxHeight: "100%",
              transform: `translateX(-${hor * 2}%)`,
              transition: "transform 0.7s ease",
            }}
            alt=""
          />
        </div>
        <div className="text-list">
          <div className="list_block">
            <ul>
              <li className={hor >= 8 && "fade_in"}>
                The Replicants from the movie <b>Blade Runner</b>
              </li>
              <li className={hor >= 9 && "fade_in"}>
                Commander Data from <b>Star Trek: The Next Generation</b>
              </li>
              <li className={hor >= 10 && "fade_in"}>
                The Matrix from <b>The Matrix</b>
              </li>
              <li className={hor >= 11 && "fade_in"}>
                Mecha humanoid robots from <b>A.I. Artificial Intelligence</b>
              </li>
            </ul>
          </div>
          <div className="list_block">
            <ul>
              <li className={hor >= 12 && "fade_in"}>
                The suitcase, Red Apple cigarettes and other metacinematic
                elements from <b>Pulp Fiction</b>
              </li>
              <li className={hor >= 13 && "fade_in"}>
                The world of Truman Burbank from <b>The Truman Show</b>
              </li>
              <li className={hor >= 14 && "fade_in"}>
                Samantha virtual assistant from <b>Her</b>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledSection>
  );
}

export default SectionSlider;
