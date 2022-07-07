import { useSelector } from "react-redux";

import { StyledOuterLayout } from "./components/styled/OuterLayout.styled";
import LaptopContainer from "./components/LaptopContainer";
import AuthorContainer from "./components/AuthorContainer";

function OuterLayout() {

  const menuItem = useSelector((state) => state.menu.menuItem);
  const zoom = useSelector((state) => state.menu.zoom);

  return (
    <StyledOuterLayout zoom={zoom}>
      <LaptopContainer zoom={zoom} />
      <AuthorContainer zoom={zoom} menuItem={menuItem} />
    </StyledOuterLayout>
  );
}

export default OuterLayout;
