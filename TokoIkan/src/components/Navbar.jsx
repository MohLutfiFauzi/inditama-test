import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: 135px;
    margin-top: 46px;
`

const UL = styled.ul`
    display: flex;
    list-style: none;
    gap: 56px;
    position: relative;
    z-index: 9;
`

const Anchor = styled.a`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 180%;
    letter-spacing: 0.016em;
    text-decoration: none;
    color: black;

    &:hover {
        color: #F05830;
    }
`

const Logo = styled.h1`
    font-size: 26px;
    font-weight: 500;
    color: #F2572E;
`

const ButtonDownload = styled.button`
    background-color: #DC1E23;
    padding: 16px 24px;
    color: white;
    border-radius: 10px;
    border: none;
    font-weight: 700;
    font-style: normal;
    position: relative;
    z-index: 9;
    cursor: pointer;
`

const Navbar = () => {
    return (
        <Container>
            <Logo>Toko Ikan</Logo>
            <UL>
                <li>
                    <Anchor href='#'>Beranda</Anchor>
                </li>
                <li>
                    <Anchor href='#keunggulan'>Keunggulan</Anchor>
                </li>
                <li>
                    <Anchor href='#fitur'>Fitur Aplikasi</Anchor>
                </li>
                <li>
                    <Anchor href='#testimonial'>Testimonial</Anchor>
                </li>
            </UL>
            <ButtonDownload>
                Download
            </ButtonDownload>
        </Container>
    )
}

export default Navbar