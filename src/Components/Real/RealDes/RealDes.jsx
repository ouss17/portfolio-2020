import React, { useState, useRef } from 'react'
import Languages from './Languages/Languages'
import Slider from 'react-slick'

import './RealDes.scss'

import knySlide1 from '../../../Images/kny1.png'
import knySlide2 from '../../../Images/kny2.png'

import evilHunter from '../../../Images/evil_hunter.png'
import pacman from '../../../Images/pacman.png'
import pegasus from '../../../Images/pegasus_car.png'
import formateur from '../../../Images/client_formateur.png'
import myStockage from '../../../Images/verif_sites.png'

import pcbpSlide1 from '../../../Images/pcbp-admin.png'
import pcbpSlide2 from '../../../Images/pcbp-list1.png'
import pcbpSlide3 from '../../../Images/pcbp-list2.png'
import pcbpSlide4 from '../../../Images/pcbp-produit.png'

import streamingWorldSlide1 from '../../../Images/streaming_world_episodes.png'
import streamingWorldSlide2 from '../../../Images/streaming_world_products_details.png'
import streamingWorldSlide3 from '../../../Images/streaming_world_products.png'
import streamingWorldSlide4 from '../../../Images/streaming_world_streaming.png'

import tchatSlide1 from '../../../Images/chat_num.png'
import tchatSlide2 from '../../../Images/chat_num1.png'

import card from '../../../Images/card_number.mp4'

import tasbeehSlide1 from '../../../Images/tasbeeh1.jpg'
import tasbeehSlide2 from '../../../Images/tasbeeh2.jpg'
import tasbeehSlide3 from '../../../Images/tasbeeh3.jpg'
import tasbeehSlide4 from '../../../Images/tasbeeh4.jpg'

import monadesSlide1 from '../../../Images/monades1.png'
import monadesSlide2 from '../../../Images/monades2.png'
import monadesSlide3 from '../../../Images/monades3.png'

import evasionSlide1 from '../../../Images/evasion1.png'
import evasionSlide2 from '../../../Images/evasion2.png'
import evasionSlide3 from '../../../Images/evasion3.png'
import evasionSlide4 from '../../../Images/evasion5.png'

import linkedSlide1 from '../../../Images/linked1.jpg'
import linkedSlide2 from '../../../Images/linked2.jpg'
import linkedSlide3 from '../../../Images/linked3.jpg'
import linkedSlide4 from '../../../Images/linked4.jpg'

import ps3Ui from '../../../Images/ps3_ui.png'


function SampleNextArrow({ slider }) {
    return (
        <button className="slick-arrow slick-next" onClick={() => slider?.current?.slickNext()}>
            <i className="fas fa-chevron-right"></i>
        </button>
    );
}

function SamplePrevArrow({ slider }) {
    return (
        <button className="slick-arrow slick-prev" onClick={() => slider?.current?.slickPrev()}>
            <i className="fas fa-chevron-left"></i>
        </button>
    );
}


