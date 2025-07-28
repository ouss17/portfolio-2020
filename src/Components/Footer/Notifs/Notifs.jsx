import React from 'react'

const Notifs = ({arrayNotifs}) => {
    const DisplayNotifs = () => {
        if(arrayNotifs.length === 0) {
            return <p>Aucune nouvelle notification</p>
        }else{
            return arrayNotifs.map((notif, index) => (
                <div key={index} className="notif-card">
                    <h3 className="notif-title">{notif.title}</h3>
                    <p>{notif.description}</p>
                </div>
            ))
        }
    }
    return (
        <div className="notif">
            {DisplayNotifs()}
        </div>
    )
}

export default Notifs
