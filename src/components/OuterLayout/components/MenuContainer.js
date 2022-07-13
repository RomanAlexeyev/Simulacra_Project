import { useDispatch, useSelector } from "react-redux";
import { useWindowDimensions } from "../../../custom_hooks";

import {
  setUIlistening,
  setMenuItem,
  setActiveMenuItem,
} from "../../../store/menuSlice";
import { setTheme } from "../../../store/themeSlice";

import {
  StyledMenuContainer,
  StyledMenuItem,
  StyledMenuItemStroke,
} from "./styled/Menu.styled";

const titles = {
  about: "what i am",
  author: "author",
  source: "source code",
};

function MenuContainer({ zoom }) {

  const { aspectRatio } = useWindowDimensions();
  const dispatch = useDispatch();
  const stopUIlistening = () => dispatch(setUIlistening(false));
  const updateMenu = (id) => dispatch(setMenuItem(id));
  const updateActiveItem = (id) => dispatch(setActiveMenuItem(id));
  const updateTheme = (theme) => dispatch(setTheme(theme));

  const UIlistening = useSelector((state) => state.menu.UIlistening);
  const menuItem = useSelector((state) => state.menu.menuItem);
  const menuItemActive = useSelector((state) => state.menu.menuItemActive);

  const menuItemClickHandler = (id) => {
    if (!UIlistening) return;
    stopUIlistening();
    updateMenu(id);
    if (id === "menu_author") {
      updateTheme("dark");
    }
  };

  const menuItemEnterHandler = (id) => {
    if (!UIlistening) return;
    updateActiveItem(id);
  };

  return (
    <StyledMenuContainer>
      {Object.keys(titles).map((title, idx) => {
        let menuItemId = `${"menu_" + title}`;
        let menuStrokeId = `${"menu_" + title + "_stroke"}`;
        return (
          <StyledMenuItem
            id={`${"menu_" + title}`}
            key={idx}
            zoom={zoom}
            visible={!menuItem || menuItem === menuItemId}
          >
            <p>{titles[title]}</p>

            <StyledMenuItemStroke isActive={menuItemId === menuItemActive}>
              <text
                id={menuStrokeId}
                x={`${aspectRatio > 1.4 ? 100 : 50}%`}
                y="78%"
                textAnchor={aspectRatio > 1.4 ? "end" : "middle"}
                fill="transparent"
                onMouseEnter={() => menuItemEnterHandler(menuItemId)}
                onMouseLeave={() => menuItemEnterHandler(null)}
                onClick={() => menuItemClickHandler(menuItemId)}
              >
                {titles[title]}
              </text>
            </StyledMenuItemStroke>
          </StyledMenuItem>
        );
      })}
    </StyledMenuContainer>
  );
}

export default MenuContainer;
