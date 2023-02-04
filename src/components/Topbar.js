import '../styles/Topbar.css'
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Topbar = (props)=>{




    return (
        <div className='Topbar'>
                <div>
                    <FontAwesomeIcon
                        className="arrow-img"
                        size='xl'
                        icon={faArrowAltCircleDown}
                        onClick={props.pageUp}
                    />
                    <FontAwesomeIcon
                        className="arrow-img"
                        size='xl'
                        icon={faArrowAltCircleUp}
                        onClick={props.pageDown}
                    />
                </div>
                <h2>{props.title}</h2>
            </div>
    )
}

export default Topbar;