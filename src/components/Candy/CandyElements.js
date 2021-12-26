import styled from 'styled-components'
import { MdKeyboardArrowDown, MdArrowDownward } from 'react-icons/md'

export const CandyContainer = styled.div`
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`

export const CandyBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBackground = styled.video`
    position: absolute;
    z-index: 0;
    background: url(mel.jpg) no-repeat;
    background-size: 100% 100%;
    top: 0px;
    left: 0px; 
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;

    /* @media screen and (max-width: 760px){
        display: none;
    } */
`

export const CandyContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CandyH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 760px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }

`

export const CandyP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 760px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const CandyBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowDownLine = styled(MdKeyboardArrowDown)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowDown = styled(MdArrowDownward)`
    margin-left: 8px;
    font-size: 20px;
`