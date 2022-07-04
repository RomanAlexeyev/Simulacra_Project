import { useRef } from "react";
import { useParallax, useIntersectionObserver } from "../../custom_hooks";
import { StyledSection } from "../styled/article/ArticleContainer.styled";

import faceHuman from "./images/face_human.png";
import faceRobot from "./images/face_robot.png";
import lightSpot from "./images/lightspot.png";

function SectionRobot() {
  const targetRef = useRef(null);
  const isVisible = useIntersectionObserver(
    {
      root: null,
      rootMargin: "-20%",
      threshold: 0.3,
    },
    targetRef
  );

  const parallaxIndex = useParallax(isVisible);

  return (
    <StyledSection id="robot" ref={targetRef}>
      <div className="image robot">
        <div
          className="image_container face_robot face"
          style={{ transform: `translate(${-50 - parallaxIndex * 25}%, -50%)` }}
        >
          <img src={faceHuman} id="face_human" alt="Portrait of a human" />
          <img src={lightSpot} className="lightspot" draggable={false} alt="" />
        </div>
        <div
          className="image_container face_robot robot"
          style={{ transform: `translate(${-50 + parallaxIndex * 25}%, -50%)` }}
        >
          <img src={faceRobot} id="face_robot" alt="Portrait of a cyborg" />
        </div>
      </div>
      <div className="text right">
        <div className={`divider ${isVisible ? "is_visible" : ""}`}></div>
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
