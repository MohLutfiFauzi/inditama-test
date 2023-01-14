import React from 'react'
import styled from 'styled-components'
import start1 from '../assets/star1.png'
import start2 from '../assets/star2.png'

const Container = styled.div`
    max-width: 410px;
    padding: 30px;
    border: 1px solid #E7EAEC;
    border-radius: 30px;
    text-align: start;
    margin-bottom: 100px;
`

const ContainerImage = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const TitleTesti = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.02em;
    color: #133240;
    margin-block: 20px;
`

const SubtitleTesti = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #807D7D;
`

const TestimonialItem = ({ name, desc, image, star }) => {
    return (
        <Container>
            <ContainerImage>
                <img src={image} />
                {star === 4 ? <img src={start1} /> : star === 3.5 ? <img src={start2} /> : null}
            </ContainerImage>
            <TitleTesti>{name}</TitleTesti>
            <SubtitleTesti>{desc}</SubtitleTesti>
        </Container>
    )
}

export default TestimonialItem