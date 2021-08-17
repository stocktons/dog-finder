import React from "react";

function DogDetails({ name, src, age, facts }) { // destructuring because this component doesn't really need
    // to know about the whole object. It's a simple enough component that it doesn't need more. 
    return (
        <div>
            <h1>{name}</h1>
            <img src={src} alt={`${name} is a cute dog`} />
            <p>{`Age: ${age}`}</p>
            <ul>
                {facts.map((f, idx) => <li key={idx}>{f}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;