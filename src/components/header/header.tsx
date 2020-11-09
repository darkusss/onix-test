import React from 'react';
import logo from '../../images/Shapes@2x.png';
import chatLogo from '../../images/chat.svg';
import smile from '../../images/smile.png';
import './header.scss';

const Header: React.FC<{sidebarState: boolean, changeSidebarState: Function}> = ({sidebarState, changeSidebarState}) => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="brand">
                    <img className="brand__logo" src={logo} alt="logo"/>
                    <h1 className="brand__title">Website Redesign</h1>
                    <div className="dots">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
                <div className="info">
                    <div className="info__images">
                        <img className="info__image" src={smile} alt="smile"/>
                        <img className="info__image" src={smile} alt="smile"/>
                        <img className="info__image" src={smile} alt="smile"/>
                    </div>
                    <div className="info__share">
                        Share
                    </div>
                    <div className="info__chat">
                        <img className="chat__logo" src={chatLogo} alt="chat-logo"/> Chat
                    </div>

                </div>
                <div className="circle" onClick={() => changeSidebarState(!sidebarState)}/>
            </div>
            <div className="header__links">
                <div className="header__link">Tasks</div>
                <div className="header__link">Kanban</div>
                <div className="header__link active">Activity</div>
                <div className="header__link">Calendar</div>
                <div className="header__link">Files</div>
            </div>
        </header>
    );
};

export default Header;