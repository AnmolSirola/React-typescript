import './App.css';
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { Personlist } from './components/Personlist';
import { Status } from './components/Status';
import { Oscar } from './components/Oscar';

// Add this line to import or define the Heading component
import { Heading } from './components/Heading';

function App() {
    const personName = {
        first: "Bruce",
        last: "Wayne"
    } 
    const nameList = [
        {
            first: "Bruce",
            last: "Wayne"
        },
        {
            first: "Clark",
            last: "Kent"
        },
        {
            first: "Diana",
            last: "W"
        }
    ]
    return (
        <div className="App">
            <Greet name="Anmol" messageCount={20} isLoggedIn={true} />
            <Person name={personName} />
            <Personlist names={nameList} />
            <Status status="Success"/>
            <Oscar>
                <Heading>Oscar goes to Batman</Heading>
            </Oscar>
        </div>
    );
}

export default App;
