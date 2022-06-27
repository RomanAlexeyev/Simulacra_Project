import { StyledSection } from "../styled/article/ArticleContainer.styled";

import faceHuman from "./images/face_human.png";
import faceRobot from "./images/face_robot.png";

function SectionRobot({ prog }) {
  return (
    <StyledSection
      id="robot"
      // additionalDelay={0}
      // leaving={progressIdx > 7}
      // onAnimationEnd={(e) => unmountSection(e.target.id)}
    >
      <div className="text_image robot">
        <div className="image">
          <div
            className="image_container face"
            style={{
              transform: `translateX(-${prog > 5 ? (prog - 5) * 10 : 0}%)`,
              opacity: prog > 5 ? 1 / (prog - 5) : 1,
            }}
          >
            <img
              src={faceHuman}
              className="img_face"
              id="img_face_human"
              alt=""
            />
          </div>
          <div
            className="image_container face"
            style={{
              transform: `translateX(${prog > 5 ? (prog - 5) * 10 : 0}%)`,
              opacity: prog > 5 ? 1 / (prog - 5) : 1,
            }}
          >
            <img
              src={faceRobot}
              className="img_face"
              id="img_face_robot"
              alt=""
            />
          </div>
        </div>
        <div className="text">
          <p>
            In Fantasy and Science Fiction literature Simulacra are artificial
            life forms that are designed to mimic the characteristics of a
            naturally occurring species.
          </p>
          <p>The most common form copied by Simulcra are human beings.</p>
          <p>
            It is believed that Simulacra are a modern day adaptation of the
            Golem myth.
          </p>
        </div>
      </div>
    </StyledSection>
  );
}

export default SectionRobot;
