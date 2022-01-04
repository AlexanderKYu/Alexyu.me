import React from 'react'
import { ExtraContainer, ExtraWrapper, TextWrapper, Heading, CardContainer, Link, CardWrapper, CardImgWrapper, BBImg, CiscoImg, CardH1, CardP, CardFooter } from './ExtraElements'

const Extra = (ExtraObject) => {
    return (
        <>
            <ExtraContainer id = { ExtraObject.id }>
                <ExtraWrapper>
                    <TextWrapper>
                        <Heading lightText = { ExtraObject.lightText }>{ExtraObject.headline}</Heading>
                    </TextWrapper>
                    <CardContainer>
                        <CardWrapper>
                            <CardH1>
                                <Link href="https://codeinthedarkmtl.dev/" target="_blank">Code-in-the-Dark</Link>
                            </CardH1>
                            <CardP>
                                Hosted by OSEDEA.
                            </CardP>
                            <CardP>
                                Frontend development competition where contestants have to remake a screenshot of a website in HTML and CSS.
                            </CardP>
                            <CardFooter>
                                React.js
                            </CardFooter>
                        </CardWrapper>
                        <CardWrapper>
                            <CardH1>
                                Hack-A-Thons
                            </CardH1>
                            <CardP>
                                UOttaHack (University of Ottawa)
                            </CardP>
                            <CardFooter>
                                February 2020
                            </CardFooter>
                            <CardP>
                                ConUHack (Concordia University)
                            </CardP>
                            <CardFooter>
                                January 2020
                            </CardFooter>
                            <CardP>
                                CUHack (Carleton University)
                            </CardP>
                            <CardFooter>
                                January 2020
                            </CardFooter>
                        </CardWrapper>
                    </CardContainer>
                </ExtraWrapper>
            </ExtraContainer> 
        </>
    )
}

export default Extra