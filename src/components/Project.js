import '../styles/Project.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '@sweetalert2/theme-dark/dark.scss';


const Project = (props) => {


  const data = props.data
  const MySwal = withReactContent(Swal)

  const seeMore = (e) => {
    MySwal.fire({
      title: data.title,
      text: data.description,
      footer: data.date,
      showCancelButton: true,
      confirmButtonText: 'See website',
      cancelButtonText: `Back`
    }).then((result)=>{
      if(result.isConfirmed){ 
        window.open(data.link, '_blank');
      }
    })

  }



const line = {
    initial: {
        x: '-100vw'
    },
    animate: {
        x: 0
    }
}

  return (

    <motion.div
    variants={line}
    className='Projet'>
      <h3>{data.title}</h3>
      <p>{data.date}</p>
      <span
        className='more-button'
        onClick={seeMore}
      >
        <p>See more </p>
        <FontAwesomeIcon
          className="eye-img"
          size='xl'
          icon={faEye}

        />
      </span>
    </motion.div>
  )
}

export default Project;



/* 
const MySwal = withReactContent(Swal)

*/