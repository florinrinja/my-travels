import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//import Travel from "./Travel";
import Travels from "./Travels";





class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        {/* <Travels
          destination="Europe"
          country="Croatia"
          photo="https://www.rei.com/adventures/assets/adventures/images/trip/core/europe/cih_hero"
          distance="~ approx 1700 km. by car. ~"
        /> */}
        <Travels
          destination="Europe"
          country="Romania"
          photo="https://i.ytimg.com/vi/UHRcQmQ_hK0/maxresdefault.jpg"
          distance="~ approx 3000 km. by car. ~"
        />
      </div>
    );
  }
}

export default App;
