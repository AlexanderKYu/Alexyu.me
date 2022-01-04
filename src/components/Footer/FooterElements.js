import styled from 'styled-components'

export const FooterContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    @media screen and (max-width: 760px){
        width: 90%;
    }
`

export const Img = styled.img`
    width: 70px;
    height: auto;
    margin-left: auto;
`

export const FooterText = styled.p`
    font-size: 12px;
    margin-left: auto;
    margin-bottom: 10px;
`