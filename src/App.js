import React, {useState} from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import DogList from "./DogList";
import DogFinder from "./DogFinder";
import DogForm from "./DogForm";
import duke from './images/duke.jpg';
import tubby from './images/tubby.jpg';
import perry from './images/perry.jpg';
import whiskey from './images/whiskey.jpg';
import Navbar from './Navbar';
import './App.css';
import { v4 as uuid } from 'uuid';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

function App(props) {
  let [dogs, setDogs] = useState(props.dogs);

  function addDog(newDog) {
    setDogs(dogs => [ ...dogs, {...newDog, id: uuid()}])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar dogs={dogs}/>
        <Switch>
          <Route exact path="/dogs" >
            <DogList dogs={dogs} /> 
            <DogForm addDog={addDog}/>
          </Route>
          <Route path="/dogs/:name" >
            <DogFinder dogs={dogs} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      id: uuid(),
      name: "Whiskey",
      age: 5,
      src: whiskey, //better naming choice might be image
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      id: uuid(),
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      id: uuid(),
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      id: uuid(),
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;