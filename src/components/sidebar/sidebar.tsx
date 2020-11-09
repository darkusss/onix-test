import React from 'react';
import sidebarLogo from '../../images/sidebar_logo.svg';
import search from '../../images/Search@3x.svg';
import smile from '../../images/smile.png';
import './sidebar.scss';


const Sidebar: React.FC<{sidebarState: boolean, changeSidebarState: Function}> = ({sidebarState, changeSidebarState}) => {
    return (
        <div className="wrapper">
            <div className={`sidebar ${sidebarState ? 'active' : ''}`}>
                <div className="sidebar__brand">
                    <img className="" src={sidebarLogo} alt="sidebar-logo"/>
                    <h4>PROJECTUS</h4>
                    <img src={search} alt="search"/>
                    <div className="circle" onClick={() => changeSidebarState(!sidebarState)}/>
                </div>
                <div className="sidebar__about">
                    <img className="image" src={smile} alt="smile"/>
                    <div>
                        <p className="name">Jean Gonzales</p>
                        <p className="position">Product Owner</p>
                    </div>
                    <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="sidebar__info">
                    <div>
                        <p className="count">372</p>
                        <p className="task">Completed Tasks</p>
                    </div>
                    <div>
                        <p className="count">11</p>
                        <p className="task">Open Tasks</p>
                    </div>
                </div>
                <nav>
                    <ul className="sidebar__menu">
                        <li className="menu__link">Menu</li>
                        <li className="menu__link">Home</li>
                        <li className="menu__link">My Tasks</li>
                        <li className="menu__link">Notifications <span>3</span></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;