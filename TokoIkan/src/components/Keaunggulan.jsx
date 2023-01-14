import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-bottom: 250px;
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

const ContainarCard = styled.div`
    display: flex;
    justify-content: space-around;
`

const Card = styled.div`
    max-width: 440px;;
    padding: 80px 53px;
    border: 1px solid #E7EAEC;
    box-shadow: 25px 25px 100px rgba(166, 161, 157, 0.1);
    text-align: center;
    border-radius: 30px;
`

const CardTitle = styled.h3`
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0.016em;
    color: #0D0D0D;
`

const CardSubtitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.016em;
    color: #807D7D;
`

const Keaunggulan = () => {
    return (
        <Container id='keunggulan'>
            <Title>Keunggulan kami</Title>
            <Subtitle>A Lorem Ipsum is simply dummy text of the printing and typesetting<br />  industry.Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s.</Subtitle>
            <ContainarCard>
                <Card>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="94"
                        height="85"
                        fill="none"
                        viewBox="0 0 94 85"
                    >
                        <rect
                            width="93"
                            height="85"
                            x="0.5"
                            fill="#D8191E"
                            fillOpacity="0.1"
                            rx="12"
                        ></rect>
                        <path
                            fill="#D8191E"
                            d="M44.474 28.404a6.6 6.6 0 014.726 0l10.886 4.174a3.274 3.274 0 012.108 3.063v14.494c0 .663-.2 1.31-.577 1.857-.376.547-.91.967-1.53 1.205L49.2 57.373a6.6 6.6 0 01-4.726 0L33.59 53.197a3.289 3.289 0 01-1.532-1.205 3.275 3.275 0 01-.578-1.857V35.64a3.275 3.275 0 012.11-3.062l10.884-4.174zm3.938 2.041a4.4 4.4 0 00-3.15 0l-3.037 1.166L54.49 36.24l4.273-1.825-10.35-3.972v.002zm11.589 5.819l-12.067 5.16v14.061a4.18 4.18 0 00.478-.153L59.3 51.158A1.096 1.096 0 0060 50.137V36.264zm-14.26 19.22v-14.06l-12.067-5.158v13.869a1.09 1.09 0 00.702 1.021l10.886 4.174c.158.061.316.111.478.153zM34.91 34.414l11.926 5.097 4.748-2.03-12.433-4.694-4.241 1.627z"
                        ></path>
                    </svg>
                    <CardTitle>Kirim ke Berbagai Negara</CardTitle>
                    <CardSubtitle>A Lorem Ipsum is simply dummy text of the printing and typesetting industry</CardSubtitle>
                </Card>
                <Card>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="94"
                        height="85"
                        fill="none"
                        viewBox="0 0 94 85"
                    >
                        <rect
                            width="93"
                            height="85"
                            x="0.5"
                            fill="#D8191E"
                            fillOpacity="0.1"
                            rx="12"
                        ></rect>
                        <g clipPath="url(#clip0_1_58)">
                            <path
                                fill="#D8191E"
                                d="M60.556 44.111a12.424 12.424 0 00-6.514-3.597 18.558 18.558 0 00-3.209-.583c2.723-3.209 2.236-8.07-.972-10.792-3.208-2.722-8.07-2.236-10.792.972-2.722 3.208-2.236 8.07.973 10.792.583.486 1.166.875 1.75 1.07v2.138l-1.556-1.458c-1.361-1.361-3.597-1.361-5.055 0-1.362 1.36-1.459 3.5-.098 4.86l4.473 5.25c.194 1.362.68 2.626 1.36 3.793.487.875 1.167 1.75 1.848 2.43v1.847c0 .584.389.973.972.973h13.222c.486 0 .973-.486.973-.973v-2.527a12.41 12.41 0 002.819-7.875v-5.64c.097-.388 0-.583-.194-.68zm-21.39-9.139A5.627 5.627 0 0145 29.333a5.627 5.627 0 015.639 5.834c0 1.75-.778 3.305-2.139 4.375V34.68a3.305 3.305 0 00-3.306-3.111c-1.75-.098-3.305 1.36-3.305 3.11v5.056c-1.653-.972-2.625-2.82-2.722-4.764zm19.737 15.361c.097 2.528-.778 4.959-2.43 6.903-.195.195-.39.389-.39.68v2.042H44.806v-1.36c0-.292-.195-.584-.39-.779a7.652 7.652 0 01-1.75-2.138c-.583-.973-.972-2.14-1.166-3.306 0-.194-.097-.389-.194-.583l-4.667-5.542a1.61 1.61 0 01-.486-1.167c0-.389.194-.875.486-1.166a1.774 1.774 0 012.333 0l2.82 2.82v2.916l1.847-.972v-14c.097-.681.68-1.264 1.458-1.167.68 0 1.361.486 1.361 1.167v11.18l1.945.389v-4.472c.097-.097.194-.097.291-.195.681 0 1.362.098 2.042.195v4.958l1.556.292v-5.056l1.166.292c.486.097.973.292 1.459.486v4.861l1.555.292V43.43c.875.389 1.653.972 2.334 1.652l.097 5.25z"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_58">
                                <path
                                    fill="#fff"
                                    d="M0 0H35V35H0z"
                                    transform="translate(31 27)"
                                ></path>
                            </clipPath>
                        </defs>
                    </svg>
                    <CardTitle>Mudah Di Gunakan</CardTitle>
                    <CardSubtitle>A Lorem Ipsum is simply dummy text of the printing and typesetting industry</CardSubtitle>
                </Card>
                <Card>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="94"
                        height="85"
                        fill="none"
                        viewBox="0 0 94 85"
                    >
                        <rect
                            width="93"
                            height="85"
                            x="0.5"
                            fill="#D8191E"
                            fillOpacity="0.1"
                            rx="12"
                        ></rect>
                        <path
                            stroke="#D8191E"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M46.5 57.083S58.167 51.25 58.167 42.5V32.292L46.5 27.917l-11.667 4.375V42.5c0 8.75 11.667 14.583 11.667 14.583z"
                        ></path>
                        <path
                            stroke="#D8191E"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M42.125 42.5l2.917 2.917 5.833-5.834"
                        ></path>
                    </svg>
                    <CardTitle>Pengiriman Aman</CardTitle>
                    <CardSubtitle>A Lorem Ipsum is simply dummy text of the printing and typesetting industry</CardSubtitle>
                </Card>
            </ContainarCard>
        </Container>
    )
}

export default Keaunggulan