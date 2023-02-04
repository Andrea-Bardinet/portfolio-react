import '../styles/Landing.css'

import andrea from '../imgs/pdp_white.png'

import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion"
import { useScrollDirection } from 'react-use-scroll-direction'
import { AnimatePresence } from "framer-motion";
import { faPersonWalkingDashedLineArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Landing = (props) => {


    const navigate = useNavigate();
    const { isScrollingUp, scrollTargetRef } = useScrollDirection()

    

    useEffect(()=>{
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

            <motion.div className='Landing'
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
         
                onScroll={() => { console.log(); }}>
                <div className='speech'>
                    <h1>Est aliquoioioioip.</h1>
                    <p>
                        Laboris nulla quis eiusmod id nostrud ex. Amet anim nostrud excepteur nostrud.
                    </p>
                    <FontAwesomeIcon
                        className="arrow-img"
                        size='xl'
                        icon={faArrowAltCircleDown}
                        onClick={props.pageUp} />
                </div>
                <div className='img-wrapper'>
                    <img src={andrea}></img>
                </div>
            </motion.div>

    )
}



export default Landing;