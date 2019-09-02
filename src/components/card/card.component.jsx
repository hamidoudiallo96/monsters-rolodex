import React from 'react'
import "./card.styles.css"
export const Card = props => {
    const {monsters} = props
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${monsters.id}?set=set2&size=180x180`} />
            
            <h2>{monsters.name}</h2>

            <p>{monsters.email}</p>
        </div>
    )
}
