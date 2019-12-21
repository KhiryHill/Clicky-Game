import React from "react";
import "./card.css"
function Card(props) {
    return (
        <div className="card" onClick={() => props.clickPic(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default Card;