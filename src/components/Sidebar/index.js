import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarNavLink,
  ExternalLink
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const handleOutsideClick = () => {
    toggle();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={handleOutsideClick}>
      <SidebarWrapper onClick={stopPropagation}>
        <Icon onClick={toggle} aria-label="Close sidebar" tabIndex={0}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="participation" onClick={toggle}>Participation</SidebarLink>
          <SidebarLink to="tracks" onClick={toggle}>Tracks</SidebarLink>
          <SidebarLink to="faq" onClick={toggle}>FAQ</SidebarLink>
          <SidebarNavLink to="/code" onClick={toggle}>Code Of Conduct</SidebarNavLink>
          <ExternalLink href="/2024Recap/index.html" onClick={toggle}>2024 Recap</ExternalLink>
          <ExternalLink href="/2023Recap/index.html" onClick={toggle}>2023 Recap</ExternalLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/devfolio" onClick={toggle}>Register Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
