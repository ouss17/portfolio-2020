import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import nbVisitContext from '../../../context/nbVisitContext';
import { Linkedin } from '../../assets/Svgs';
import Skills from '../Skills/Skills';
import './Index.scss';


const Index = ({ darkmode, closeAll, isLogin }) => {

    const { nbVisit, setNbVisit } = useContext(nbVisitContext)

    let location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") {
            document.getElementById("footer").style.display = "block"
        }
        // console.log(location.pathname);
    }, [location])

    return (
        <>
            {
                /*
                * Affiche page compétences en premier
                 */
                (nbVisit <= 0) ?
                    <Skills darkmode={darkmode} closeAll={closeAll} isLogin={isLogin} />
                    :
                    <div className="background" onClick={closeAll}>
                        {/* {(isLogin === false) ? redirect("/login") : null} */}
                        <div className="advice">
                            <h1 className='title-main'>Bienvenue sur le Portfolio d'Ousmane Diarra !</h1>
                            <p>Ce site servira à mettre en avant
                                <br />
                                mes réalisations et compétences en tant que développeur web</p>
                            <p>N'hésitez pas à m'envoyer un mail si vous avez un projet ou besoin d'un service !</p>
                            <p>Vous êtes libre de cliquer n'importe où !</p>
                            <p>Vous découvrirez peut-être quelques surprises...</p>
                        </div>
                        <div className="socials-place">
                            {/* <div id="twitter">
                                <a href="https://www.twitter.com/GentlesDev" target="_blank" rel="noreferrer">
                                    <Twitter fill={"rgb(0,0,0)"} />
                                    <p>Twitter</p>
                                </a>
                            </div>
                            <div id="instagram">
                                <a href="https://www.instagram.com/gentlesdev/" target="_blank" rel="noreferrer">
                                    <Instagram fill={"none"} />
                                    <p>Instagram</p>
                                </a>
                            </div> */}
                            <div id="linkedin">
                                <a href="https://www.linkedin.com/in/ousmane-diarra-065907189/" target="_blank" rel="noreferrer">
                                    <Linkedin fill={"#026eaa"} />
                                    <p>Linkedin</p>
                                </a>
                            </div>
                        </div>
                        <div className="no-visible">
                            <p className='user'>Développeur web</p>
                            <p className='user'>{import.meta.env.VITE_ADRESS}</p>
                            <p className="user">{import.meta.env.VITE_PHONENUMBER}</p>
                            <p className="user">{import.meta.env.VITE_EMAILADRESS}</p>
                            <p>Ce site servira à mettre en avant mes réalisations et compétences en tant que développeur web</p>
                            <p>N'hésitez pas à m'envoyer un mail si vous avez un projet ou besoin d'un service !</p>
                            <p>Vous êtes libre de cliquer n'importe où !</p>
                            <p>Vous découvrirez peut-être quelques surprises...</p>
                        </div>
                        <div className="switch"></div>
                    </div>
            }
        </>
    )
}

export default Index
