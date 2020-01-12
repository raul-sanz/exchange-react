import React from 'react'
import menu from '../../assets/menu.png'
import { SidebarContainer, Title, Menu } from "./Components";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Title>
        Co-
      </Title>
      <Menu>
        <img src={menu} alt="menu" />
      </Menu>
    </SidebarContainer>
  )
}

export default Sidebar
