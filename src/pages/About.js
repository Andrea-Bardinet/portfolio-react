import { useEffect } from 'react'
import '../styles/About.css'
import { motion } from "framer-motion"
import Topbar from '../components/Topbar'


const About = (props)=>{

    useEffect(() => {
        props.scrollManager.down = '/project'
        props.scrollManager.up = '/about'
    })

    return (
        <motion.div className='About page'
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}>

            <Topbar title='Ad deserunt.' pageUp={props.pageUp} pageDown={props.pageDown}></Topbar>

            

        </motion.div>
    )
}


export default About;