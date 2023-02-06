import '../styles/Landing.css'

import andrea from '../imgs/skills/react.svg'

import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion"
import { useScrollDirection } from 'react-use-scroll-direction'
import { AnimatePresence } from "framer-motion";
import { faPersonWalkingDashedLineArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import react from '../imgs/skills/react.svg'
import express from '../imgs/skills/express.svg'
import symfony from '../imgs/skills/symfony.svg'
import bootstrap from '../imgs/skills/bootstrap.svg'
import c from '../imgs/skills/c.svg'

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const IMGS = importAll(require.context('../imgs/andrea', false, /\.(png|jpe?g|svg)$/));

const getAge = (dateString) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const Landing = (props) => {




    const navigate = useNavigate();
    const { isScrollingUp, scrollTargetRef } = useScrollDirection()


    useEffect(() => {
        props.scrollManager.down = '/'
        props.scrollManager.up = '/skills'
    })



    const scrollEvent = () => {
        console.log("ouee");
        if (!isScrollingUp) {
            navigate('skills')
        }
    }

    document.addEventListener("scroll", scrollEvent);

    return (

        <motion.div className='Landing page'
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}

            onScroll={() => { console.log(); }}>
            <div className='speech'>
                <h1>Andréa Bardinet</h1>
                <h2>Web Developper</h2>
                <p>
                    I'm a {getAge("12/26/2000")} years old developper. I'm working on my own on differents techs and projects, currently more focused on web development.

                </p>
                <FontAwesomeIcon
                    className="arrow-img"
                    size='xl'
                    icon={faArrowAltCircleDown}
                    onClick={props.pageUp} />
            </div>
            <div className='img-wrapper'>
                
                <Carousel
                    className='carousel'
                    infiniteLoop={true}
                    autoPlay={true}
                    showArrows={false}
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    // verticalSwipe="natural"
                    swipeable={false}

                >
                    {Object.keys(IMGS).map((key) => {

                        return (
                            <div key={key}>
                                <img src={IMGS[key]} />
                            </div>)
                    })}
                </Carousel>


                <FontAwesomeIcon
                    className="question-img"
                    size='xl'
                    icon={faCircleQuestion}
                    onClick={props.pageUp} />


            </div>

            {/* <div className='img-wrapper'>
                    <img src={IMGS[currentImg]}></img>
                </div> */}
        </motion.div>

    )
}



export default Landing;