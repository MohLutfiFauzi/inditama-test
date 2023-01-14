import React from 'react'
import BgRed from '../assets/background-red.png'
import Fish4 from '../assets/fish-4.png'
import Phone4 from '../assets/phone-4.png'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 134px;
    margin-bottom: 190px;
`

const ContainerHeroBanner = styled.div`
    position: relative;
`

const ImageFish = styled.img`
    position: absolute;
    left: -200px;
    top: 20px;
`

const PhoneImage = styled.img`
    position: absolute;
    left: -50px;
    top: -170px;
`

const ContainerInfo = styled.div`
    margin-left: 135px;
    max-width: 600px;
`

const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
    letter-spacing: 0.016em;
    color: #0D0D0D;
`

const Subtitle = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.016em;
    color: #807D7D;
    margin-top: 25px;
`

const Schedule = () => {
    return (
        <Container>
            <ContainerInfo>
                <Title>Cek schedule pengiriman anda</Title>
                <Subtitle>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.</Subtitle>
            </ContainerInfo>
            <ContainerHeroBanner>
                <img src={BgRed} />
                <ImageFish src={Fish4} />
                <PhoneImage src={Phone4} />
            </ContainerHeroBanner>
        </Container>
    )
}

export default Schedule