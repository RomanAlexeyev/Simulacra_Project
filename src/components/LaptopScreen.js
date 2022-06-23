import { StyledLaptopScreen } from "./styled/Laptop.styled";
import MasterContainer from "./MasterContainer";

function LaptopScreen({ zoom, menuItem, setMenuItem }) {
  return (
    <StyledLaptopScreen zoom={zoom}>
      <MasterContainer
        zoom={zoom}
        menuItem={menuItem}
        setMenuItem={setMenuItem}
      />
    </StyledLaptopScreen>
  );
}

export default LaptopScreen;
