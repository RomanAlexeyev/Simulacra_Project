import { StyledSection } from "../styled/article/ArticleContainer.styled";

import faceHuman from "./images/face_human.png";
import faceRobot from "./images/face_robot.png";
import lightSpot from "./images/lightspot.png";

function SectionRobot() {
  return (
    <StyledSection id="robot">
      <div className="image robot">
        <div className="image_container face_robot face">
          <img src={faceHuman} id="face_human" alt="Portrait of a human" />
          <img src={lightSpot} className="lightspot" draggable={false} alt="" />
        </div>
        <div className="image_container face_robot robot">
          <img src={faceRobot} id="face_robot" alt="Portrait of a cyborg" />
          {/* <img src={lightSpot} className="lightspot" draggable={false} alt="" /> */}
        </div>
      </div>
      <div className="text right">
        <div className="divider"></div>
        <p>
          In Fantasy and Science Fiction literature Simulacra are artificial
          life forms that are designed to mimic the characteristics of a
          naturally occurring species.
        </p>
        <p>The most common form copied by Simulcra are human beings.</p>
        <p>
          It is believed that Simulacra are a modern day adaptation of the Golem
          myth.
        </p>
      </div>
    </StyledSection>
  );
}

export default SectionRobot;
