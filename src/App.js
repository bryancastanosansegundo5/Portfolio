import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
