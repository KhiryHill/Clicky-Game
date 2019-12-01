import React from "react";

function CharacterCard(props) {
    return (
        <div className="card" onClick={() => props.clickPic(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default CharacterCard;