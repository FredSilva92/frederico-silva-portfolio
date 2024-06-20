import { NavLink } from 'react-router-dom'
import './index.scss'

const Button = ({urlName, onClickBtn}) => {

    return (
        <button className='my-btn'>
            <NavLink
                    activeclassname="active"
                    to= {`/${urlName}`}
                    onClick={() => onClickBtn(false)}
                >
                <span className='nav-link-btn'>Lets Connect</span>
            </NavLink> 
        </button>
    );
}

export default Button;