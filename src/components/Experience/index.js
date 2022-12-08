import React from 'react'
import { WorkContainer, WorkWrapper, TextWrapper, Heading, CardContainer, Link, CardWrapper, CardImgWrapper, BBImg, CiscoImg, CardH1, CardP, CardFooter } from './WorkElements'

const Work = (WorkObject) => {
    return (
        <>
            <WorkContainer id = { WorkObject.id }>
                <WorkWrapper>
                    <TextWrapper>
                        <Heading lightText = { WorkObject.lightText }>{WorkObject.headline}</Heading>
                    </TextWrapper>
                    <CardContainer>
                        <CardWrapper>
                            <CardImgWrapper>
                                <BBImg src={ WorkObject.blackberryImg }/>
                            </CardImgWrapper>
                            <CardH1>
                                <Link href="https://www.blackberry.com/us/en" target="_blank">BlackBerry Limited</Link>
                            </CardH1>
                            <CardP>
                                Software Test Engineer Intern Full-time
                            </CardP>
                            <CardFooter>
                                January 2021 - April 2021
                            </CardFooter>
                        </CardWrapper>
                        <CardWrapper>
                            <CardImgWrapper>
                                <CiscoImg src={ WorkObject.ciscoImg } />
                            </CardImgWrapper>
                            <CardH1>
                                <Link href="https://www.cisco.com/c/en_ca/index.html" target="_blank">Cisco Systems, Inc.</Link>
                            </CardH1>
                            <CardP>
                                Software Engineer Intern Full-time
                            </CardP>
                            <CardFooter>
                                September 2021 - December 2021
                            </CardFooter>
                            <CardFooter>
                                May 2022 - August 2022
                            </CardFooter>
                        </CardWrapper>
                    </CardContainer>
                </WorkWrapper>
            </WorkContainer> 
        </>
    )
}

export default Work
