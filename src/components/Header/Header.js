import React from 'react';
import {Logo} from "@dimonkatri4/tiktuk-component-library/";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';
import logo from '../../assets/logo.png';
// import Logo from "./Logo";

const Header = function () {
    return (
        <header className="headerPage">
            <Logo logo={logo} />
            <div className={style.headerButtons}>
                <NavLink to="/profile">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink to="/trends">
                    <FontAwesomeIcon icon={faTiktok} />
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
