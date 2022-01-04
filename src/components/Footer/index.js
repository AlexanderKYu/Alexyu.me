import React from 'react'
import { FooterContainer, Img, FooterText } from './FooterElements'

export const Footer = (FooterObject) => {
    return (
        <>
            <FooterContainer>
                <Img src={FooterObject.img}/>
                <FooterText>{FooterObject.text}</FooterText>
            </FooterContainer>
        </>
    )
}

export default Footer