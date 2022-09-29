import './Toast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Toast = ({ isCompleted, setIsCompleted }) => {
    return (
        <>
        {
            isCompleted && 
            <div className="toast">
                <div className="toast-head">
                    <img src="./images/app_logo.png" alt=""/>
                    <FontAwesomeIcon 
                        className="icon"
                        icon={ faXmark }
                        onClick={() => setIsCompleted(false)}
                    />
                </div>
                <div className="toast-body">
                    <hr/>
                    <p>Congratulation..! You have completed your today's activity.</p>
                </div>    
            </div>
        }
        </>
    );
};

export default Toast;