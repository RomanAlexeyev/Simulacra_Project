import { useRef } from "react";
import { useParallax, useIntersectionObserver } from "../../custom_hooks";
import { StyledSection } from "../styled/article/ArticleContainer.styled";

import pikaPhoto from "./images/pika_photo.png";
import pikaDrawing from "./images/pika_drawing.png";
import pikachu from "./images/pikachu.png";
import pokemonGo from "./images/pokemon_go.png";
import lightSpot from "./images/lightspot.png";

function SectionStages() {
  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    },
    targetRef
  );

  const parallaxIndex = useParallax(isVisible);

  return (
    <StyledSection id="stages" ref={targetRef}>
      <div className="text left">
        <div className={`divider ${isVisible ? "is_visible" : ""}`}></div>
        <div className={`stages_by_baudrillard ${isVisible ? "is_visible" : ""}`}>
          <h5 >
            According to
            <br />
            Jean Baudrillard,
          </h5>
          <h3>
            there are
            <br />
            stages of
            <br />
            simulacra
          </h3>
          <span id="number_four" className={`${isVisible ? "is_visible" : ""}`}>
            4
          </span>
        </div>
      </div>
      <div className="text right simulacra_stages">
        <div className={`simulacra_stage ${isVisible ? "is_visible" : ""}`} id="stage_one">
          <div className="stage_number">1</div>
          <div className="stage_description">
            The image is the reflection of a basic reality.
          </div>
        </div>

        <div className={`simulacra_stage ${isVisible ? "is_visible" : ""}`} id="stage_two">
          <div className="stage_number">2</div>
          <div className="stage_description">
            The image masks and perverts a basic reality.
          </div>
        </div>
        <div className={`simulacra_stage ${isVisible ? "is_visible" : ""}`} id="stage_three">
          <div className="stage_number">3</div>
          <div className="stage_description">
            The image masks the absence of a basic reality.
          </div>
        </div>
        <div className={`simulacra_stage ${isVisible ? "is_visible" : ""}`} id="stage_four">
          <div className="stage_number">4</div>
          <div className="stage_description">
            The image bears no relation to any reality whatever: it is its own
            pure simulacrum.
          </div>
        </div>
      </div>
      <div className="image simulacra_stages">
        <div className="image_container_stages">
          <img
            className="simulacra_stage_image"
            src={pikaPhoto}
            id="pika_photo"
            alt="Alpine pika"
            style={{ transform: `translate(-50%, ${-100 + (parallaxIndex*25)}%)` }}
          />
          <img
            className="simulacra_stage_image"
            src={pikaDrawing}
            id="pika_drawing"
            alt="Digitally manipulated alpine pika"
            style={{ transform: `translate(${-100 + (parallaxIndex*25)}%, ${50 - (parallaxIndex*50)}%)` }}
          />
          <img
            className="simulacra_stage_image"
            src={pikachu}
            id="pikachu"
            alt="Pikachu pokemon"
            style={{ transform: `translate(-50%, ${50 - (parallaxIndex*50)}%)` }}
          />
          <img
            className="simulacra_stage_image"
            src={pokemonGo}
            id="pokemon_go"
            alt="Hand holding a smartphone with a Pokemon Go game running"
            style={{ transform: `translate(${50 - (parallaxIndex*50)}%, ${50 - (parallaxIndex*50)}%)` }}
          />
          <img
            className="simulacra_stage_image lightspot"
            src={lightSpot}
            id="lightspot"
            alt=""
            style={{ transform: `translate(-50%, -50%)` }}
          />
        </div>
      </div>
    </StyledSection>
  );
}

export default SectionStages;
