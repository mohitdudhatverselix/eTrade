import { NextPage } from 'next'
import TopCampaign from './TopCampaign';
import HeaderTop from './HeaderTop';
import NavbarMenu from './NavbarMenu';
import BottomCampaign from './BottomCampaign';
import { FC } from 'react';

interface Props {
    style: number;
    TopCampaignBoolean:boolean;
}

const Header: NextPage<Props> = ({style ,TopCampaignBoolean}) => {
  return (
    <header className={`header axil-header header-style-${style}`}>
      {TopCampaignBoolean && <TopCampaign />}
      <HeaderTop />
      <NavbarMenu />
      {!TopCampaignBoolean && <BottomCampaign />}
    </header>
  )
}
Header.defaultProps = {
  TopCampaignBoolean: false,
    /* style 1 =  "thin" and style 5 = "thick" */
    style: 5,
  };

export default Header;