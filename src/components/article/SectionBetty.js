import { StyledSection } from "../styled/article/ArticleContainer.styled";

import bettyboop from "./images/bettyboop.png";
import helenKane from "./images/helen_kane.png";
import hanshaw from "./images/a_hanshaw.png";

function SectionBetty({ prog, hor }) {
  return (
    <StyledSection
      id="bettyboop"
      // additionalDelay={0}
      // leaving={progressIdx > 7}
      // onAnimationEnd={(e) => unmountSection(e.target.id)}
    >
      <div className="text_image">
        <div className="text">
          <p>
            For example, the cartoon <b>Betty Boop</b> was based on singer{" "}
            <span className={hor === 6 && "highlighted"}>
              <b>Helen Kane</b>
            </span>
            . Kane, however, rose to fame imitating{" "}
            <span className={hor === 7 && "highlighted"}>
              <b>Annette Hanshaw</b>
            </span>
            .
          </p>
          <p>
            Hanshaw and Kane have fallen into relative obscurity, while Betty
            Boop remains an icon of the flapper.
          </p>
        </div>
        <div className="image">
          <div className="image_container betty" id="betty_image_1">
            <div
              className={`image_container betty ${hor >= 6 && "reveal"}`}
              id="betty_image_2"
            >
              <div
                className={`image_container betty ${hor >= 7 && "reveal"}`}
                id="betty_image_3"
              >
                <div id="backstrip"></div>
                <img src={hanshaw} className="betty_image" alt="" />
              </div>
              <div id="backstrip"></div>
              <img src={helenKane} className="betty_image" alt="" />
            </div>
            <div id="backstrip"></div>
            <img src={bettyboop} className="betty_image" alt="" />
          </div>
        </div>
      </div>
    </StyledSection>
  );
}

export default SectionBetty;
