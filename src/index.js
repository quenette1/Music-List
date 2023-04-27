import App from "./App";
import Form from "./components/Form"
import React from "react";
import { Navbar } from "react-bootstrap";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class OK extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/form" exact component={Form}/>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
