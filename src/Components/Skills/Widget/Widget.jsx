import React, { useState } from 'react'

import './Widget.scss'

const Widget = () => {
    const [dob] = useState(new Date("02/17/1998"));
    //calculate month difference from current date in time  
    const [month_diff] = useState(Date.now() - dob.getTime());

    //convert the calculated difference in date format  
    const [age_dt] = useState(new Date(month_diff));

    //extract year from date      
    const [year] = useState(age_dt.getUTCFullYear());

    //now calculate the age of the user  
    const [age] = useState(Math.abs(year - 1970));

    return (
        <div className="about">

            <h2 className="title-name">Ousmane Diarra</h2>
            <div className="post">
                <p style={{ fontWeight: "bold" }}>{import.meta.env.VITE_POST}</p>
            </div>
            <p className="age">{age} ans</p>
            <div className="lang">
                <p><i className="fas fa-language"></i> : Français, Anglais</p>
            </div>
            <div className="contact">
                <h3 className="contact">Contact</h3>
                <div className="adress">
                    <p>Adresse : {import.meta.env.VITE_ADRESS}</p>
                </div>
                <div className="tel">
                    <p><i className="fas fa-phone-alt"></i> : {import.meta.env.VITE_PHONENUMBER}</p>
                </div>
                <div className="mail">
                    <p><i className="fas fa-at"></i> : {import.meta.env.VITE_EMAILADRESS}</p>
                </div>
                <div className="social">
                    <a href="https://www.linkedin.com/in/ousmane-diarra-065907189/" rel="noreferrer" target="_blank" ><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/ouss17" target="_blank" rel="noreferrer" ><i className="fab fa-github"></i></a>
                </div>
            </div>
            <div className="interest">
                <h3>Centres d'intéret</h3>
                <div className="sport">
                    <p><i className="fas fa-dumbbell"></i> : Basketball, Musculation</p>
                </div>
                <div className="lectures">
                    <p><i className="fas fa-book"></i> : Mangas, Ligth Novels, Visual Novels</p>
                </div>
                <div className="cinematographie">
                    <p><i className="fas fa-eye"></i> : Animations japonaises, Films</p>
                </div>
            </div>
        </div>
    )
}

export default Widget
