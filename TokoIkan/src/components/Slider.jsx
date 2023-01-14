import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import styled from 'styled-components';
import TestimonialItem from './TestimonialItem';
import userImage from '../assets/user.png'
import richards from '../assets/richards.png'
import savanah from '../assets/savanah.png'
import miles from '../assets/miles.png'

const users = [
    {
        name: 'Floyed Miles',
        image: userImage,
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        star: 3.5
    },
    {
        name: 'Ronald Richards',
        image: richards,
        desc: 'ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        star: 4
    },
    {
        name: 'Savannah Nguyen',
        image: savanah,
        desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        star: null
    },
    {
        name: 'Floyed Miles',
        image: miles,
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        star: null
    },
    {
        name: 'Floyed Miles',
        image: miles,
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        star: null
    },
    {
        name: 'Floyed Miles',
        image: miles,
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        star: null
    },
    {
        name: 'Floyed Miles',
        image: miles,
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        star: null
    },

]

const Container = styled.div`
    margin-left: 135px;
`

const Slider = () => {
    return (
        <Container>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                style={{
                    "--swiper-pagination-color": "#D8191E",
                    "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "16px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                }}
            >
                <Container>
                    {
                        users.map((user, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialItem desc={user.desc} star={user.star} name={user.name} image={user.image} />
                            </SwiperSlide >
                        ))
                    }
                </Container>
            </Swiper>
        </Container>
    )
}

export default Slider