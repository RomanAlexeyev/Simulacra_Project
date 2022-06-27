import { StyledSection } from "../styled/article/ArticleContainer.styled";

import pikaPhoto from "./images/pika_photo.png";
import pikaDrawing from "./images/pika_drawing.png";
import pikachu from "./images/pikachu.png";
import pokemonGo from "./images/pokemon_go.png";

const pikaImgs = [pikaPhoto, pikaDrawing, pikachu];

function SectionStages({ prog, hor }) {
  const renderPikaImgs = () => {
    return pikaImgs.map((img, idx) => {
      let id = "pika_image_" + (idx + 1);
      return (
        <div
          className={`image_container pika ${hor - 15 === idx ? "show" : ""} ${
            hor >= 17 ? "pikachu_show" : ""
          }`}
          id={id}
          key={id}
        >
          <img src={img} className="pika_image" alt="" />
        </div>
      );
    });
  };
  return (
    <StyledSection
      id="stages"
      // additionalDelay={0}
      // leaving={progressIdx > 7}
      // onAnimationEnd={(e) => unmountSection(e.target.id)}
    >
      <div className="text_image">
        <div className="text">
          <p>According to Jean Baudrillard, there are 4 stages of simulacra:</p>
          <p>
            <ol>
              <li className={hor >= 15 && "fade_in"}>
                The image is the reflection of a basic reality.
              </li>
              <li className={hor >= 16 && "fade_in"}>
                The image masks and perverts a basic reality.
              </li>
              <li className={hor >= 17 && "fade_in"}>
                The image masks the absence of a basic reality.
              </li>
              <li className={hor >= 18 && "fade_in"}>
                The image bears no relation to any reality whatever: it is its
                own pure simulacrum.
              </li>
            </ol>
          </p>
        </div>
        <div className="image">
          <div className="stage_number">
            <b>{hor > 14 ? hor - 14 : ""}</b>
          </div>
          {renderPikaImgs()}
          <div
            className={`image_container pika ${
              hor >= 18 ? "pokemon_go_show" : ""
            }`}
            id="pika_image_4"
          >
            <img src={pokemonGo} className="pika_image" alt="" />
          </div>
        </div>
      </div>
    </StyledSection>
  );
}

export default SectionStages;
