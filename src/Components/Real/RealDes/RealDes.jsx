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

import todoreaction1 from '../../../Images/todoreaction1.jpg'
import todoreaction2 from '../../../Images/todoreaction2.jpg'
import todoreaction3 from '../../../Images/todoreaction3.jpg'
import todoreaction4 from '../../../Images/todoreaction4.jpg'

import gachanote1 from '../../../Images/gachanote1.jpg'
import gachanote2 from '../../../Images/gachanote2.jpg'
import gachanote3 from '../../../Images/gachanote3.jpg'
import gachanote4 from '../../../Images/gachanote4.jpg'

import jiamini1 from '../../../Images/jiamini1.png'
import jiamini2 from '../../../Images/jiamini2.png'
import jiamini3 from '../../../Images/jiamini3.png'
import jiamini4 from '../../../Images/jiamini4.png'

import eclat1 from '../../../Images/eclat1.png'
import eclat2 from '../../../Images/eclat2.png'
import eclat3 from '../../../Images/eclat3.png'
import eclat4 from '../../../Images/eclat4.png'
import eclat5 from '../../../Images/eclat5.png'
import eclat6 from '../../../Images/eclat6.png'
import eclat7 from '../../../Images/eclat7.png'


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

    const [todoreactionSlides] = useState([
    { img: todoreaction1, alt: "todoreaction" },
    { img: todoreaction2, alt: "todoreaction" },
    { img: todoreaction3, alt: "todoreaction" },
    { img: todoreaction4, alt: "todoreaction" }
])

const [gachanoteSlides] = useState([
    { img: gachanote1, alt: "gachanote" },
    { img: gachanote2, alt: "gachanote" },
    { img: gachanote3, alt: "gachanote" },
    { img: gachanote4, alt: "gachanote" }
])

const [jiaminiSlides] = useState([
    { img: jiamini1, alt: "jiamini" },
    { img: jiamini2, alt: "jiamini" },
    { img: jiamini3, alt: "jiamini" },
    { img: jiamini4, alt: "jiamini" }
])

