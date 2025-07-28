import React, { useState, useEffect } from 'react'
import { Link, redirect, useLocation } from 'react-router-dom'


import RealDes from '../../Components/Real/RealDes/RealDes';


import kny from '../../Images/kny.png'
import pcbp from '../../Images/pcbp-accueil.png'
import streamingWorld from '../../Images/streaming_world.png'
import evilHunter from '../../Images/evil_hunter.png'
import chat from '../../Images/chat_num.png'
import pacman from '../../Images/pacman.png'
import card from '../../Images/payment_card.png'
import pegasus from '../../Images/pegasus_car.png'
import formateur from '../../Images/client_formateur.png'
import myStockage from '../../Images/verif_sites.png'
import tasbeeh from '../../Images/tasbeeh1.jpg'
import ps3Ui from '../../Images/ps3_ui.png'
import monades from '../../Images/monades1.png'
import evasion from '../../Images/evasion1.png'
import linked from '../../Images/linked1.jpg'


import './Reals.scss'


const Reals = ({ darkmode, closeAll, isLogin }) => {

    let location = useLocation()

    useEffect(() => {
        if (location.pathname === "/realisations") {
            document.getElementById("footer").style.display = "block"
        }
        // console.log(location.pathname);
    }, [location])

    // visu description
    const [showRealDes, setShowRealDes] = useState("0")

    // images
    const [reals] = useState([
        { img: kny, alt: "presentation", title: "kny", name: "Kimetsu no yaiba presentation" },
        { img: pcbp, alt: "presentation", title: "pcbp", name: "Computer buying pro" },
        { img: streamingWorld, alt: "presentation", title: "streamingWorld", name: "Streaming world" },
        { img: evilHunter, alt: "presentation", title: "evilHunter", name: "Evil hunter" },
        { img: chat, alt: "presentation", title: "chat", name: "Tchat numérique" },
        { img: pacman, alt: "presentation", title: "pacman", name: "Pacman race" },
        { img: card, alt: "presentation", title: "card", name: "Animation carte numérique" },
        { img: pegasus, alt: "presentation", title: "pegasus", name: "Pegasus frontend" },
        { img: tasbeeh, alt: "presentation", title: "tasbeeh", name: "Tasbeeh" },
        { img: formateur, alt: "presentation", title: "formateur", name: "Liste des formateurs" },
        { img: myStockage, alt: "presentation", title: "myStockage", name: "My stockage" },
        { img: ps3Ui, alt: "presentation", title: "ps3Ui", name: "Playstation 3 UI" },
        { img: monades, alt: "presentation", title: "monades", name: "Presentation entreprise" },
        { img: evasion, alt: "Evasion", title: "evasion", name: "Evasion" },
        // { img: linked, alt: "presentation", title: "linked", name: "Linked" },
    ])

    // click du projet
    const [clickImage, setClickImage] = useState()
    const showDes = (title) => {
        setClickImage(title)
        setShowRealDes("1")
    }

    // sidebar events
    const [accessVisibility, setAccessVisibility] = useState(true)
    const [accessEvent, setAccessEvent] = useState("auto")
    const [topAccess, setTopAccess] = useState(14)
    const [iconAccess, setIconAccess] = useState(<i className="fas fa-chevron-down"></i>)

    const [leftSidebarMobile, setLeftSidebarMobile] = useState(-80)
    const [sidebarMobileVisibility, setSidebarMobileVisibility] = useState(false)

    const ShowSidebarMobile = () => {
        if (sidebarMobileVisibility) {
            setSidebarMobileVisibility(false)
            setLeftSidebarMobile(-80)
        } else {
            setSidebarMobileVisibility(true)
            setLeftSidebarMobile(0)
        }
    }

    const HideSidebarMobile = () => {
        setSidebarMobileVisibility(false)
        setLeftSidebarMobile(-80)
    }

    // menu de la sidebar
    const ShowAccess = () => {
        if (accessVisibility) {
            setAccessVisibility(false)
            setAccessEvent("none")
            setTopAccess(-90)
            setIconAccess(<i className="fas fa-chevron-left"></i>)
        } else {
            setAccessVisibility(true)
            setAccessEvent("auto")
            setTopAccess(14)
            setIconAccess(<i className="fas fa-chevron-down"></i>)
        }
    }

    return (
        <div className="real-content" onClick={closeAll} style={{ backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }}>
            {/* {(isLogin === false) ? redirect("/login") : null} */}
            <div className="nav-real">
                <div className="buttons-real">
                    <i className="fas fa-arrow-left"></i>
                    <i className="fas fa-arrow-right"></i>
                    <i className="fas fa-chevron-down"></i>
                    <i className="fas fa-arrow-up"></i>
                </div>
                <div className="path-real">
                    <div className="real-path">
                        <i className="fas fa-folder"></i>
                        <i className="fas fa-chevron-right first-chevron"></i>
                        <p className="path-info">Ordinateur</p>
                        <i className="fas fa-chevron-right second-chevron"></i>
                        <p className="path-info">oussdiarra</p>
                        <i className="fas fa-chevron-right third-chevron"></i>
                        <h2 className="path-info">realisations</h2>
                    </div>
                    <div className="refresh">
                        <i className="fas fa-chevron-down"></i>
                        <i className="fas fa-redo"></i>
                    </div>
                </div>
                <div className="search-real">
                    <i className="fas fa-search"></i>
                    <input type="text" name="searchReal" id="search-real" placeholder="Rechercher dans : realisations" disabled />
                </div>
            </div>
            <div className="sidebar-real">
                <div className="speed-access">
                    <p onClick={ShowAccess}>{iconAccess} <i className="far fa-star"></i><span className="access">Accès rapide</span></p>
                    <ul className="access-list" style={{ top: topAccess + "%", pointerEvents: accessEvent }}>
                        <Link to="/realisations"><li className="access-element">Réalisations</li></Link>
                        <Link to="/"><li className="access-element">Bureau</li></Link>
                        <Link to="/competences"><li className="access-element">Compétences</li></Link>
                    </ul>
                </div>
            </div>
            <div className="sidebar-real-mobile" style={{ left: leftSidebarMobile + "%" }}>
                <div className="show-side-mobile" onClick={ShowSidebarMobile}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="speed-access">
                    <p onClick={ShowAccess}>{iconAccess} <i className="far fa-star"></i><span className="access">Accès rapide</span></p>
                    <ul className="access-list" style={{ top: topAccess + "%", pointerEvents: accessEvent }}>
                        <Link to="/realisations"><li className="access-element">Réalisations</li></Link>
                        <Link to="/"><li className="access-element">Bureau</li></Link>
                        <Link to="/competences"><li className="access-element">Compétences</li></Link>
                    </ul>
                </div>
            </div>
            <div className="reals" onClick={HideSidebarMobile}>
                {
                    reals.map((real, index) => {
                        return (
                            <div className="real" key={index} >
                                <img onClick={() => showDes(real.title)} src={real.img} alt={real.alt} />
                                <p>{real.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <RealDes style={{ transform: "scale(" + setShowRealDes + ")" }} darkmode={darkmode} title={clickImage} showRealDes={showRealDes} setShowRealDes={setShowRealDes} />
            <div className="switch"></div>
        </div>
    )
}

export default Reals
