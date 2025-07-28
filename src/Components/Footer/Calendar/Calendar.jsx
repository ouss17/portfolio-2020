import React, { useState } from 'react'
// import { useCalendar, shortDayNames } from "react-calendar-hook";


import './Calendar.scss'

const Calendar = ({ hour, minute, second }) => {
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
    // const {
    //     items,
    //     // day,
    //     month,
    //     year,
    //     prevMonth,
    //     nextMonth,
    //     selectDate
    // } = useCalendar();

    setInterval(() => {
        let date = new Date();
        let day = date.getDay();
        let numberDay = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        setNbJour(numberDay);
        setAnnee(year);
        setJour(tabDay[day]);
        setMois(tabMonth[month].month);
        return day, numberDay, month, year
    }, 1000);


    return (
        <div>
            <p className="heure">{hour}:{minute}:{second}</p>
            <p className="current-day">{jour} {nbJour} {mois} {annee}</p>
            <div className="controls">
                <div>
                    {/* <button onClick={prevMonth}><i className="fas fa-chevron-left"></i></button>
                    <span className="currentMonth">{` ${month.name} ${year}  `}</span>
                    <button onClick={nextMonth}><i className="fas fa-chevron-right"></i></button> */}
                </div>
            </div>
            <div id="calendar">
                {/* Calendar head with day names */}
                <div className="head">
                    {/* {shortDayNames.map(day => (
                        <div className="day week" key={`head-${day}`}>
                            {day}
                        </div>
                    ))} */}
                </div>

                {/* Calendar */}
                <div className="body">
                    {/* {items.map(day => {
                        const activeClass = !day.active ? "inactive" : "";
                        const selectedClass = day.selected ? "selected" : "";
                        return (
                            <div
                                className={`day ${activeClass} ${selectedClass}`}
                                key={day.fullDate}
                                onClick={() => {
                                    selectDate(day.fullDate);
                                    console.log(day);
                                }}
                            >
                                {day.date}
                            </div>
                        );
                    })} */}
                </div>
            </div>
        </div>
    )
}

export default Calendar

