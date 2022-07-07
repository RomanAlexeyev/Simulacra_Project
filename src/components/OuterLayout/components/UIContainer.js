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
  return (
    <StyledUIContainer>
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
