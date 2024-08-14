import './index.scss'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SitePath from '../../enums/path.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons'
import Button from '../Button'

const TopBar = () => {
    const [showNav, setShowNav] = useState(false);

    return ( 
        <div className='nav'>
            <nav class="left">
                <NavLink 
                    activeclassname="active"
                    className="nav-link"
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <span class="nav-link-span">Home</span>
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="nav-link"
                    to={`/${SitePath.PORTFOLIO}`}
                    onClick={() => setShowNav(false)}
                    >
                    <span class="nav-link-span">Portfolio</span>
                </NavLink> 
                <NavLink
                    activeclassname="active"
                    className="nav-link"
                    to={`/${SitePath.CAREER}`}
                    onClick={() => setShowNav(false)}
                    >
                    <span class="nav-link-span">Career</span>
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="nav-link"
                    to={`/${SitePath.EDUCATION}`}
                    onClick={() => setShowNav(false)}
                    >
                    <span class="nav-link-span">Education</span>
                </NavLink>   
            </nav>
            <nav class="right">
                <a
                    className="nav-icons"
                    href="https://www.linkedin.com/in/pedro-frederico-silva/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        color="#ffffff"
                        className="anchor-icon fa-xl"
                    />
                </a>
                <a
                    className="nav-icons"
                    href="https://github.com/FredSilva92"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon
                    icon={faGithub}
                    color="#ffffff"
                    className="anchor-icon fa-xl"
                    />
                </a>
                <a
                    className="nav-icons"
                    href="https://www.instagram.com/fredsilva9272/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon
                    icon={faInstagram}
                    color="#ffffff"
                    className="anchor-icon fa-xl"
                    />
                </a>
                <div className="btn">

                    <Button urlName={SitePath.LETS_CONNECT} onClickBtn={setShowNav} />
                </div>
            </nav>

        </div>        
    );
}


export default TopBar