const [eclatSlides] = useState([
    { img: eclat1, alt: "eclat" },
    { img: eclat2, alt: "eclat" },
    { img: eclat3, alt: "eclat" },
    { img: eclat4, alt: "eclat" },
    { img: eclat5, alt: "eclat" },
    { img: eclat6, alt: "eclat" },
    { img: eclat7, alt: "eclat" }
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
        // Plusieurs images (slider)
        case "kny":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">Présentation kimetsu no yaiba</h2>
                    <div className="slider-real-des">
                        <Slider ref={slider} {...settings}>
                            {knySlides.map((slide, idx) => (
                                <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                            ))}
                        </Slider>
                    </div>
                    <div className="real-des">
                        <p className="description">Un site de présentation de l'anime "Kimetsu no Yaiba" ou "Demon Slayer" de Koyoharu Goutouge et produit par Ufotable</p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"HTML"} percentage={70} />
                            <Languages techno={"CSS"} percentage={25} />
                            <Languages techno={"JS"} percentage={5} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )

        case "pcbp":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
            <h2 className="title-real-des">Pc buying pro</h2>
            <div className="slider-real-des">
                <Slider ref={slider} {...settings}>
                    {pcbpSlides.map((slide, idx) => (
                        <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                    ))}
                </Slider>
            </div>
            <div className="real-des">
                <p className="description">Vous avez besoin dacheter un ordinateur ou des composants de tour? Rendez-vous sur Computer Buying Pro ! Vous trouverez sur ce site des composants comme carte graphique, carte mère, processeur pour personnaliser votre ordinateur. Et si vous ne savez pas où vous diriger, ne vous inquiétez pas ! Nous vendons aussi des tours déjà montées avec leurs composants! Ce site à été programmé avec le modèle MVC.</p>
            </div>
            <div className="usage-technos">
                <p className="usage-title">Langages ou technos utilisés</p>
                <div className="technos">
                    <Languages techno={"PHP"} percentage={32} />
                    <Languages techno={"HTML"} percentage={30} />
                    <Languages techno={"CSS"} percentage={19} />
                    <Languages techno={"SQL"} percentage={11} />
                    <Languages techno={"JS"} percentage={8} />
                </div>
            </div>
            <div className="return-real">
                <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
            </div>
            <div className="big-picture" style={{ display: displayImage }}>
                <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                <p className="cross-picture" onClick={ClosePicture}>X</p>
            </div>
        </div>
            )
        case "streamingWorld":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
            <h2 className="title-real-des">Streaming world</h2>
            <div className="slider-real-des">
                <Slider ref={slider} {...settings}>
                    {streamingWorldSlides.map((slide, idx) => (
                        <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                    ))}
                </Slider>
            </div>
            <div className="real-des">
                <p className="description">Fan de mangas et d'animes? Sur Streaming-world, retrouvez les épisodes de vos animes préférés et accédez à la boutique en ligne avec paiement sécurisé pour y voir figurines, accessoires, blu-ray et tomes disponibles ! En prime, une petite présentation du manga de votre choix à été faite dans la section artworks. N'hésitez pas ! Ce site à été programmé avec le modèle MVC. La partie artworks est un site de présentation des animes avec leur personnages principaux proposés en streaming. C'est un peu comme un deuxième site intégré dans streaming-world.</p>
            </div>
            <div className="usage-technos">
                <p className="usage-title">Langages ou technos utilisés</p>
                <div className="technos">
                    <Languages techno={"HTML"} percentage={60} />
                    <Languages techno={"CSS"} percentage={20} />
                    <Languages techno={"PHP"} percentage={12} />
                    <Languages techno={"SQL"} percentage={6} />
                    <Languages techno={"JS"} percentage={2} />
                </div>
            </div>
            <div className="return-real">
                <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
            </div>
            <div className="big-picture" style={{ display: displayImage }}>
                <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                <p className="cross-picture" onClick={ClosePicture}>X</p>
            </div>
        </div>
            )
        case "evilHunter":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">Evil hunter</h2>
                    <div className="img-real-des">
                        <img className="slide" src={evilHunter} alt="evil hunter" onClick={() => ScaleImage(evilHunter)} />
                    </div>
                    <div className="real-des">
                        <p className="description">Un mini jeu qui exploite les foncionnalités js et jquery. Menez votre personnage à la victoire en combattant des monstres la nuit pour survivre!</p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"JS"} percentage={52} />
                            <Languages techno={"CSS"} percentage={31} />
                            <Languages techno={"HTML"} percentage={17} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "chat":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">Tchat numérique</h2>
                    <div className="slider-real-des">
                        <Slider ref={slider} {...settings}>
                            {tchatSlides.map((slide, idx) => (
                                <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                            ))}
                        </Slider>
                    </div>
                    <div className="real-des">
                        <p className="description">Un site de tchat à discussion en temps réel entre les utilisateurs. Un espace d'offres d'emploi est disponible pour les demandeurs d'emploi. Ce site à été programmé en PHP orienté objet et en utilisant des API.</p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"PHP"} percentage={33} />
                            <Languages techno={"HTML"} percentage={29} />
                            <Languages techno={"CSS"} percentage={23} />
                            <Languages techno={"JS"} percentage={9} />
                            <Languages techno={"SQL"} percentage={6} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "pacman":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">Pacman race</h2>
                    <div className="img-real-des">
                        <img className="slide" src={pacman} alt="pacman" onClick={() => ScaleImage(pacman)} />
                    </div>
                    <div className="real-des">
                        <p className="description">Un mini jeu Pacman réalisé en JS : qui de vous ou du Pacman adverse mangera le plus de fruits en premier ?</p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"JS"} percentage={97} />
                            <Languages techno={"HTML"} percentage={1.5} />
                            <Languages techno={"CSS"} percentage={1.5} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "card":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
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
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"HTML"} percentage={40} />
                            <Languages techno={"CSS"} percentage={30} />
                            <Languages techno={"JS"} percentage={30} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "pegasus":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">Vente de voitures</h2>
                    <div className="img-real-des">
                        <img className="slide" src={pegasus} alt="pegasus" onClick={() => ScaleImage(pegasus)} />
                    </div>
                    <div className="real-des">
                        <p className="description">Frontend d'un site de vente de voitures.</p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"HTML"} percentage={50} />
                            <Languages techno={"CSS"} percentage={35} />
                            <Languages techno={"JS"} percentage={15} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "tasbeeh":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
            <h2 className="title-real-des">Tasbeeh</h2>
            <div className="slider-real-des">
                <Slider ref={slider} {...settings}>
                    {tasbeehSlides.map((slide, idx) => (
                        <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                    ))}
                </Slider>
            </div>
            <div className="real-des">
                <p className="description">Application utilisant une API de Quran pour lire, écouter ou faire des évocations.</p>
            </div>
            <div className="usage-technos">
                <p className="usage-title">Langages ou technos utilisés</p>
                <div className="technos">
                    <Languages techno={"HTML"} percentage={66} />
                    <Languages techno={"CSS"} percentage={24} />
                    <Languages techno={"JS"} percentage={10} />
                </div>
            </div>
            <div className="return-real">
                <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
            </div>
            <div className="big-picture" style={{ display: displayImage }}>
                <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                <p className="cross-picture" onClick={ClosePicture}>X</p>
            </div>
        </div>
            )
        case "formateur":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">Liste de formateurs</h2>
                    <div className="img-real-des">
                        <img className="slide" src={formateur} alt="formateur" onClick={() => ScaleImage(formateur)} />
                    </div>
                    <div className="real-des">
                        <p className="description">Page d'import d'un fichier excel de formateurs, le tout traité en base de données pour pouvoir intéragir avec les données.</p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"JS"} percentage={35} />
                            <Languages techno={"HTML"} percentage={30} />
                            <Languages techno={"CSS"} percentage={20} />
                            <Languages techno={"PHP"} percentage={8} />
                            <Languages techno={"SQL"} percentage={7} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "myStockage":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">myStockage</h2>
                    <div className="img-real-des">
                        <img className="slide" src={myStockage} alt="stockage" onClick={() => ScaleImage(myStockage)} />
                    </div>
                    <div className="real-des">
                        <p className="description">Page de vérification d'état de sites (en ligne, stockage en base de données, stockage ftp).</p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"PHP"} percentage={47} />
                            <Languages techno={"HTML"} percentage={26} />
                            <Languages techno={"CSS"} percentage={21} />
                            <Languages techno={"SQL"} percentage={6} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "monades":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
            <h2 className="title-real-des">Présentation entreprise</h2>
            <div className="slider-real-des">
                <Slider ref={slider} {...settings}>
                    {monadesSlides.map((slide, idx) => (
                        <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                    ))}
                </Slider>
            </div>
            <div className="real-des">
                <p className="description">Un site de présentation d'entreprise fait avec React</p>
            </div>
            <div className="usage-technos">
                <p className="usage-title">Langages ou technos utilisés</p>
                <div className="technos">
                    <Languages techno={"REACT"} percentage={80} />
                    <Languages techno={"NODEJS"} percentage={20} />
                </div>
            </div>
            <div className="return-real">
                <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
            </div>
            <div className="big-picture" style={{ display: displayImage }}>
                <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                <p className="cross-picture" onClick={ClosePicture}>X</p>
            </div>
        </div>
            )
        case "ps3Ui":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">Playstation 3 UI</h2>
                    <div className="img-real-des">
                        <img className="slide" src={ps3Ui} alt="ps3 ui" onClick={() => ScaleImage(ps3Ui)} />
                    </div>
                    <div className="real-des">
                        <p className="description">Reproduction de la navigation de la console playstation 3.</p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"HTML"} percentage={50} />
                            <Languages techno={"CSS"} percentage={15} />
                            <Languages techno={"JS"} percentage={35} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "evasion":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
            <h2 className="title-real-des">Présentation entreprise</h2>
            <div className="slider-real-des">
                <Slider ref={slider} {...settings}>
                    {evasionSlides.map((slide, idx) => (
                        <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                    ))}
                </Slider>
            </div>
            <div className="real-des">
                <p className="description">Projet "EVASION" du département des Hauts-de-Seine : Création et gestion du site regroupant plusieurs contenus VR accessibles sur tablette ainsi que la création de son propre contenu VR !</p>
            </div>
            <div className="usage-technos">
                <p className="usage-title">Langages ou technos utilisés</p>
                <div className="technos">
                    <Languages techno={"REACT"} percentage={60} />
                    <Languages techno={"SYMFONY"} percentage={30} />
                    <Languages techno={"FFMPEG"} percentage={8} />
                    <Languages techno={"STORYBOOK"} percentage={2} />
                </div>
            </div>
            <div className="return-real">
                <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
            </div>
            <div className="big-picture" style={{ display: displayImage }}>
                <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                <p className="cross-picture" onClick={ClosePicture}>X</p>
            </div>
        </div>
            )
        case "linked":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
            <h2 className="title-real-des">Présentation entreprise</h2>
            <div className="slider-real-des">
                <Slider ref={slider} {...settings}>
                    {linkedSlides.map((slide, idx) => (
                        <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                    ))}
                </Slider>
            </div>
            <div className="real-des">
                <p className="description">Application permettant de se mettre à jour sur les horaires de prières de la mosquée et d'être au courant des nouvelles actualités !</p>
            </div>
            <div className="usage-technos">
                <p className="usage-title">Langages ou technos utilisés</p>
                <div className="technos">
                    <Languages techno={"REACT NATIVE"} percentage={80} />
                    <Languages techno={"PHP"} percentage={20} />
                </div>
            </div>
            <div className="return-real">
                <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
            </div>
            <div className="big-picture" style={{ display: displayImage }}>
                <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                <p className="cross-picture" onClick={ClosePicture}>X</p>
            </div>
        </div>
            )
        case "todoreaction":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">ToDo'Réac'tion</h2>
                    <div className="slider-real-des">
                        <Slider ref={slider} {...settings}>
                            {todoreactionSlides.map((slide, idx) => (
                                <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                            ))}
                        </Slider>
                    </div>
                    <div className="real-des">
                        <p className="description">
                            ToDo'Réac'tion est une application de gestion de tâches moderne, réalisée avec React Native, Redux Toolkit et Expo Router.
                            <ul>
                                <li>Ajout, édition et suppression de tâches</li>
                                <li>Gestion de la date et de l'heure d'échéance pour chaque tâche</li>
                                <li>Catégorisation des tâches : crée tes propres catégories, choisis leur couleur, filtre les tâches par catégorie grâce à des "chips"</li>
                                <li>Palette de couleurs : chaque tâche peut avoir une couleur personnalisée parmi 10 proposées</li>
                                <li>Thèmes visuels : change le fond de l'application (clair, sombre, bleu, etc.), le choix est persistant</li>
                                <li>Interface moderne et responsive : expérience utilisateur fluide sur mobile</li>
                            </ul>
                        </p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"EXPO"} percentage={40} />
                            <Languages techno={"REACT NATIVE"} percentage={30} />
                            <Languages techno={"TYPESCRIPT"} percentage={20} />
                            <Languages techno={"REDUX TOOLKIT"} percentage={10} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "gachanote":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">GachaNote</h2>
                    <div className="slider-real-des">
                        <Slider ref={slider} {...settings}>
                            {gachanoteSlides.map((slide, idx) => (
                                <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                            ))}
                        </Slider>
                    </div>
                    <div className="real-des">
                        <p className="description">
                            GachaNote est l’outil idéal pour tous les joueurs de jeux gacha qui souhaitent :
                            <ul>
                                <li>Suivre précisément leurs dépenses et tirages sur chaque jeu.</li>
                                <li>Visualiser leur historique et leurs statistiques de façon claire et graphique.</li>
                                <li>Prendre conscience de leurs habitudes de consommation sur les gachas.</li>
                                <li>Comparer leurs dépenses entre plusieurs jeux et sur différentes périodes.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"EXPO"} percentage={40} />
                            <Languages techno={"REACT NATIVE"} percentage={30} />
                            <Languages techno={"TYPESCRIPT"} percentage={20} />
                            <Languages techno={"REDUX TOOLKIT"} percentage={10} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "jiamini":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">Jiamini</h2>
                    <div className="slider-real-des">
                        <Slider ref={slider} {...settings}>
                            {jiaminiSlides.map((slide, idx) => (
                                <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                            ))}
                        </Slider>
                    </div>
                    <div className="real-des">
                        <p className="description">
                            Jiamini est une application mobile qui facilite l'apprentissage scolaire en Afrique en proposant des cours adaptés (PDF, vidéo, image, jeu).<br />
                            Elle propose aussi l'histoire de personnages historiques selon le pays sélectionné.
                        </p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"EXPO"} percentage={40} />
                            <Languages techno={"JAVA (BACK)"} percentage={30} />
                            <Languages techno={"REACT NATIVE"} percentage={15} />
                            <Languages techno={"POSTGRESQL"} percentage={15} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
                    </div>
                    <div className="big-picture" style={{ display: displayImage }}>
                        <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                        <p className="cross-picture" onClick={ClosePicture}>X</p>
                    </div>
                </div>
            )
        case "eclat":
            return (
                <div className={`realDes${showRealDes !== "0" ? " open" : ""}`} style={{ transform: "scale(" + showRealDes + ")", backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }} onClick={e => e.stopPropagation()}>
                    <h2 className="title-real-des">Éclat Solidaire</h2>
                    <div className="slider-real-des">
                        <Slider ref={slider} {...settings}>
                            {eclatSlides.map((slide, idx) => (
                                <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                            ))}
                        </Slider>
                    </div>
                    <div className="real-des">
                        <p className="description">
                            Éclat Solidaire est un site qui recense les associations ayant peu de visibilité et les événements disponibles.<br />
                            On peut s'inscrire bénévolement à une association et faire des dons si on le souhaite.
                        </p>
                    </div>
                    <div className="usage-technos">
                        <p className="usage-title">Langages ou technos utilisés</p>
                        <div className="technos">
                            <Languages techno={"REACT"} percentage={50} />
                            <Languages techno={"NODEJS"} percentage={30} />
                            <Languages techno={"JAVASCRIPT"} percentage={20} />
                        </div>
                    </div>
                    <div className="return-real">
                        <button
    className="rereal"
    onClick={returnReal}
    aria-label="Fermer la fiche projet"
    tabIndex={0}
    type="button"
>
    Retour
</button>
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
