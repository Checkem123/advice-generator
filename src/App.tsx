import "./App.css";
import Advices from "./components/Advices";

import DiceIcon from "../images/icon-dice.svg";
import PatternDivider from "../images/pattern-divider-desktop.svg";
import { useState } from "react";

function App() {
    const [clicked, setClicked] = useState<boolean>(true);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <div className="container">
            <Advices clicked={clicked} />
            <img className="divider" src={PatternDivider} alt="" />
            <button onClick={handleClick}>
                <img src={DiceIcon} alt="dice icon" />
            </button>
        </div>
    );
}

export default App;
