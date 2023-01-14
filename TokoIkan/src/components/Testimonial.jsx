import React from 'react'
import styled from 'styled-components'
import Slider from './Slider'

const Container = styled.div`
    margin-bottom: 200px;
`

const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.016em;
    color: #0D0D0D;
`

const Subtitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.016em;
    color: #807D7D;
    margin-bottom: 108px;
    margin-top: 24px;
`

const Testimonial = () => {
    return (
        <Container id='testimonial'>
            <Title>Testimonial</Title>
            <Subtitle>A Lorem Ipsum is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's  standard dummy text </Subtitle>
            <Slider />
        </Container>
    )
}

export default Testimonial