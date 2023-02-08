import { motion } from "framer-motion"
import { useEffect } from 'react';
import '../styles/Projects.css'
import Project from "../components/Project";
import Topbar from "../components/Topbar";

const PROJECTS = [
    {
        title: "DBLOCADATA",
        description: "Website allowing to visually program microcontrollers. The aim is to enable citizens to capture data from their living environment. This is part of a process of appropriation of technologies by the general public.",
        date: "April 2022",
        link: "https://dblocadata.debrouillonet.org"
    },
    {
        title: "SplitMe",
        description: "Useless site to waste your time 😃",
        date: "September 2022",
        link: "https://github.com/TripleLardon/split-me"
    },
    {
        title: "Film database",
        description: "A complete symfony project displaying data from a database containing series. You can create an account, post comments and rate the episodes.",
        date: "January 2022",
        link: "https://github.com/TripleLardon/series-symfony"
    },
    {
        title: "DailyOneFace",
        description: "Python program that posted 2 pictures a day on an instagram account. ",
        date: "January 2021",
        link: "https://www.instagram.com/dailyoneface/"
    },
    {
        title: "C projects",
        description: "Compilation of small projects in C. This includes : A labyrinth generator, a fake french words generator, minesweeper.",
        date: "2019",
        link: "https://github.com/TripleLardon/old-c-projects"
    }


]

const container = {
    animate: {
        transition: {
            staggerChildren: 0.3
        }
    }
};

const Projects = (props) => {

    useEffect(() => {
        props.scrollManager.down = '/skills'
        props.scrollManager.up = '/about'
    })

    return (
        <motion.div className='Projects page'
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}>

            <Topbar title='Projects' pageUp={props.pageUp} pageDown={props.pageDown}></Topbar>

            <motion.div
                initial="initial"
                animate="animate"
                variants={container}
                className="flex-container">
                {Object.keys(PROJECTS).map((key) => {
                    return <Project key={key} data={PROJECTS[key]}></Project>
                })}
            </motion.div>

        </motion.div>
    )
}

export default Projects;
