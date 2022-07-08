import { useWindowDimensions } from "../../../custom_hooks";

import { StyledLogoContainer, StyledLogo} from "./styled/LogoContainer.styled";

function LogoContainer({
  zoom,
  logoIsActive,
  setLogoIsActive,
  mouseEnterListening,
}) {
  const { aspectRatio } = useWindowDimensions();

  const renderColoredLogos = () => {
    const logos = [];
    for (let i = 0; i < 3; i++) {
      logos.push(
        <StyledLogo id={`${`logo_${i + 1}`}`} key={i} zoom={zoom}>
          <p>simulacra</p>
        </StyledLogo>
      );
    }
    return logos;
  };

  const mouseEnterHandler = (active) => {
    if (!mouseEnterListening) return;
    setLogoIsActive(active);
  };

  return (
    <StyledLogoContainer>
      {renderColoredLogos()}
      <StyledLogo id="logo_stroke" zoom={zoom} logoIsActive={logoIsActive}>
        <p>simulacra</p>
        <svg
          className="simulacra_logo_stroke"
          width="100%"
          height="100%"
          onMouseEnter={() => mouseEnterHandler(true)}
          onMouseLeave={() => mouseEnterHandler(false)}
        >
          {aspectRatio > 0.6 && aspectRatio < 1.4 ? (
            <text x="0.5%" y="77%" fill="transparent" textAnchor="start">
              simulacra
            </text>
          ) : (
            <>
              <text x="0" y="25.5%" fill="transparent">
                sim
              </text>
              <text x="0" y="59%" fill="transparent">
                ula
              </text>
              <text x="0" y="92.3%" fill="transparent">
                cra
              </text>
            </>
          )}
        </svg>
      </StyledLogo>
    </StyledLogoContainer>
  );
}

export default LogoContainer;
