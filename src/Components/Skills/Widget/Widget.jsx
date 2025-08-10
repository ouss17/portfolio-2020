import React, { useState } from 'react'
import './Widget.scss'

const Widget = () => {
    const [dob] = useState(new Date("02/17/1998"));
    const [month_diff] = useState(Date.now() - dob.getTime());
    const [age_dt] = useState(new Date(month_diff));
    const [year] = useState(age_dt.getUTCFullYear());
    const [age] = useState(Math.abs(year - 1970));

    return (
        <div className="about modern-widget">
            <div className="widget-header">
                <div className="avatar">
                    {/* Remplace par une image si tu veux */}
                    <span>OD</span>
                </div>
                <div>
                    <h2 className="title-name">Ousmane Diarra</h2>
                    <div className="post">
                        <span className="badge">{import.meta.env.VITE_POST}</span>
                    </div>
                </div>
            </div>
            <div className="widget-section">
                <span className="age">{age} ans</span>
                <span className="lang"><i className="fas fa-language"></i> Français, Anglais</span>
            </div>
            <hr />
            <div className="widget-section">
                <h3>Contact</h3>
                <div className="contact-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{import.meta.env.VITE_ADRESS}</span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-phone-alt"></i>
                    <span>{import.meta.env.VITE_PHONENUMBER}</span>
                </div>
                <div className="contact-item">
                    <i className="fas fa-at"></i>
                    <span>{import.meta.env.VITE_EMAILADRESS}</span>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/ousmane-diarra-065907189/" rel="noreferrer" target="_blank" title="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/ouss17" target="_blank" rel="noreferrer" title="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <hr />
            <div className="widget-section">
                <h3>Centres d'intérêt</h3>
                <div className="interest-list">
                    <span><i className="fas fa-dumbbell"></i> Basketball, Musculation</span>
                    <span><i className="fas fa-book"></i> Mangas, Light Novels, Visual Novels</span>
                    <span><i className="fas fa-eye"></i> Animations japonaises, Films</span>
                </div>
            </div>
        </div>
    )
}

export default Widget
