import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";
import "../components/styles.css";


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.getElementById('root')),
  )
})
