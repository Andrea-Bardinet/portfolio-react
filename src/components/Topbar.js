import '../styles/Topbar.css'
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../imgs/AB_logo.png'

const Topbar = (props)=>{




    return (
        <div className='Topbar'>
                <div>
                    {props.end !== true  && 
                    <FontAwesomeIcon
                        className="arrow-img"
                        // size='xl'
                        icon={faArrowAltCircleDown}
                        onClick={props.pageUp}
                        alt='icon page down'
                    />}
                    <FontAwesomeIcon
                        className="arrow-img"
                        // size='xl'
                        icon={faArrowAltCircleUp}
                        onClick={props.pageDown}
                        alt='icon page up'
                    />
                </div>
                <h2>{props.title}</h2>
                {/* <img src={logo}></img> */}
            </div>
    )
}

export default Topbar;