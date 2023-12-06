import React, { useState } from 'react';
import Careers from '../Careers/Careers';

function Navbar({ onComponentChange }) {
    const [showAppointment, setShowAppointment] = useState(false);

    const handleCloseAppointment = () => setShowAppointment(false);
    const handleShowAppointment = () => setShowAppointment(true);


    const [activeNavItem, setActiveNavItem] = useState('home');

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
        onComponentChange(item, '');
    };
    return (
        <div>
            <Careers show={showAppointment} handleClose={handleCloseAppointment}/>
        <nav className="navbar navbar-expand-lg sticky-navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <img src="assets/images/logo/TVI.png" className="logo-light tvilogo" alt="logo" style={{ maxHeight: '60px', marginLeft: '110px' }} />
                    <img src="assets/images/logo/TVI.png" className="logo-dark tvilogo" style={{ maxHeight: '80px'}} />
                </a>
                <button className="navbar-toggler" type="button">
                    <span className="menu-lines"><span></span></span>
                </button>
                <div className="collapse navbar-collapse" id="mainNavigation">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav__item">
                            <a href="#" className={`nav__item-link ${activeNavItem === 'home' ? 'active' : ''}`} onClick={() => handleNavItemClick('home')}>Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className={`nav__item-link ${activeNavItem === 'about' ? 'active' : ''}`} onClick={() => handleNavItemClick('about')}>About Us</a>
                        </li>

                        <li className="nav__item has-dropdown" style={{ display: 'none' }}>
                            <a href="#" data-toggle="dropdown" className="dropdown-toggle nav__item-link">Doctors</a>
                            <ul className="dropdown-menu">
                                <li className="nav__item">
                                    <a href="#" className="nav__item-link">Doctors Timetable</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__item-link">Our Doctors Standard</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__item-link">Our Doctors Modern</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__item-link">Our Doctors Grid</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__item-link">Single Doctor 01</a>
                                </li>
                                <li className="nav__item">
                                    <a href="#" className="nav__item-link">Single Doctor 02</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav__item">
                            <a href="#" className={`nav__item-link ${activeNavItem === 'news' ? 'active' : ''}`} onClick={() => handleNavItemClick('news')}>News & Media</a>
                        </li>

                    </ul>
                    <button className="close-mobile-menu d-block d-lg-none"><i className="fas fa-times"></i></button>
                </div>
                <div className="d-none d-xl-flex align-items-center position-relative ml-30">
                    <div className="miniPopup-departments-trigger">
                        <span className="menu-lines" id="miniPopup-departments-trigger-icon"><span></span></span>
                        <a>Our Locations</a>
                    </div>
                    <ul id="miniPopup-departments" className="miniPopup miniPopup-departments dropdown-menu">
                        <li className="nav__item">
                            <a href="#" className="nav__item-link">Al Ain</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__item-link">Abu Dhabi</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__item-link">Dubai</a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__item-link">Ras Al khaimah</a>
                        </li>
                    </ul>
                    <a onClick={() => handleNavItemClick('contact')} href="#" className="btn btn__primary btn__rounded ml-30">
                        <i className="icon-call3"></i>
                        <span>Contact us</span>
                    </a>
                    <a onClick={handleShowAppointment} href="#" className="btn btn__primary btn__rounded ml-30">
                        <span>Careers</span>
                    </a>
                </div>
            </div>
        </nav>
        
        </div>
    )
}
export default Navbar