import React from 'react'
import { ProjectContainer, ProjectWrapper, TextWrapper, Heading, CardContainer, Link, CardWrapper, CardH1, CardP, CardFooter } from './ProjectElements'

const Project = (ProjectObject) => {
    return (
        <>
            <ProjectContainer id = { ProjectObject.id }>
                <ProjectWrapper>
                    <TextWrapper>
                        <Heading lightText = { ProjectObject.lightText }>{ProjectObject.headline}</Heading>
                    </TextWrapper>
                    <CardContainer>
                    <CardWrapper>
                            <CardH1>
                                <Link href="https://github.com/AlexanderKYu/AlexanderKYu.github.io" target="_blank">Digital Twin Tags</Link>
                            </CardH1>
                            <CardP>
                                A project where tags can be applied to an object to help generate digital twin of the physical object.
                            </CardP>
                            <CardFooter>
                                React.js, Chakra UI, Eliko, Flask, AWS RDS
                            </CardFooter>
                        </CardWrapper>
                        <CardWrapper>
                            <CardH1>
                                <Link href="https://github.com/AlexanderKYu/AlexanderKYu.github.io" target="_blank">Portfolio</Link>
                            </CardH1>
                            <CardP>
                                Designed and personalized a website!
                            </CardP>
                            <CardFooter>
                                React.js
                            </CardFooter>
                        </CardWrapper>
                        <CardWrapper>
                            <CardH1>
                                <Link href="https://github.com/AlexanderKYu/graphical" target="_blank">Graphical</Link>
                            </CardH1>
                            <CardP>
                                A two-dimensional graph visualiser, integrator and root finder.
                            </CardP>
                            <CardFooter>
                                JavaScript, HTML, CSS, Mathjs
                            </CardFooter>
                        </CardWrapper>
                        <CardWrapper>
                            <CardH1>
                                Junglo
                            </CardH1>
                            <CardP>
                                A mobile application that educates users about the stock market through a social media platform.
                            </CardP>
                            <CardFooter>
                                React-Native (Android)
                            </CardFooter>
                        </CardWrapper>
                        <CardWrapper>
                            <CardH1>
                                Options Diagram
                            </CardH1>
                            <CardP>
                                A web application where traders can create payoff charts for a portfolio of options.
                            </CardP>
                            <CardFooter>
                                React, Apexcharts, Mathjs
                            </CardFooter>
                        </CardWrapper>
                    </CardContainer>
                </ProjectWrapper>
            </ProjectContainer> 
        </>
    )
}

export default Project