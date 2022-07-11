import { useDispatch } from "react-redux";
import { setMenuItem, setZoom } from "../../../store/menuSlice";

import { StyledAuthorContainer } from "./styled/OuterLayout.styled";

import mainPhoto from "../../../assets/graphic_elements/roman_photo.png";
import coloredBG from "../../../assets/graphic_elements/outer_layout_background.png";

import telegramSkypeIcon from "../../../assets/graphic_elements/contact_icons/telegram_skype_icon.svg";
import gmailIcon from "../../../assets/graphic_elements/contact_icons/gmail_icon.svg";
import githubIcon from "../../../assets/graphic_elements/contact_icons/github_icon.svg";

function AuthorContainer({ zoom, menuItem }) {
  const dispatch = useDispatch();
  const updateZoom = (zoom) => dispatch(setZoom(zoom));
  const updateMenu = (item) => dispatch(setMenuItem(item));

  const leaveAuthor = () => {
    updateMenu(null);
    updateZoom('in');
  }
  
  return (
    <StyledAuthorContainer menuItem={menuItem} zoom={zoom}>
      <div className="colored_bg">
        <img src={coloredBG} style={{ width: "100%", height: "100%" }} alt="" />
      </div>
      <div className="main_photo">
        <img src={mainPhoto} style={{ width: "100%", height: "100%" }} alt="" />
      </div>
      <div className="main_info">
        <h1>My name is Roman</h1>
        <h2>
          I am a front-end developer
          <br />
          and a UI/UX designer
        </h2>
        <div className="contacts">
          <div className="contact phone">
            <img src={telegramSkypeIcon} className="contact_icon" alt="" />
            +7 904 428 69 22
          </div>
          <div className="contact gmail">
            <img src={gmailIcon} className="contact_icon" alt="" />
            alexeyevromandeveloper@gmail.com
          </div>
          <div className="contact github">
            <img src={githubIcon} className="contact_icon" alt="" />
            romanalexeyev
          </div>
        </div>
      </div>
      <div className="return_button_container">
        <div className="return_button" onClick={leaveAuthor}>
          return
        </div>
      </div>
    </StyledAuthorContainer>
  );
}

export default AuthorContainer;
