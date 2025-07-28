import { useState, useEffect } from 'react'
import { redirect, useLocation } from 'react-router-dom'

// import Svg from './Svg/Svg'

import userLogin from '../../Images/user-login.png'

import './Login.scss'

const Login = ({ isLogin, setIsLogin, setArrayNotifs, arrayNotifs, setSwitch, setSwitchSvg }) => {

    let location = useLocation()

    useEffect(() => {
        if (location.pathname === "/login") {
            document.getElementById("footer").style.display = "none"
        }
        // console.log(location.pathname);
    }, [location])

    const [code] = useState(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000)

    const [formFields, setFormFields] = useState({
        code: code
    })


    const [bottomInfos, setBottomInfos] = useState(10)
    const [topIndice, setTopIndice] = useState(2)
    const [topSvg, setTopSvg] = useState(2)
    const [scaleLogin, setScaleLogin] = useState(0)
    const [forgetOpacity, setForgetOpacity] = useState(0)

    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    const [jour, setJour] = useState();
    const [nbJour, setNbJour] = useState();
    const [mois, setMois] = useState();
    const [annee, setAnnee] = useState();
    const [tabDay] = useState([
        "dimanche",
        "lundi",
        "mardi",
        "mercredi",
        "jeudi",
        "vendredi",
        "samedi"
    ]);

    const [tabMonth] = useState([
        { month: "janvier" },
        { month: "février" },
        { month: "mars" },
        { month: "avril" },
        { month: "mai" },
        { month: "juin" },
        { month: "juillet" },
        { month: "août" },
        { month: "septembre" },
        { month: "octobre" },
        { month: "novembre" },
        { month: "décembre" }
    ]);


    //direct hour
    setInterval(() => {
        let hours = new Date();
        let heure = hours.getHours();
        let minutes = hours.getMinutes();
        let secondes = hours.getSeconds();
        let date = new Date();
        let day = date.getDay();
        let numberDay = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        setNbJour(numberDay);
        setAnnee(year);
        setJour(tabDay[day]);
        setMois(tabMonth[month].month);
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
        return day, numberDay, month, year;
    }, 1000);

    const ShowLoginInput = () => {
        if (scaleLogin !== 1) {
            setTopIndice(-20)
            setTopSvg(-60)
            setBottomInfos(-100)
            setTimeout(() => {
                setScaleLogin(1)
            }, 600);
        }
    }

    const ShowCode = () => {
        setForgetOpacity(1)
        setFormFields({
            code: code
        })
    }

    const handleChange = (e) => {
        if (isNaN(e.target.value) === false) {
            setFormFields({
                ...formFields,
                [e.target.name]: e.target.value
            })
        }
    }

    const emptyDatas = () => {
        setFormFields({
            code: code
        })
    }

    const [msg, setMsg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (parseInt(formFields.code) === code) {
            setIsLogin(true)
        } else {
            if (formFields.code.length < 4) {
                setMsg("Veuillez entrer 4 chiffres")
            } else {
                setMsg("Mauvais mot de passe, veuillez réessayer")
            }
            emptyDatas()
            document.getElementById("msg").style.animation = "200ms 1 shake"
            setTimeout(() => {
                document.getElementById("msg").style.animation = "none"
            }, 200);
        }
    }

    const [easterLogin, setEasterLogin] = useState(false);
    const SwitchOffScreen = () => {
        setSwitch(1);
        if (easterLogin === false) {
            setArrayNotifs(arrayNotifs => [...arrayNotifs, { "title": "La curiosité est un vilain défaut... mais pas toujours", "description": "Vous pouvez désormais allumer et éteindre l'ordinateur comme vous le souhaitez !" }])
            setSwitchSvg("20")
            setTimeout(() => {
                document.getElementById("anim1").beginElement();
            }, "1s");
            setEasterLogin(true);
        }
    }

    return (
        <div className="background-login" onClick={ShowLoginInput}>
            {/* {(isLogin) ? redirect("/") : null} */}
            <h2 style={{ display: "none", pointerEvent: "none" }}>Portfolio comprenant mes compétences, réalisations en tant que développeur fullstack et quelques autres surprises ! / Portfolio of Ousmane Diarra including skills, achievements as a fullstack developer and some other surprises!</h2>
            <div className="indice" style={{ top: topIndice + "%" }}>
                <p>Cliquez n'importe où</p>
            </div>
            <div className="socials" style={{ top: topSvg + "%" }}>
                <a href="https://www.twitter.com/GentlesDev" target="_blank" rel="noreferrer">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter-square" class="svg-inline--fa fa-twitter-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path stroke="white" fill="none" strokeWidth={20} d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/gentlesdev/" target="_blank" rel="noreferrer">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram-square" class="svg-inline--fa fa-instagram-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path stroke="white" fill="none" strokeWidth={15} d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/ousmane-diarra-065907189/" target="_blank" rel="noreferrer">
                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path stroke="white" fill="none" strokeWidth={20} d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                </a>
            </div>
            <div className="infos" style={{ bottom: bottomInfos + "%" }}>
                <p className="hour-login">{hour}:{minute}:{second}</p>
                <p className="current-day-login">{jour} {nbJour} {mois} {annee}</p>
            </div>
            <div className="blur-login" style={{ transform: "scale(" + scaleLogin + ")" }}>
                <div className="login">
                    {/* <Svg /> */}
                    <div className="infos-login">

                        <img src={userLogin} alt="user login" />
                        <h1 className="user">Ousmane Diarra</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="password" name="code" id="code" value={code} onChange={handleChange} maxLength="4" />
                            <button><i className="fas fa-arrow-right"></i></button>
                        </form>
                        <p id="forget" onClick={ShowCode}>J'ai oublié mon code confidentiel</p>
                    </div>
                    <div className="logo-login">
                        <i className="fas fa-wifi"></i>
                        <i className="fas fa-power-off" onClick={SwitchOffScreen}></i>
                    </div>
                </div>
            </div>
            <div className="forget-click" style={{ transform: "translateX(50%) scale(" + forgetOpacity + ")" }}>
                <p>Le code est <span className="code">{code}</span></p>
            </div>
            <p id="msg">{msg}</p>
            <div className="no-visible">
                <h2 className='user'>Développeur web</h2>
                <h3 className='user'>43 Avenue Léon Jouhaux</h3>
                <p className="user">+33778135295</p>
                <h3 className="user">mr.ousmanediarra@gmail.com</h3>
                <h4>Ce site servira à mettre en avant mes réalisations et compétences en tant que développeur web</h4>
                <p>N'hésitez pas à m'envoyer un mail si vous avez un projet ou besoin d'un service !</p>
                <p>Vous êtes libre de cliquer n'importe où !</p>
                <p>Vous découvrirez peut-être quelques surprises...</p>
            </div>
            <div className="switch"></div>
        </div>
    )
}

export default Login
