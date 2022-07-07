import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMenuItem } from "../../../store/menuSlice";

import {
  StyledSourceContainer,
  StyledCloseButton,
} from "../../OuterLayout/components/styled/SourceContainer.styled";

import githubIcon from "../../../assets/graphic_elements/contact_icons/github_icon.svg";

function SourceContainer() {
  const dispatch = useDispatch();
  const updateMenu = (item) => dispatch(setMenuItem(item));

  const [leaving, setLeaving] = useState(false);

  const leaveSource = () => {
    setLeaving(true);
  };

  const unmount = () => {
    if (leaving) {
      updateMenu(null);
    }
  };
  
  return (
    <StyledSourceContainer leaving={leaving} onAnimationEnd={unmount}>
      <StyledCloseButton onClick={leaveSource} />
      <div className="source_header">
        This project is built with ReactJS framework
        <br />
        with the help of custom hooks
      </div>
      <div className="source_body">
        Other libraries and frameworks used
        <br />
        for the development of this project include:
        <div className="libraries">
          <div className="library_item">React Styled Components</div>
          <div className="library_item">React Redux Toolkit</div>
        </div>
      </div>
      <div className="source_footer">
        Check out the source code of this project:
        <a
          className="github_button"
          href="https://github.com/romanalexeyev/simulacra_project"
        >
          <img src={githubIcon} className="icon" alt="" />
          github.com/romanalexeyev/simulacra_project
        </a>
      </div>
    </StyledSourceContainer>
  );
}

export default SourceContainer;
