import LogoContainer from "./LogoContainer";
import MenuContainer from "./MenuContainer";

import { StyledUIContainer } from "./styled/UIContainer.styled";

function UIContainer({
  zoom,
  logoIsActive,
  setLogoIsActive,
}) {
  const renderSideWritings = () => {
    return (
      <>
        <div className="side_writing left">simulacra</div>
        <div className="side_writing right">simulacra</div>
      </>
    );
  };

  return (
    <StyledUIContainer zoom={zoom}>
      {renderSideWritings()}
      <LogoContainer
        zoom={zoom}
        logoIsActive={logoIsActive}
        setLogoIsActive={setLogoIsActive}
      />
      <MenuContainer
        zoom={zoom}
      />
    </StyledUIContainer>
  );
}

export default UIContainer;
