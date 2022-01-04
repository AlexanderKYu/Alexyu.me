import React from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './AboutElements'

const About = (AboutObject) => {
    return (
        <>
            <AboutContainer LightBG = { AboutObject.lightBG } id = { AboutObject.id }>
                <AboutWrapper>
                    <AboutRow imgStart = { AboutObject.imgStart }>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText = { AboutObject.lightText }>{AboutObject.headline}</Heading>
                                <Subtitle darkText = { AboutObject.darkText }>{AboutObject.description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={ AboutObject.img }/>
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer> 
        </>
    )
}

export default About
