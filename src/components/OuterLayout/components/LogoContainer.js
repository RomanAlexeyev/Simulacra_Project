import { useDispatch, useSelector } from "react-redux";
import { useWindowDimensions } from "../../../custom_hooks";

import { setLogoIsActive } from "../../../store/menuSlice";

import { StyledLogoContainer, StyledLogo } from "./styled/LogoContainer.styled";

function LogoContainer({ zoom }) {
  const dispatch = useDispatch();
  const { aspectRatio } = useWindowDimensions();

  const setLogo = (bool) => dispatch(setLogoIsActive(bool));
  const logoIsActive = useSelector((state) => state.menu.logoIsActive);
  const UIlistening = useSelector((state) => state.menu.UIlistening);

  const renderColoredLogos = () => {
    const logos = [];
    for (let i = 0; i < 3; i++) {
      logos.push(
        <StyledLogo id={`logo_${i + 1}`} key={i} zoom={zoom}>
          <p>simulacra</p>
        </StyledLogo>
      );
    }
    return logos;
  };

  const mouseEnterHandler = (active) => {
    if (!UIlistening) return;
    setLogo(active);
  };

  return (
    <StyledLogoContainer>
      {renderColoredLogos()}
      <StyledLogo id="logo_stroke" zoom={zoom} isActive={logoIsActive}>
        <p>simulacra</p>
        <svg
          className="simulacra_logo_stroke"
          width="100%"
          height="100%"
          onMouseEnter={() => mouseEnterHandler(true)}
          onMouseLeave={() => mouseEnterHandler(false)}
        >
          {aspectRatio > 0.8 && aspectRatio < 1.4 ? (
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