const RealDes = ({ darkmode, showRealDes, setShowRealDes, title }) => {

    const slider = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow slider={slider} />,
        prevArrow: <SamplePrevArrow slider={slider} />,
        draggable: true,

    };

    const [knySlides] = useState([
        { img: knySlide1, alt: "presentation" },
        { img: knySlide2, alt: "presentation" },
    ])

    const [pcbpSlides] = useState([
        { img: pcbpSlide1, alt: "presentation" },
        { img: pcbpSlide2, alt: "presentation" },
        { img: pcbpSlide3, alt: "presentation" },
        { img: pcbpSlide4, alt: "presentation" },
    ])

    const [streamingWorldSlides] = useState([
        { img: streamingWorldSlide1, alt: "presentation" },
        { img: streamingWorldSlide2, alt: "presentation" },
        { img: streamingWorldSlide3, alt: "presentation" },
        { img: streamingWorldSlide4, alt: "presentation" },
    ])

    const [tchatSlides] = useState([
        { img: tchatSlide1, alt: "presentation" },
        { img: tchatSlide2, alt: "presentation" },
    ])

    const [tasbeehSlides] = useState([
        { img: tasbeehSlide1, alt: "presentation" },
        { img: tasbeehSlide2, alt: "presentation" },
        { img: tasbeehSlide3, alt: "presentation" },
        { img: tasbeehSlide4, alt: "presentation" },
    ])

    const [monadesSlides] = useState([
        { img: monadesSlide1, alt: "presentation" },
        { img: monadesSlide2, alt: "presentation" },
        { img: monadesSlide3, alt: "presentation" }
    ])

    const [evasionSlides] = useState([
        { img: evasionSlide1, alt: "presentation" },
        { img: evasionSlide2, alt: "presentation" },
        { img: evasionSlide3, alt: "presentation" },
        { img: evasionSlide4, alt: "presentation" }
    ])

    const [linkedSlides] = useState([
        { img: linkedSlide1, alt: "presentation" },
        { img: linkedSlide2, alt: "presentation" },
        { img: linkedSlide3, alt: "presentation" },
        { img: linkedSlide4, alt: "presentation" }
    ])


    const returnReal = () => {
        setShowRealDes("0")
        let slide = document.getElementsByClassName('slide');
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.transform = 'scale(1)';
        }
    }

    // const [scaleImages, setScale] = useState(1)
    const [displayImage, setDisplayImage] = useState("none")
    const [imageClicked, setImageClicked] = useState("")
    const ScaleImage = (src) => {
        setImageClicked(src)
        setDisplayImage("flex")
    }

    const ClosePicture = () => {
        setImageClicked("")
        setDisplayImage("none")
    }
    switch (title) {
        case "kny":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Présentation kimetsu no yaiba</h2>
                    <div className="slider-real-des">
                        {
                            knySlides.map((knySlide, index) => {
                                return <Slider ref={slider} {...settings} key={index}>
                                    <img className="slide" src={knySlide.img} alt={knySlide.alt} onClick={(src) => ScaleImage(knySlide.img)} />
                                </Slider>
                            })
                        }
                    </div>
                    <div className="real-des">
                        <p className="description">Un site de présentation de l'anime "Kimetsu no Yaiba" ou "Demon Slayer" de Koyoharu Goutouge et produit par Ufotable</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"HTML"} percentage={70} />
                            <Languages techno={"CSS"} percentage={25} />
                            <Languages techno={"JS"} percentage={5} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )

        case "pcbp":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Pc buying pro</h2>
                    <div className="slider-real-des">
                        {
                            pcbpSlides.map((pcbpSlide, index) => {
                                return <Slider ref={slider} {...settings} key={index}>
                                    <img className="slide" src={pcbpSlide.img} alt={pcbpSlide.alt} onClick={(src) => ScaleImage(pcbpSlide.img)} />
                                </Slider>
                            })
                        }
                    </div>
                    <div className="real-des">
                        <p className="description">Vous avez besoin dacheter un ordinateur ou des composants de tour? Rendez-vous sur Computer Buying Pro ! Vous trouverez sur ce site des composants comme carte graphique, carte mère, processeur pour personnaliser votre ordinateur. Et si vous ne savez pas où vous diriger, ne vous inquiétez pas ! Nous vendons aussi des tours déjà montées avec leurs composants! Ce site à été programmé avec le modèle MVC.</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"PHP"} percentage={32} />
                            <Languages techno={"HTML"} percentage={30} />
                            <Languages techno={"CSS"} percentage={19} />
                            <Languages techno={"SQL"} percentage={11} />
                            <Languages techno={"JS"} percentage={8} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "streamingWorld":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Streaming world</h2>
                    <div className="slider-real-des">
                        {
                            streamingWorldSlides.map((streamingWorldSlide, index) => {
                                return <Slider ref={slider} {...settings} key={index}>
                                    <img className="slide" src={streamingWorldSlide.img} alt={streamingWorldSlide.alt} onClick={(src) => ScaleImage(streamingWorldSlide.img)} />
                                </Slider>
                            })
                        }
                    </div>
                    <div className="real-des">
                        <p className="description">Fan de mangas et d'animes? Sur Streaming-world, retrouvez les épisodes de vos animes préférés et accédez à la boutique en ligne avec paiement sécurisé pour y voir figurines, accessoires, blu-ray et tomes disponibles ! En prime, une petite présentation du manga de votre choix à été faite dans la section artworks. N'hésitez pas ! Ce site à été programmé avec le modèle MVC. La partie artworks est un site de présentation des animes avec leur personnages principaux proposés en streaming. C'est un peu comme un deuxième site intégré dans streaming-world.</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"HTML"} percentage={60} />
                            <Languages techno={"CSS"} percentage={20} />
                            <Languages techno={"PHP"} percentage={12} />
                            <Languages techno={"SQL"} percentage={6} />
                            <Languages techno={"JS"} percentage={2} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "evilHunter":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Evil hunter</h2>
                    <div className="img-real-des">
                        <img className="slide" src={evilHunter} alt="evil hunter" onClick={(src) => ScaleImage(evilHunter)} />
                    </div>
                    <div className="real-des">
                        <p className="description">Un mini jeu qui exploite les foncionnalités js et jquery. Menez votre personnage à la victoire en combattant des monstres la nuit pour survivre!</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"JS"} percentage={52} />
                            <Languages techno={"CSS"} percentage={31} />
                            <Languages techno={"HTML"} percentage={17} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "chat":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Tchat numérique</h2>
                    <div className="slider-real-des">
                        {
                            tchatSlides.map((tchatSlide, index) => {
                                return <Slider ref={slider} {...settings} key={index}>
                                    <img className="slide" src={tchatSlide.img} alt={tchatSlide.alt} onClick={(src) => ScaleImage(tchatSlide.img)} />
                                </Slider>
                            })
                        }
                    </div>
                    <div className="real-des">
                        <p className="description">Un site de tchat à discussion en temps réel entre les utilisateurs. Un espace d'offres d'emploi est disponible pour les demandeurs d'emploi. Ce site à été programmé en PHP orienté objet et en utilisant des API.</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"PHP"} percentage={33} />
                            <Languages techno={"HTML"} percentage={29} />
                            <Languages techno={"CSS"} percentage={23} />
                            <Languages techno={"JS"} percentage={9} />
                            <Languages techno={"SQL"} percentage={6} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "pacman":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Pacman race</h2>
                    <div className="img-real-des">
                        <img className="slide" src={pacman} alt="pacman" onClick={(src) => ScaleImage(pacman)} />
                    </div>
                    <div className="real-des">
                        <p className="description">Un mini jeu Pacman réalisé en JS : qui de vous ou du Pacman adverse mangera le plus de fruits en premier ?</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"JS"} percentage={97} />
                            <Languages techno={"HTML"} percentage={1.5} />
                            <Languages techno={"CSS"} percentage={1.5} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "card":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Animation carte de paiement</h2>
                    <div className="slider-real-des">
                        <video autoPlay loop muted>
                            <source src={card} type="video/mp4" />
                        </video>
                    </div>
                    <div className="real-des">
                        <p className="description">Une simple animation de carte de paiement pour un visuel plus attrayant !</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"HTML"} percentage={40} />
                            <Languages techno={"CSS"} percentage={30} />
                            <Languages techno={"JS"} percentage={30} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "pegasus":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Vente de voitures</h2>
                    <div className="img-real-des">
                        <img className="slide" src={pegasus} alt="pegasus" onClick={(src) => ScaleImage(pegasus)} />
                    </div>
                    <div className="real-des">
                        <p className="description">Frontend d'un site de vente de voitures.</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"HTML"} percentage={50} />
                            <Languages techno={"CSS"} percentage={35} />
                            <Languages techno={"JS"} percentage={15} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "tasbeeh":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Tasbeeh</h2>
                    <div className="slider-real-des">
                        {
                            tasbeehSlides.map((tasbeehSlide, index) => {
                                return <Slider ref={slider} {...settings} key={index}>
                                    <img className="slide" src={tasbeehSlide.img} alt={tasbeehSlide.alt} onClick={(src) => ScaleImage(tasbeehSlide.img)} />
                                </Slider>
                            })
                        }
                    </div>
                    <div className="real-des">
                        <p className="description">Application utilisant une API de Quran pour lire, écouter ou faire des évocations.</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"HTML"} percentage={66} />
                            <Languages techno={"CSS"} percentage={24} />
                            <Languages techno={"JS"} percentage={10} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "formateur":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Liste de formateurs</h2>
                    <div className="img-real-des">
                        <img className="slide" src={formateur} alt="formateur" onClick={(src) => ScaleImage(formateur)} />
                    </div>
                    <div className="real-des">
                        <p className="description">Page d'import d'un fichier excel de formateurs, le tout traité en base de données pour pouvoir intéragir avec les données.</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"JS"} percentage={35} />
                            <Languages techno={"HTML"} percentage={30} />
                            <Languages techno={"CSS"} percentage={20} />
                            <Languages techno={"PHP"} percentage={8} />
                            <Languages techno={"SQL"} percentage={7} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "myStockage":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">myStockage</h2>
                    <div className="slider-real-des"><div className="img-real-des">
                        <img className="slide" src={myStockage} alt="stockage" onClick={(src) => ScaleImage(myStockage)} />
                    </div></div>
                    <div className="real-des">
                        <p className="description">Page de vérification d'état de sites (en ligne, stockage en base de données, stockage ftp).</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"PHP"} percentage={47} />
                            <Languages techno={"HTML"} percentage={26} />
                            <Languages techno={"CSS"} percentage={21} />
                            <Languages techno={"SQL"} percentage={6} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "monades":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Présentation entreprise</h2>
                    <div className="slider-real-des">
                        {
                            monadesSlides.map((monadesSlide, index) => {
                                return <Slider ref={slider} {...settings} key={index}>
                                    <img className="slide" src={monadesSlide.img} alt={monadesSlide.alt} onClick={(src) => ScaleImage(monadesSlide.img)} />
                                </Slider>
                            })
                        }
                    </div>
                    <div className="real-des">
                        <p className="description">Un site de présentation d'entreprise fait avec React</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"REACT"} percentage={80} />
                            <Languages techno={"NODEJS"} percentage={20} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "ps3Ui":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Playstation 3 UI</h2>
                    <div className="slider-real-des"><div className="img-real-des">
                        <img className="slide" src={ps3Ui} alt="stockage" onClick={(src) => ScaleImage(ps3Ui)} />
                    </div></div>
                    <div className="real-des">
                        <p className="description">Reproduction de la navigation de la console playstation 3.</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"HTML"} percentage={50} />
                            <Languages techno={"CSS"} percentage={15} />
                            <Languages techno={"JS"} percentage={35} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "evasion":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Présentation entreprise</h2>
                    <div className="slider-real-des">
                        {
                            evasionSlides.map((evasionSlide, index) => {
                                return <Slider ref={slider} {...settings} key={index}>
                                    <img className="slide" src={evasionSlide.img} alt={evasionSlide.alt} onClick={(src) => ScaleImage(evasionSlide.img)} />
                                </Slider>
                            })
                        }
                    </div>
                    <div className="real-des">
                        <p className="description">Projet "EVASION" du département des Hauts-de-Seine : Création et gestion du site <a target='__blank'>"https://evasion.hauts-de-seine.fr"</a> regroupant plusieurs contenus VR accessibles sur tablette ainsi que la création de son propre contenu VR !</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"REACT"} percentage={60} />
                            <Languages techno={"SYMFONY"} percentage={30} />
                            <Languages techno={"FFMPEG"} percentage={8} />
                            <Languages techno={"STORYBOOK"} percentage={2} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "linked":
            return (
                <div className="realDes" style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} >
                    <h2 className="title-real-des">Présentation entreprise</h2>
                    <div className="slider-real-des">
                        {
                            linkedSlides.map((linkedSlide, index) => {
                                return <Slider ref={slider} {...settings} key={index}>
                                    <img className="slide" src={linkedSlide.img} alt={linkedSlide.alt} onClick={(src) => ScaleImage(linkedSlide.img)} />
                                </Slider>
                            })
                        }
                    </div>
                    <div className="real-des">
                        <p className="description">Application permettant de se mettre à jour sur les horaires de prières de la mosquée et d'être au courant des nouvelles actualités !</p>
                    </div>
                    <div className="usage-technos">
                        <p>Langages utilisés</p>
                        <div className="technos">
                            <Languages techno={"REACT NATIVE"} percentage={80} />
                            <Languages techno={"PHP"} percentage={20} />
                        </div>
                    </div>
                    <div className="return-real">
                        <span className="rereal" onClick={returnReal} >Retour</span>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        default: return ("");
    }

}

export default RealDes
