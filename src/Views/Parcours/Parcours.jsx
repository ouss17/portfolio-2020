import React from 'react'
import { Link, redirect } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import './Parcours.scss'

const Parcours = ({ darkmode, closeAll, isLogin }) => {
    return (
        <div onClick={closeAll}>
            {/* {(isLogin === false) ? redirect("/login") : null} */}
            <div className="header-road">
                <div className="window-road">
                    <div className="road-onglet">
                        <i className="fas fa-road"></i>
                        <h2>Parcours</h2>
                    </div>
                </div>
                <div className="url-road">
                    <div className="icones">
                        <i className="fas fa-arrow-left"></i>
                        <i className="fas fa-arrow-right"></i>
                        <HashLink to="/parcours#heidi"><i className="fas fa-redo"></i></HashLink>
                        <Link to="/"><i className="fas fa-home"></i></Link>
                    </div>
                    <div className="url">
                        <i className="fas fa-lock"></i>
                        <span className="url-name">portfolio<span>/parcours</span></span>
                        <i className="far fa-star"></i>
                    </div>
                    <div className="parameters">
                        <i className="fas fa-ellipsis-v"></i>
                    </div>
                </div>
            </div>
            <div className="road-content" style={{ backgroundColor: (darkmode ? "#1c1d1f" : "white"), color: (darkmode ? "white" : "black") }}>
            </div>
            <div className="switch"></div>
        </div>
    )
}

export default Parcours
