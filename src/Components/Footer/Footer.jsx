import { Link } from 'react-router-dom'
import React, { useState, useRef, useContext } from 'react'


import Calendar from './Calendar/Calendar'


import './Footer.scss'
import Notifs from './Notifs/Notifs'
import nbVisitContext from '../../../context/nbVisitContext'

const Footer = ({ show, setShow, top, setTop, calendarBottom, setCalendarBottom, showCalendar, setShowCalendar, notifRight, setNotifRight, iconeNotif, setIconeNotif, showNotif, setShowNotif, closeAll, changLanguage, language, moonSun, darkmode, darkMode, optionColor, optionColorHover, setArrayNotifs, arrayNotifs }) => {

    //click on Window <i>


    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();


    const showList = () => {
        if (show === false) {
            setShow(true);
            setTop(-335);
            setShowCalendar(false);
            setCalendarBottom("-6000%");
            setShowNotif(false);
            setNotifRight("-100%");
            setIconeNotif(<i className="fas fa-comment-alt"></i>)
        } else {
            setShow(false);
            setTop(800);
        }
    }

    const closeList = () => {
        setNbVisit(1)
        setShow(false);
        setTop(800);
    }

    const { nbVisit, setNbVisit } = useContext(nbVisitContext)


    //direct hour
    setInterval(() => {
        let hours = new Date();
        let heure = hours.getHours();
        let minutes = hours.getMinutes();
        let secondes = hours.getSeconds();
        setHour(heure);
        if (parseInt(secondes) < 10) {
            setSecond('0' + secondes);
        } else {
            setSecond(secondes);
        }
        if (parseInt(minutes) < 10) {
            setMinute('0' + minutes);
        } else {
            setMinute(minutes);
        }
        if (parseInt(heure) < 10) {
            setHour('0' + heure);
        } else {
            setHour(heure);
        }
    }, 1000);


    const showCale = () => {
        if (showCalendar === true) {
            // console.log('false');
            setShowCalendar(false);
            setCalendarBottom("-6000%");
        } else {
            // console.log(true);
            setShowCalendar(true);
            setCalendarBottom("100%");
            setShow(false);
            setTop(800);
            setShowNotif(false);
            setNotifRight("-100%");
            setIconeNotif(<i className="fas fa-comment-alt"></i>)
        }
    }


    const showNotifs = () => {
        if (showNotif === true) {
            // console.log('false');
            setShowNotif(false);
            setNotifRight("-100%");
            setIconeNotif(<i className="fas fa-comment-alt"></i>)
        } else {
            // console.log(true);
            setShowNotif(true);
            setNotifRight("0%");
            setIconeNotif(<i className="far fa-comment-alt"></i>)
            setShowCalendar(false);
            setCalendarBottom("-6000%");
            setShow(false);
            setTop(800);
        }
    }

    const option = useRef()
    const changeOptionColorHover = () => {
        if (darkmode === true) {
            option.current.style.backgroundColor = optionColorHover
        } else {
            option.current.style.backgroundColor = optionColorHover
        }
    }

    const changeOptionColor = () => {
        if (darkmode === true) {
            option.current.style.backgroundColor = optionColor
        } else {
            option.current.style.backgroundColor = optionColor
        }
    }

    const ShowSocials = () => {

    }

    return (
        <div id="footer">
            <footer className="footer">
                <ul>
                    <li className="windows" onClick={showList}><i className="fab fa-windows"></i></li>
                    <li className="hour" onClick={showCale}>{hour}<span className="blink">:</span>{minute}</li>
                    <li className="comment" onClick={showNotifs}>
                        {iconeNotif}
                        <span className="nbr-notif">
                            {arrayNotifs.length !== 0 ? arrayNotifs.length : ""}
                        </span>
                    </li>
                    <Link to="/" onClick={closeAll} ><li className="home"></li></Link>
                </ul>
                <div
                    className="calendar"
                    style={{
                        bottom: calendarBottom
                    }}>
                    <Calendar hour={hour} minute={minute} second={second} />
                </div>
                <div
                    className="showList"
                    style={{
                        top: top + '%'
                    }}
                >
                    <ul className="listShow">
                        <li><Link to="/competences" onClick={closeList} ><i className="fas fa-database"></i>  Compétences</Link></li>
                        <li><Link to="/realisations" onClick={closeList} ><i className="fas fa-pen-fancy"></i>  Réalisations</Link></li>
                        {/* <li><Link to="/parcours" onClick={closeList} ><i className="fas fa-road"></i>  Parcours</Link></li> */}
                    </ul>
                </div>
            </footer>
            <div
                className="notifs"
                style={{
                    right: notifRight
                }}
            >
                <Notifs arrayNotifs={arrayNotifs} />
                <div className="icones">
                    <div className="block-option" onClick={darkMode} onMouseOver={changeOptionColorHover} onMouseLeave={changeOptionColor} ref={option}>
                        <div>{moonSun}</div>
                        <span>Mode Sombre</span>
                    </div>
                    <div className="block-option" onClick={ShowSocials}>
                        <div><i className="fas fa-pen"></i></div>
                        <span>Réseaux</span>
                    </div>
                    <div className="block-option" onClick={changLanguage}>
                        <div><i className="fas fa-edit"></i></div>
                        <span>{language}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
