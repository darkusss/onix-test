import React from 'react';
import './main.scss';
import weather from '../../images/weather.jpg';
import checkbox from '../../images/checkbox.svg';

const Main = () => {
    return (
        <main className="main">
            <div className="main__inner">
                <h3>Today</h3>
                <div className="messages">
                    <div className="message">
                        <div className="message__done">
                            <img src={checkbox} alt="checkbox"/>
                        </div>
                        <p className="message__text">
                            Darika Samak mark as done Listing on Product Hunt so that we can
                            reach as many potential users
                        </p>
                        <div className="message__time">8:40 PM</div>
                    </div>
                    <div className="message">
                        <div className="message__comment">
                            <img src={checkbox} alt="checkbox"/>
                        </div>
                        <p className="message__text">
                            Emilee Simchenko commented on Account for teams and personal in bottom style
                            <p className="message__description">
                                During a project build, it is necessary to evaluate the product design and development
                                against project requirements and outcomes
                            </p>
                        </p>

                        <div className="message__time">8:40 PM</div>
                    </div>
                    <div className="message">
                        <div className="message__upload">
                            <img src={checkbox} alt="checkbox"/>
                        </div>
                        <p className="message__text">
                            Darika Samak uploaded 4 files on An option to search in current
                            projects or in all projects
                            <div className="message__images">
                                <img className="message__image" src={weather} alt="weather"/>
                                <img className="message__image" src={weather} alt="weather"/>
                                <img className="message__image" src={weather} alt="weather"/>
                                <img className="message__image" src={weather} alt="weather"/>
                            </div>
                        </p>
                        <div className="message__time">8:40 PM</div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;