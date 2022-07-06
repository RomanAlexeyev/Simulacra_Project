import { useSelector } from "react-redux";

import { StyledOuterLayout } from "./styled/OuterLayout.styled";
import LaptopContainer from "./LaptopContainer";
import AuthorContainer from "./AuthorContainer";

function OuterLayout({ menuItem }) {

  const zoom = useSelector((state) => state.menu.zoom);

  return (
    <StyledOuterLayout zoom={zoom}>
      <LaptopContainer zoom={zoom} />
      <AuthorContainer zoom={zoom} menuItem={menuItem} />
    </StyledOuterLayout>
  );
}

export default OuterLayout;
