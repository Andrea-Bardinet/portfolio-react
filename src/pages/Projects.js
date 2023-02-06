import { motion } from "framer-motion"
import { useEffect } from 'react';
import '../styles/Projects.css'
import Project from "../components/Project";
import Topbar from "../components/Topbar";

const PROJECTS = [
    {
        title: "DBLOCADATA",
        description: "Anim ex do esse aliquip laborum cillum veniam anim proident. Ex duis fugiat enim nulla voluptate ut velit proident incididunt aliqua reprehenderit. Dolore sint cillum sit ad ad excepteur culpa est voluptate consequat cupidatat excepteur quis. Exercitation dolor eu ex voluptate proident proident aliqua incididunt aute.",
        date: "April 2022",
        link: "https://dblocadata.debrouillonet.org"
    },
    {
        title: "DailyOneFace",
        description: "Id aute in nisi amet officia. Qui sit sunt pariatur amet officia proident ea tempor duis. Et qui aute pariatur exercitation occaecat cillum aute dolore.",
        date: "January 2021",
        link: "https://www.instagram.com/dailyoneface/"

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

            <Topbar title='Ad deserunt.' pageUp={props.pageUp} pageDown={props.pageDown}></Topbar>

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



// Projets :
//  
// simon
// puissance4
// splitMe
// botVisage
// 
// 
// 
// 
// 
// 
// 