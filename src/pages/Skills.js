import '../styles/Skills.css'
import andrea from '../imgs/pdp_white.png'

import {  motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Topbar from '../components/Topbar';


const variants = {
 
    containerLine: {
        animate: {
            transition: {
                staggerChildren: 0.3
            }
        }
    },
    line: {
        initial: {

            y: 1000
        },

        animate: {

            y: 0
        }
    }
};




const SKILLS = [
    {
        title: "Aaaaaa",
        icons: [
            andrea,
            andrea,
            andrea,
            andrea,
            andrea
        ]
    },
    {
        title: "Bbbbbb",
        icons: [
            andrea,
            andrea,
            andrea,
            andrea
        ]
    },
    {
        title: "Cccccc",
        icons: [
            andrea,
            andrea,
            andrea,
            andrea,
            andrea,
            andrea
        ]
    },
    {
        title: "Dddddd",
        icons: [
            andrea,
            andrea,
            andrea,
            andrea,
            andrea
        ]
    }
]

const SkillIcon = (props) => {
    return (
        <motion.div

            className="SkillIcon"
        >
            <img src={props.src}></img>
        </motion.div>
    )
}

const Skill = (props) => {

    return (

            <motion.div

                variants={variants.line}
                className="Skill"
            >
                <h3>{props.skill.title}</h3>
                <div>
                    {Object.keys(props.skill.icons).map((key) => {
                        return <SkillIcon key={key} src={props.skill.icons[key]}></SkillIcon>
                    })}
                </div>
            </motion.div>

    )
}

const Skills = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        props.scrollManager.up = '/projects'
        props.scrollManager.down = '/'
    })

    return (
        <motion.div className="Skills"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
        >

           <Topbar title='Ad deserunt.' pageUp={props.pageUp} pageDown={props.pageDown}></Topbar>


            <div className='flex-container'>
                <div className='speech'>
                    Irure Lorem pariatur tempor consequat mollit nulla occaecat. Consectetur irure labore minim sint Lorem non magna tempor labore anim commodo.
                </div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={variants.containerLine}
                >
                    {Object.keys(SKILLS).map((key) => {
                        return <><Skill key={key} skill={SKILLS[key]}></Skill></>
                    })}
                </motion.div>
            </div>

        </motion.div>
    )
}


export default Skills;
