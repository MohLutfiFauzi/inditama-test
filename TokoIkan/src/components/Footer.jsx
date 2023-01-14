import React from 'react'
import Logo from '../assets/logo.png'
import FB from '../assets/facebook.png'
import IG from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'
import styled from 'styled-components'

const FooterV = styled.footer`
    margin: 0 168px 50px 168px;
`

const Reserved = styled.p`
    text-align: center;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    color: #807D7D;
`

const ContainerNavFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 76px;
`

const Container1 = styled.div`
    max-width: 490px;
`

const Info = styled.p`
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    display: flex;
    align-items: center;
    letter-spacing: 0.016em;
    color: #807D7D;
    margin-top: 15px;
    margin-bottom: 35px;
`

const ContainerSocialMedia = styled.div`
    display: flex;
    gap: 20px;
`

const Title = styled.h4`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.016em;
    color: #0D0D0D;
    margin-bottom: 14px;
`

const UL = styled.ul`
    list-style: none;
`

const LI = styled.li`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 50px;
    color: #807D7D;
`

const Footer = () => {
    return (
        <FooterV>
            <ContainerNavFooter>
                <Container1>
                    <img src={Logo} />
                    <Info>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard.</Info>
                    <ContainerSocialMedia>
                        <img src={FB} />
                        <img src={IG} />
                        <img src={Twitter} />
                    </ContainerSocialMedia>
                </Container1>
                <Container1>
                    <Title>Menu Bantuan</Title>
                    <UL>
                        <LI>Keunggulan</LI>
                        <LI>Fitur Aplikasi</LI>
                        <LI>Testimoni</LI>
                    </UL>
                </Container1>
                <Container1>
                    <Title>Informasi kontak</Title>
                    <UL>
                        <LI>0812-9797-1227</LI>
                        <LI>0812-9797-1227</LI>
                        <LI>Jbgtranshipping@gmail.com</LI>
                    </UL>
                </Container1>
            </ContainerNavFooter>
            <Reserved>All rights reserved@2022</Reserved>
        </FooterV>
    )
}

export default Footer