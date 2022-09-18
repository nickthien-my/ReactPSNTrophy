import React from "react";

function TrophyCard(trophy) {
    return (
        <div className="card">
            <div className="top">
                <img
                    src={trophy.imgURL}
                    alt={trophy.name}
                />
            </div>
            <div className="bottom">
                <p>{trophy.name}</p>
                <p>{trophy.description}</p>
            </div>
        </div>
    );
}

export default TrophyCard;