import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, ImageWrapper } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen = { isOpen } onClick = { toggle }>
            <Icon onClick = { toggle }>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick = { toggle }>About</SidebarLink>
                    <SidebarLink to="experience" onClick = { toggle }>Experience</SidebarLink>
                    <SidebarLink to="projects" onClick = { toggle }>Projects</SidebarLink>
                    <SidebarLink to="extracurricular" onClick = { toggle }>Extracurricular</SidebarLink>
                    <SidebarLink to="contact" onClick = { toggle }>Contact</SidebarLink>
                </SidebarMenu>
                <ImageWrapper>
                
                </ImageWrapper>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
