import React from "react";

function DogDetails({ dog }) {
    return (
        <div>
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={`${dog.name} is a cute dog`} />
            <p>{`Age: ${dog.age}`}</p>
            <ul>
                {dog.facts.map(f => <li>{f}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;