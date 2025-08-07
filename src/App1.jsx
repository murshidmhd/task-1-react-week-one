import { Component, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeCard from "./components/wlcomeCard";
import { useRef } from "react";
import DarkTheme from "./components/task-1";

function App(){
    return(
        <DarkTheme />
    )
}

export default App