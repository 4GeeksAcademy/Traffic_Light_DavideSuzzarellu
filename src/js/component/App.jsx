import React, { useState } from "react";
import { Circle } from "./Circle";

export const App = () => {
    const [lights, setLights] = useState({
        red: false,
        yellow: false,
        green: false,
        purple: false,
    });

    const [purpleVisible, setPurpleVisible] = useState(false);

    const handleCircleClick = (color) => {
        setLights((prevLights) => ({
            red: color === "red",
            yellow: color === "yellow",
            green: color === "green",
        }));
    };

    const handleChangeStateClick = () => {
        if (!purpleVisible) {
            setLights((prevLights) => {
                const { red, yellow, green } = prevLights;
                if (red) {
                    return { red: false, yellow: true, green: false };
                } else if (yellow) {
                    return { red: false, yellow: false, green: true };
                } else {
                    return { red: true, yellow: false, green: false };
                }
            });
        }
        setPurpleVisible(false);
    };

    const handlePurpleButtonClick = () => {
        setPurpleVisible(!purpleVisible);
    };

    return (
        <main>
        <section id="container">
            <Circle color="red" onClick={() => handleCircleClick("red")} isOn={lights.red && !purpleVisible} />
            <Circle color="yellow" onClick={() => handleCircleClick("yellow")} isOn={lights.yellow && !purpleVisible} />
            <Circle color="green" onClick={() => handleCircleClick("green")} isOn={lights.green && !purpleVisible} />
            {purpleVisible && <Circle color="purple" isOn={true}/>} 
        </section>

        <aside>
            <button onClick={handleChangeStateClick}>Cambia estado semáforo</button>
            <button onClick={handlePurpleButtonClick}>
                {purpleVisible ? "Ocultar Púrpura" : "Mostrar Púrpura"}
            </button>
        </aside>
    </main>
    );
};






