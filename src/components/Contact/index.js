import React from 'react'
import { ContactContainer, ContactWrapper, ContactRow, Column1, Column2, TextWrapper, Heading, Subtitle, ImgWrap, Img, Link } from './ContactElements'

const Contact = (ContactObject) => {
    return (
        <>
            <ContactContainer LightBG = { ContactObject.lightBG } id = { ContactObject.id }>
                <ContactWrapper>
                    <ContactRow imgStart = { ContactObject.imgStart }>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText = { ContactObject.lightText }>{ContactObject.headline}</Heading>
                                <Link href="https://www.linkedin.com/in/alexanderkyu/" target = "_blank">LinkedIn</Link>
                                <Link href="https://github.com/AlexanderKYu" target = "_blank">GitHub</Link>
                                <Link href="https://www.facebook.com/alexanderkyu/" target = "_blank">Facebook</Link>
                                <Link href="mailto:alexanderkyu27@gmail.com" target = "_blank">Email</Link>
                                <Subtitle/>
                                <Subtitle darkText = { ContactObject.darkText }>{ContactObject.description}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={ ContactObject.img }/>
                            </ImgWrap>
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer> 
        </>
    )
}

export default Contact