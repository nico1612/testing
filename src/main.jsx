import React from "react";
import ReactDOM from "react-dom/client";

//import moduleName from "./HelloWorldApp"
import { FirstApp } from './FirstApp'
import { CounterApp } from "./CounterApp";
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={10}/>
        {/*<FirstApp title="hola, soy goku"/>*/}
    </React.StrictMode>
)