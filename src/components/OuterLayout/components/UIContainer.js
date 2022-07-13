import LogoContainer from "./LogoContainer";
import MenuContainer from "./MenuContainer";

import { StyledUIContainer } from "./styled/UIContainer.styled";

function UIContainer({
  zoom,
  logoIsActive,
  setLogoIsActive,
  mouseEnterListening,
  currentStroke,
  setCurrentStroke,
  lastStroke,
  setLastStroke,
  uiClickListening,
  stopUiListening,
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
        mouseEnterListening={mouseEnterListening}
      />
      <MenuContainer
        zoom={zoom}
        currentStroke={currentStroke}
        setCurrentStroke={setCurrentStroke}
        lastStroke={lastStroke}
        setLastStroke={setLastStroke}
        uiClickListening={uiClickListening}
        mouseEnterListening={mouseEnterListening}
        stopUiListening={stopUiListening}
      />
    </StyledUIContainer>
  );
}

export default UIContainer;
