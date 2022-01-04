import styled from 'styled-components'

export const ExtraContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    @media screen and (max-width: 760px){
        padding: 100px 0;
    }
`

export const ExtraWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
`


export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width:440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
`

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

export const CardWrapper = styled.div`
    background: #fff;
    border: 3px solid;
    margin: 15px;
    padding: 10px;
    border-radius: 0 25px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 760px){
        max-width: 300px;
    }
`

export const CardH1 = styled.h1`
    line-height: 50px;
`

export const Link = styled.a`
    color: inherit;
    text-decoration: none;
`

export const CardImgWrapper = styled.div`
    width: 350px;
    height: 100px;
    @media screen and (max-width: 760px){
        width: 250px;
    }
`


export const BBImg = styled.img`
    width: 350px;
    height: 100px;
    object-fit: cover;
    @media screen and (max-width: 760px){
        width: 250px;
    }
`


export const CiscoImg = styled.img`
    width: 350px;
    height: 100px;
    object-fit: scale-down;
    @media screen and (max-width: 760px){
        width: 250px;
    }
`

export const CardP = styled.p`
    font-size: 18px;
    line-height: 24px;
`

export const CardFooter = styled.p`
    font-size: 12px;
    line-height: 24px;
`