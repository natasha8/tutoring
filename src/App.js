import "./App.css";
import HeroComponent from "./components/HeroComponent";
import Navigation from "./components/Navigation";

const user = { name: "Fidan", age: "10" };
const user2 = { name: "Natasha", age: "8" };
function App() {
    return (
        <div className="test">
            <Navigation  user={user}/>
            <HeroComponent user={user} />
            <Navigation user={user2} />
        </div>
    );
}

export default App;
