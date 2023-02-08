import '../styles/Landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion"
import { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
let IMGS = importAll(require.context('../imgs/andrea', false, /\.(png|jpe?g|svg)$/));
 let keyIMGS = Object.keys(IMGS);
// drop your preffered shuffle algorithm here
keyIMGS.sort(function(a,b) {return Math.random() - 0.5;});
console.log(IMGS);

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


    useEffect(() => {
        props.scrollManager.down = '/'
        props.scrollManager.up = '/skills'
    })

    const MySwal = withReactContent(Swal)
    const aboutImgs = ()=>{
        MySwal.fire({
            // title: <h1>About the images</h1>,
            html: <p>These images were generated with <a href="https://github.com/AUTOMATIC1111/stable-diffusion-webui" >Stable Diffusion</a> from a description of myself. Then I varied the styles to get different renders.</p>
          })
    }

    return (

        <motion.div className='Landing page'
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}

            >
            <div className='speech'>
                <h1>Andréa Bardinet</h1>
                <h2>Web Developer</h2>
                <p>
                    I'm a {getAge("12/26/2000")} years old developer. I'm working on my own on differents techs and projects, currently more focused on web development.

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
                    {Object.keys(keyIMGS).map((key) => {

                        return (
                            <div key={key}>
                                <img src={IMGS[keyIMGS[key]]} />
                            </div>)
                    })}
                </Carousel>


                <FontAwesomeIcon
                    className="question-img"
                    size='xl'
                    icon={faCircleQuestion}
                    onClick={aboutImgs} />


            </div>

            {/* <div className='img-wrapper'>
                    <img src={IMGS[currentImg]}></img>
                </div> */}
        </motion.div>

    )
}



export default Landing;