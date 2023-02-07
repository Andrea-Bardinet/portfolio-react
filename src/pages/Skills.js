import '../styles/Skills.css'

import {  motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Topbar from '../components/Topbar';

import react from '../imgs/skills/react.svg'
import express from '../imgs/skills/express.svg'
import symfony from '../imgs/skills/symfony.svg'
import bootstrap from '../imgs/skills/bootstrap.svg'
import c from '../imgs/skills/c.svg'
import java from '../imgs/skills/java.svg'
import python from '../imgs/skills/python.svg'
import androidStudio from '../imgs/skills/android-studio.svg'
import mariadb from '../imgs/skills/mariadb.svg'
import oracle from '../imgs/skills/oracle.png'
import mongodb from '../imgs/skills/mongodb.svg'
import linux from '../imgs/skills/linux.svg'
import git from '../imgs/skills/git.svg'
import autoit from '../imgs/skills/autoit.svg'
import gimp from '../imgs/skills/gimp.png'

const SKILLS = [
    {
        title: "Web",
        icons: [
            [react, "React"],
            [express, "ExpressJS"],
            [symfony, "Symfony"],
            [bootstrap,"Bootstrap"],
            
        ]
    },
    {
        title: "General Programming",
        icons: [
            [c, "C"],
            [java, "Java"],
            [python, "Python"],
            [androidStudio, "Android Studio"]
        ]
    },
    {
        title: "Databases",
        icons: [
            [mariadb, "MariaDB"],
            [oracle, "Oracle Database"],
            [mongodb, "MongoDB"]
        ]
    },
    {
        title: "Other Tools",
        icons: [
            [linux, "Linux"],
            [git, "Git"],
            [autoit, "AutoIt"],
            [gimp, "GIMP"]
        ]
    }
]
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


const SkillIcon = (props) => {
    return (
        <motion.div

            className="SkillIcon"
        >
            <img src={props.src[0]} /* title={props.src[1]} */ alt={"Logo of " + props.src[1]}></img>
            <p>{props.src[1]}</p>
        </motion.div>
    )
}

const Skill = (props) => {

    return (

            <motion.div

                variants={variants.line}
                className="Skill page"
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

           <Topbar title='Skills' pageUp={props.pageUp} pageDown={props.pageDown}></Topbar>


            <div className='flex-container'>
                <div className='speech'>
                <p>Here are the tools I master. I'm constantly trying to improve my projects by looking for the latest innovations that can benefit me.</p> 
                </div>
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={variants.containerLine}
                >
                    {Object.keys(SKILLS).map((key) => {
                        return <Skill key={key} skill={SKILLS[key]}></Skill>
                    })}
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Skills;


