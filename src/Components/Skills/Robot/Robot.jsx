import { useState } from 'react'
// import { Radar, defaults } from 'react-chartjs-2';

import './Robot.scss'

import html from '../../../Images/logos/html.png'
import css from '../../../Images/logos/css.png'
import js from '../../../Images/logos/js.png'
import php from '../../../Images/logos/php.png'
import mysql from '../../../Images/logos/mysql.png'
import python from '../../../Images/logos/python.png'
import react from '../../../Images/logos/react.png'
import jquery from '../../../Images/logos/jquery.png'
import mvc from '../../../Images/logos/mvc.png'
import wordpress from '../../../Images/logos/wordpress.png'
import nodejs from '../../../Images/logos/nodejs.png'
import api from '../../../Images/logos/api.png'
import symfony from '../../../Images/logos/symfony.png'
import illustrator from '../../../Images/logos/illustrator.png'
import integromat from '../../../Images/logos/integromat.png'
import photoshop from '../../../Images/logos/photoshop.jpg'
import premiere from '../../../Images/logos/premiere.jpg'

// defaults.maintainAspectRatio = false;

const Robot = () => {

    const [scaleLangages, setScaleLangages] = useState("0")
    const [scaleTechnos, setScaleTechnos] = useState("0")
    const [scaleDesign, setScaleDesign] = useState("0")
    const [displayAntenna, setDisplayAntenna] = useState("none")

    const ShowLangages = () => {
        setScaleLangages("1");
    }
    const closeLangages = () => {
        setScaleLangages("0");
    }

    const ShowTechnos = () => {
        document.getElementById("rect-down").beginElement();
        document.querySelector(".click-antenna").style.animationPlayState = "paused";
        // document.getElementById("animUpper2").style.animationPlayState = "paused";
        setTimeout(() => {
            document.getElementById("rect-up").beginElement();
            document.getElementById("rect-antenna").beginElement();
            document.getElementById("rect-circle").beginElement();
            document.getElementById("rect-circle-mini").beginElement();
            setTimeout(() => {
                setDisplayAntenna("block")
                setScaleTechnos("1");
            }, 1000);
        }, 1000);
        // console.log(document.getElementById("animUpper2").endElement());

    }

    const closeTechnos = () => {
        setScaleTechnos("0");
        setTimeout(() => {
            setDisplayAntenna("none")
            document.getElementById("rect-down").beginElement();
            document.getElementById("rect-antenna2").beginElement();
            document.getElementById("rect-circle2").beginElement();
            document.getElementById("rect-circle-mini2").beginElement();
            setTimeout(() => {
                document.getElementById("rect-up").beginElement();
            }, 1000);
        }, 500);
    }

    const ShowDesign = () => {
        setScaleDesign("1");

    }
    const closeDesign = () => {
        setScaleDesign("0");

    }
    return (
        <div className="widget-robot">
            <svg id="svg_bot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 650">
                <ellipse className="shadow" cx="272" cy="580" rx="100" ry="30" fill="rgba(0,0,0,0.06)" />
                <g className="all">
                    <ellipse cx="272" cy="435" rx="45" ry="15" fill="none" stroke="#308bf9" strokeWidth="2" opacity="1">
                        <animate id="ellipse1Place" attributeName="cy" from="435" to="495" dur="1500ms"
                            begin="0ms;ellipse1Place.end" />
                        <animate id="ellipse1Width" attributeName="rx" from="45" to="75" dur="1500ms"
                            begin="0ms;ellipse1Place.end" />
                        <animate id="ellipse1Height" attributeName="ry" from="15" to="25" dur="1500ms"
                            begin="0ms;ellipse1Place.end" />
                        <animate id="ellipse1Opacity" attributeName="opacity" from="1" to="0" dur="1500ms"
                            begin="0ms;ellipse1Place.end" />
                    </ellipse>
                    <ellipse cx="272" cy="435" rx="45" ry="15" fill="none" stroke="#308bf9" strokeWidth="2" opacity="1">
                        <animate id="ellipse2Place" attributeName="cy" from="435" to="495" dur="1500ms"
                            begin="400ms;ellipse2Place.end" />
                        <animate id="ellipse2Width" attributeName="rx" from="45" to="75" dur="1500ms"
                            begin="400ms;ellipse2Place.end" />
                        <animate id="ellipse2Height" attributeName="ry" from="15" to="25" dur="1500ms"
                            begin="400ms;ellipse2Place.end" />
                        <animate id="ellipse2Opacity" attributeName="opacity" from="1" to="0" dur="1500ms"
                            begin="400ms;ellipse2Place.end" />
                    </ellipse>
                    <ellipse cx="272" cy="435" rx="45" ry="15" fill="none" stroke="#308bf9" strokeWidth="2" opacity="1">
                        <animate id="ellipse3Place" attributeName="cy" from="435" to="495" dur="1500ms"
                            begin="800ms;ellipse3Place.end" />
                        <animate id="ellipse3Width" attributeName="rx" from="45" to="75" dur="1500ms"
                            begin="800ms;ellipse3Place.end" />
                        <animate id="ellipse3Height" attributeName="ry" from="15" to="25" dur="1500ms"
                            begin="800ms;ellipse3Place.end" />
                        <animate id="ellipse3Opacity" attributeName="opacity" from="1" to="0" dur="1500ms"
                            begin="800ms;ellipse3Place.end" />
                    </ellipse>
                    <g className="footer">
                        <circle cx="272" cy="370" r="60" fill="rgb(255,159,64)" stroke="none" strokeWidth="1" />
                        <circle cx="272" cy="390" r="40" fill="rgb(247,184,49)" stroke="none" strokeWidth="1" />
                        <circle cx="285" cy="405" r="10" fill="rgb(251,217,106)" stroke="none" strokeWidth="1" />
                        <polygon rx="17.5" ry="17.5" fill="rgb(49,189,107)" stroke="rgb(49,189,107)" strokeWidth="19"
                            strokeLinejoin="round" points="195,354 215,374 330,374 345,354" />
                        <polygon rx="17.5" ry="17.5" fill="rgb(33,148,83)" stroke="rgb(33,148,83)" strokeWidth="19"
                            strokeLinejoin="round" points="192,350 200,357 341,357 348,350" />
                    </g>
                    <rect width="35" height="20" x="250" y="170" fill="rgb(197,213,215)" stroke="none" strokeWidth="1" />
                    <g className="body">
                        <g className="arms">
                            <polygon points="178,204 75,299 80,319 161,289" rx="17.5" ry="17.5" fill="rgb(111,120,121)"
                                stroke="rgb(111,120,121)" strokeWidth="10" strokeLinejoin="round" />
                            <polygon points="364,204 467,299 462,319 376,289" rx="17.5" ry="17.5" fill="rgb(111,120,121)"
                                stroke="rgb(111,120,121)" strokeWidth="10" strokeLinejoin="round" />
                        </g>
                        <polygon points="190,195 350,195 370,306 350,345 190,345 170,306" rx="17.5" ry="17.5"
                            fill="rgb(197,213,215)" stroke="rgb(197,213,215)" strokeWidth="19" strokeLinejoin="round" />
                        <g className="buttons">
                            <polygon points="220,195 315,195 275,270 260,270" rx="17.5" ry="17.5" fill="white" stroke="white"
                                strokeWidth="19" strokeLinejoin="round" />
                            <circle cx="267.5" cy="230" r="5" fill="rgb(111,120,121)" stroke="none" strokeWidth="1" />
                            <circle cx="267.5" cy="250" r="5" fill="rgb(111,120,121)" stroke="none" strokeWidth="1" />
                        </g>
                        <g className="cravate">
                            <polygon className="left-noeud" points="220,195 250,195 225,220 215,207" rx="17.5" ry="17.5"
                                fill="rgb(49,189,107)" stroke="rgb(49,189,107)" strokeWidth="19" strokeLinejoin="round">
                            </polygon>
                            <polygon className="right-noeud" points="285,195 315,195 322,207 310,220" rx="17.5" ry="17.5"
                                fill="rgb(49,189,107)" stroke="rgb(49,189,107)" strokeWidth="19" strokeLinejoin="round">
                            </polygon>
                            <path className="click-noeud" d="M247,185 a10,10 0 0,0 40,0" fill="rgb(49,189,107)" stroke="none" strokeWidth="1" onClick={ShowDesign}>
                                <animate id="noeudred" attributeName="fill" from="rgb(49,189,107)" to="red" dur="500ms" begin="0ms;noeudgreen.end" />
                                <animate id="noeudgreen" attributeName="fill" from="red" to="rgb(49,189,107)" dur="500ms" begin="noeudred.end" />
                            </path>
                        </g>
                        <rect width="3" height="76" x="266" y="279" fill="rgb(111,120,121)" stroke="none" strokeWidth="1" />
                        <polygon width="5" height="5" points="165,280 190,340 349,340 374,280 374,274 348,338 192,338 165,274"
                            fill="rgb(111,120,121)" stroke="rgb(111,120,121)" strokeWidth="1" strokeLinejoin="round" />
                    </g>
                    <g className="head">
                        <g className="ear left-ear">
                            <rect width="25" height="5" x="131" y="117" fill="rgb(111,120,121)" stroke="none" strokeWidth="1" />
                            <ellipse cx="170" cy="120" rx="15" ry="15" fill="rgb(111,120,121)" stroke="none" strokeWidth="2"
                                opacity="1">
                            </ellipse>
                            <circle cx="117" cy="120" r="15" fill="rgb(247,184,49)" />
                            <circle cx="121" cy="115" r="5" fill="rgb(251,217,106)" />
                        </g>
                        <g className="ear right-ear">
                            <rect width="25" height="5" x="384" y="117" fill="rgb(111,120,121)" stroke="none" strokeWidth="1" />
                            <ellipse cx="370" cy="120" rx="15" ry="15" fill="rgb(111,120,121)" stroke="none" strokeWidth="2"
                                opacity="1" />
                            <circle cx="424" cy="120" r="15" fill="rgb(247,184,49)" />
                            <circle cx="428" cy="115" r="5" fill="rgb(251,217,106)" />
                        </g>
                        <rect width="200" height="120" rx="17.5" ry="17.5" x="170" y="60" fill="rgb(197,213,215)" stroke="none"
                            strokeWidth="1" />
                        <rect className="click-antenna" width="40" height="30" x="248" y="60" fill="black" stroke="none" strokeWidth="1" />
                        <g className="upper-head">
                            <rect width="20" height="30" x="257" y="60" />
                            <g className="antenna">
                                <rect width="5" height="25" x="265" y="135" fill="rgb(111,120,121)" stroke="none" strokeWidth="1">
                                    <animate id="rect-antenna" attributeName="y" from="135" to="35" dur="1s" begin="indefinite" />
                                    <animate id="rect-antenna2" attributeName="y" from="35" to="135" dur="1s" begin="indefinite" />
                                </rect>
                                <circle className="antenna-up" cx="268" cy="110" r="15" fill="rgb(255,0,0)">
                                    <animate id="rect-circle" attributeName="cy" from="110" to="20" dur="1s" begin="indefinite" />
                                    <animate id="rect-circle2" attributeName="cy" from="20" to="110" dur="1s" begin="indefinite" />
                                </circle>
                                <circle cx="272" cy="110" r="5" fill="#e8eaed">
                                    <animate id="rect-circle-mini" attributeName="cy" from="110" to="20" dur="1s" begin="indefinite" />
                                    <animate id="rect-circle-mini2" attributeName="cy" from="20" to="110" dur="1s" begin="indefinite" />
                                </circle>
                            </g>
                            <g className="antenna" style={{ display: displayAntenna }}>
                                <rect width="5" height="25" x="265" y="35" fill="rgb(111,120,121)" stroke="none" strokeWidth="1">
                                    <animate id="rect-antenna" attributeName="y" from="135" to="35" dur="1s" begin="indefinite" />
                                    <animate id="rect-antenna2" attributeName="y" from="35" to="135" dur="1s" begin="indefinite" />
                                </rect>
                                <circle className="antenna-up" cx="268" cy="20" r="15" fill="rgb(255,0,0)">
                                    <animate id="rect-circle" attributeName="cy" from="110" to="20" dur="1s" begin="indefinite" />
                                    <animate id="rect-circle2" attributeName="cy" from="20" to="110" dur="1s" begin="indefinite" />
                                </circle>
                                <circle cx="272" cy="20" r="5" fill="#e8eaed">
                                    <animate id="rect-circle-mini" attributeName="cy" from="110" to="20" dur="1s" begin="indefinite" />
                                    <animate id="rect-circle-mini2" attributeName="cy" from="20" to="110" dur="1s" begin="indefinite" />
                                </circle>
                            </g>
                            <rect className="click-antenna" width="40" height="30" x="248" y="60" fill="rgb(197,213,215)" stroke="none" strokeWidth="1" onClick={ShowTechnos} >
                                <animate id="animUpper" attributeName="fill" from="rgb(197,213,215)" to="red" dur="500ms"
                                    begin="0ms;animUpper2.end" />
                                <animate id="animUpper2" attributeName="fill" from="red" to="rgb(197,213,215)" dur="500ms"
                                    begin="animUpper.end" />
                                <animate id="rect-down" attributeName="y" from="60" to="137" dur="1s" begin="indefinite" />
                                <animate id="rect-up" attributeName="y" from="137" to="60" dur="1s" begin="rect-down.end" />
                            </rect>
                            <rect height="75" rx="17.5" ry="17.5" fill="rgb(21,52,66)" stroke="none" strokeWidth="1" y="92" x="190"
                                width="160" />
                            <g className="face">
                                <ellipse className="eye" cx="215" cy="120" rx="7"
                                    ry="15" fill="rgb(255,255,255)" stroke="none" strokeWidth="1" />
                                <ellipse className="eye" cx="325" cy="120" rx="7"
                                    ry="15" fill="rgb(255,255,255)" stroke="none" strokeWidth="1" />
                                <polygon className="mouth" points="250,130 290,130 285,150 255,150" rx="17.5" ry="17.5" fill="red" stroke="red"
                                    strokeWidth="3" strokeLinejoin="round" onClick={ShowLangages}>
                                    <animate id="anim1" attributeName="fill" from="rgb(21,52,66)" to="red" dur="500ms"
                                        begin="0ms;anim2.end" />
                                    <animate id="anim2" attributeName="fill" from="red" to="rgb(21,52,66)" dur="500ms"
                                        begin="anim1.end" />
                                </polygon>
                            </g>
                        </g >
                    </g >
                </g >
            </svg >
            <div className='clickOnMe'><p>Cliquez sur les parties clignotantes</p></div>
            <div className="fiche technos" style={{ transform: "translateX(50%) scale(" + scaleTechnos + ")" }}>
                <span className="cross" onClick={closeTechnos}>X</span>
                <h3 className="title-fiche">Technologies</h3>
                <ul className="list-fiche">
                    <li>
                        <img src={react} alt="logo" />
                        ReactJS
                    </li>
                    <li>
                        <img src={symfony} alt="logo" />
                        Symfony
                    </li>
                    <li>
                        <img src={api} alt="logo" />
                        Api Platform
                    </li>
                    <li>
                        <img src={jquery} alt="logo" />
                        Jquery
                    </li>
                    <li>
                        <img src={mvc} alt="logo" />
                        MVC
                    </li>
                    <li>
                        <img src={nodejs} alt="logo" />
                        NodeJS
                    </li>
                    <li>AJAX</li>
                    <li>
                        <img src={wordpress} alt="logo" />
                        Wordpress
                    </li>
                    <li>
                        <img src={integromat} alt="logo" />
                        Integromat
                    </li>
                </ul>
            </div>
            <div className="fiche langages" style={{ transform: "translateX(50%) scale(" + scaleLangages + ")" }}>
                <span className="cross" onClick={closeLangages}>X</span>
                <h3 className="title-fiche">Langages</h3>
                <ul className="list-fiche">
                    <li>
                        <img src={html} alt="logo" />
                        HTML
                    </li>
                    <li>
                        <img src={css} alt="logo" />
                        CSS
                    </li>
                    <li>
                        <img src={js} alt="logo" />
                        Vanilla JS
                    </li>
                    <li>
                        <img src={php} alt="logo" />
                        PHP
                    </li>
                    <li>
                        <img src={mysql} alt="logo" />
                        MYSQL
                    </li>
                </ul>
            </div>
            <div className="fiche design" style={{ transform: "translateX(50%) scale(" + scaleDesign + ")" }}>
                <span className="cross" onClick={closeDesign}>X</span>
                <h3 className="title-fiche">Design</h3>
                <ul className="list-fiche">
                    <li>
                        <img src={photoshop} alt="logo" />
                        Photoshop
                    </li>
                    <li>
                        <img src={premiere} alt="logo" />
                        Premiere Pro
                    </li>
                    <li>
                        <img src={illustrator} alt="logo" />
                        Illustrator
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Robot
