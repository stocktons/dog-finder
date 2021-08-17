import React, {useState} from "react";

const INITIAL_STATE = {name: '', age: null, src: '', facts: []};

function DogForm({ addDog }) {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // logic for dog facts to be put into an array
        addDog({ ...formData})
        setFormData(INITIAL_STATE);
        // could use history.push() here to send the user to a new page
    }

    return (
        <form onSubmit={handleSubmit}> {/**calls a prop that has been passed down */}
            <label htmlFor="name">Name:</label>
            <input
            id="name"
            type="text"
            name="name"
            placeholder="Dog Name"
            value={formData.name}
            onChange={handleChange}
            />
            <label htmlFor="age">Age:</label>
            <input
            id="age"
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            />
            <label htmlFor="src">Image Url:</label>
            <input
            id="src"
            type="text"
            name="src"
            placeholder="src"
            value={formData.src}
            onChange={handleChange}
            />
            <label htmlFor="facts">Facts:</label>
            <textarea
            id="facts"
            name="facts"
            placeholder="facts"
            onChange={handleChange}>{formData.facts}
            </textarea>

            <button>Add Dog</button>
        </form> 
    )
}

export default DogForm;

