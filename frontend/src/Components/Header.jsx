import React from "react";
import { useEffect } from "react";
import { NavbarMenu, stickyHeaderMenu } from "./";
import { BottomCampaign } from "./BottomCampaign";
import { HeaderTop } from "./HeaderTop";
import { TopCampaign } from "./TopCampaign";
import { useLocation } from "react-router-dom";
const Header = (props) => {
  const location = useLocation();

  const currentPath = location.pathname;
  useEffect(() => {
    stickyHeaderMenu();
    // menuLinkActive(currentPath);
  }, []);
  return (
    <header className={`header axil-header header-style-${props.style}`}>
      {props.TopCampaign && <TopCampaign />}
      <HeaderTop />
      <NavbarMenu />
      {!props.TopCampaign && <BottomCampaign />}
    </header>
  );
};

Header.defaultProps = {
  TopCampaign: false,
  /* style 1 =  "thin" and style 5 = "thik" */
  style: 5,
};
export default Header;
