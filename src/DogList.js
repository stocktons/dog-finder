import React from "react";
import { Link } from "react-router-dom"

function DogList({ dogs }) {
    return (
        <div>
            <h1>Look! Dogs!</h1>
            <ul>
                {dogs.map(dog => (<li key={dog.id}><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>))}
            </ul>
        </div>
    )
}

export default DogList;