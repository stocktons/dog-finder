import React from "react";
import {useParams} from 'react-router-dom';

function DogDetails( { dogs } ) {
    const {name} = useParams();
    const dog = dogs.filter(d => d.name === {name});
    return (
        <div>
            <h1>{name}</h1>
            <img src={`/images/${name}`} alt={`${name} is a cute dog`} />
            <p>{`Age: ${dog.age}`}</p>
            <ul>
                {dog.facts.map(f => <li>{f}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;