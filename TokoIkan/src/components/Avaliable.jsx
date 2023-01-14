import React from 'react'
import GooglePlay from './GooglePlay'
import AppStore from './AppStore'
import Courrier from '../assets/courrier.png'
import BgRedFull from '../assets/background-red-full.png';
import styled from 'styled-components';

const Container = styled.div`
    background-image: url(${BgRedFull});
    display: flex;
    padding-block: 115px;
    margin-bottom: 110px;
    position: relative;
`

const ImageCourrer = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
`

const ContainerInfo = styled.div`
    margin-left: 169px;
    max-width: 590px;
`

const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
    letter-spacing: 0.016em;
    color: #FFFFFF;
`

const Subtitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 180%;
    letter-spacing: 0.016em;
    color: #FFFFFF;
    margin-top: 20px;
    margin-bottom: 30px;
`

const ContainerDownload = styled.div`
    display: flex;
    gap: 25px;
`

const Avaliable = () => {
    return (
        <Container>
            <ContainerInfo>
                <Title>Available and Download Anytime!</Title>
                <Subtitle>A Lorem Ipsum is simply dummy text of the printing and </Subtitle>
                <ContainerDownload>
                    <GooglePlay />
                    <AppStore />
                </ContainerDownload>
            </ContainerInfo>
            <ImageCourrer src={Courrier} alt="kang paket" />
        </Container>
    )
}

export default Avaliable