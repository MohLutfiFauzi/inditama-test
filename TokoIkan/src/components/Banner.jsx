import React from 'react'
import AppStore from './AppStore'
import GooglePlay from './GooglePlay'
import BgRed from '../assets/background-red.png'
import Fish1 from '../assets/fish-1.png'
import Phone1 from '../assets/phone-1.png'
import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 134px;
    margin-bottom: 190px;
`

const ContainerInfo = styled.div`
    margin-left: 135px;
    max-width: 600px;
`

const ContainerDownload = styled.div`
    margin-top: 64px;
    margin-bottom: 60px;
    display: flex;
    gap: 25px;
`

const Title = styled.h2`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 130%;
    letter-spacing: 0.016em;
    color: #0D0D0D;
`

const Subtitle = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.016em;
    color: #807D7D;
    margin-top: 25px;
`

const ContainerNumberInfo = styled.div`
    display: flex;
    gap: 50px;
`

const Number = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: 0.016em;
    color: #DC1E23;
`

const InfoNumber = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 180%;
    letter-spacing: 0.016em;
    color: #807D7D;
`

const ContainerHeroBanner = styled.div`
    position: relative;
`

const ImageFish = styled.img`
    position: absolute;
    left: -150px;
    top: -20px;
`

const PhoneImage = styled.img`
    position: absolute;
    left: -150px;
    top: -240px;
`

const Banner = () => {
    return (
        <Container>
            <ContainerInfo>
                <Title>Kirim berbagai jenis ikan dengan mudah</Title>
                <Subtitle>A Lorem Ipsum is simply dummy text of the printing and typesetting industry</Subtitle>
                <ContainerDownload>
                    <GooglePlay />
                    <AppStore />
                </ContainerDownload>
                <ContainerNumberInfo>
                    <div>
                        <Number>1.9k+</Number>
                        <InfoNumber>Active Users</InfoNumber>
                    </div>
                    <div>
                        <Number>20+</Number>
                        <InfoNumber>New Features</InfoNumber>
                    </div>
                </ContainerNumberInfo>
            </ContainerInfo>
            <ContainerHeroBanner>
                <img src={BgRed} />
                <ImageFish src={Fish1} />
                <PhoneImage src={Phone1} />
            </ContainerHeroBanner>
        </Container>
    )
}

export default Banner