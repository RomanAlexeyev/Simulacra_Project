import { StyledLaptopScreen } from "./styled/Laptop.styled";
import MasterContainer from "./MasterContainer";

function LaptopScreen({ zoom }) {
  return (
    <StyledLaptopScreen zoom={zoom}>
      <MasterContainer zoom={zoom} />
    </StyledLaptopScreen>
  );
}

export default LaptopScreen;
