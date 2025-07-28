import { useContext, useEffect } from 'react'
import { Link, redirect, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


import Robot from '../../Components/Skills/Robot/Robot'
import Widget from '../../Components/Skills/Widget/Widget'


import './Skills.scss'
import nbVisitContext from '../../../context/nbVisitContext'

const Skills = ({ darkmode, closeAll, isLogin }) => {

    const { nbVisit, setNbVisit } = useContext(nbVisitContext)

    let location = useLocation()

    useEffect(() => {
        if (location.pathname === "/competences") {
            document.getElementById("footer").style.display = "block"
        }
        // console.log(location.pathname);
    }, [location])

    const GoHome = () => {
        if (nbVisit <= 0) {
            setNbVisit(1)
        }
    }



    return (
        <div onClick={closeAll}>
            {/* {(isLogin === false) ? redirect("/login") : null} */}
            <div className="header-skill">
                <div className="window-skill">
                    <div className="skill-onglet">
                        <i className="fas fa-database"></i>
                        <h2>Compétences</h2>
                    </div>
                </div>
                <div className="url-skill">
                    <div className="icones">
                        <i className="fas fa-arrow-left"></i>
                        <i className="fas fa-arrow-right"></i>
                        <HashLink to="/competences#heidi"><i className="fas fa-redo"></i></HashLink>
                        <Link onClick={GoHome} to="/"><i className="fas fa-home"></i></Link>
                    </div>
                    <div className="url">
                        <i className="fas fa-shield-alt"></i>
                        <div id="url">
                            <i className="fas fa-lock"></i>
                            <span className="url-name">portfolio<span>/competences</span></span>
                        </div>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="parameters">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
            <div className="skill-content" style={{ backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }}>
                <div className="widget" >
                    <Widget />
                </div>
                <div className="robot">
                    <Robot />
                </div>
            </div>
            <div className="switch"></div>
        </div>
    )
}

export default Skills
