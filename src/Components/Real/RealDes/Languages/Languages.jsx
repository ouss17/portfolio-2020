import React from 'react'

import './Languages.scss'

const Languages = ({techno, percentage}) => {
    return (
        <div className="language">
            <h3 className="usage-language">{techno}</h3>
            <div className="charge-bar">
                <div className="charge" style={{width:percentage+'%'}}></div>
            </div>
        </div>
    )
}

export default Languages
