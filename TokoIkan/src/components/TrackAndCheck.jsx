import React from 'react'
import styled from 'styled-components';
import BgRedFull from '../assets/background-red-full.png';

const Container = styled.div`
    background-image: url(${BgRedFull});
    display: flex;
    margin-bottom: 110px;
`

const ContainerLacak = styled.div`
    flex: 1;
    padding: 57px 86px;
    border-right: 1px solid white;
`

const Title = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 150%;
    letter-spacing: 0.016em;
    color: #FFFFFF;
    text-align: center;
`

const Subtitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.016em;
    color: #FFFFFF;
    margin-top: 25px;
    margin-bottom: 35px;
`

const InputTrack = styled.input`
    background: #FFFFFF;
    border-radius: 15px;
    min-width: 445px;
    min-height: 69px;
    border: none;

    &::placeholder {
        color: #B8B8BA;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.016em;
        padding-inline: 25px;
    }
`

const InputCheck = styled.input`
    background: #FFFFFF;
    border-radius: 15px;
    border: none;
    min-width: 303px;
    min-height: 69px;
    margin-top: 30px;
    margin-bottom: 35px;

    &::placeholder {
        color: #B8B8BA;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 150%;
        letter-spacing: 0.016em;
        padding-inline: 25px;
    }
`

const ButtonTrack = styled.button`
    padding: 20px 60px;
    background: #F2572E;
    border-radius: 15px;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.016em;
    color: #FFFFFF;
    cursor: pointer;
`

const ContainerForm = styled.form`
    display: flex;
    gap: 30px;
    justify-content: space-evenly;
`

const ContainerInput = styled.div`
    display: flex;
    justify-content: space-between;
`

const ButtonCheck = styled.button`
    padding: 20px;
    width: 100%;
    background: #F2572E;
    border-radius: 15px;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0.016em;
    color: #FFFFFF;
    cursor: pointer;
`

const TrackAndCheck = () => {
    return (
        <Container>
            <ContainerLacak>
                <Title>Lacak Pengiriman anda</Title>
                <Subtitle>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text </Subtitle>
                <ContainerForm>
                    <InputTrack type='text' placeholder='Lacak Pengiriman' />
                    <ButtonTrack>Lacak</ButtonTrack>
                </ContainerForm>
            </ContainerLacak>
            <ContainerLacak>
                <Title>Lacak Pengiriman anda</Title>
                <form>
                    <ContainerInput>
                        <InputCheck type='text' placeholder='Origin' />
                        <InputCheck type='text' placeholder='Destination' />
                    </ContainerInput>
                    <ButtonCheck>Lacak</ButtonCheck>
                </form>
            </ContainerLacak>
        </Container>
    )
}

export default TrackAndCheck