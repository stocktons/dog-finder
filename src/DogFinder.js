import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails'

export default function DogFinder({ dogs }) {
    const { name } = useParams();
    const dog = dogs.find(d => d.name === name);

    return <DogDetails dog={dog}/>
}