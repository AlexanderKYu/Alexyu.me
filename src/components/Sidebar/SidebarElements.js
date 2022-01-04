import styled from 'styled-components'
import { Link as LScroll } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import logo from '../../images/alex_logoblack.png'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgb(17, 18, 22);
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.2s ease-in-out;
    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    left: ${({ isOpen }) => (isOpen ? '0' : '100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.8rem;
    right: 1.2rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #fff;
    margin: 0;
    padding: 0;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        gird-template-rows: repeat(5, 60px);
    }
`

export const SidebarLink = styled(LScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    

    &:hover {
        color: #000;
        transition: 0.2s ease-in-out;
    }
`

export const ImageWrapper = styled.div`
    background-image: url(${ logo });
    background-size: 100% 100%;
    margin: auto;
    height: 100px;
    width: 100px;
`