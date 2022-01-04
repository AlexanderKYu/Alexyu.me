import React, { useState } from 'react'
import { CandyContainer, CandyBackground, VideoBackground, CandyContent, CandyH1, CandyP, CandyBtnWrapper, ArrowDown, ArrowDownLine } from './CandyElements'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'

const Candy = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <CandyContainer>
            <CandyBackground>
                <VideoBackground autoPlay loop muted src={Video} type='video/mp4'/>
            </CandyBackground>
            <CandyContent>
                <CandyP>
                    Hello There! I'm
                </CandyP>
                <CandyH1>
                    Alexander Yu
                </CandyH1>
                <CandyBtnWrapper>
                <Button to='about' onMouseEnter={ onHover } onMouseLeave={ onHover } primary='false' dark='false'>
                    Learn More {hover ? <ArrowDown/> : <ArrowDownLine/>}
                </Button>
            </CandyBtnWrapper>
            </CandyContent>
        </CandyContainer>
    )
}

export default Candy
