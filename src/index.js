import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class NamePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Greetings, traveler! What is your name?
          <br />
          <input
            type="text"
            value={this.props.data.name}
            onChange={event =>
              this.props.setStateFunction("name", event.target.value)
            }
          />
        </p>
        <button onClick={() => this.props.goFunction(StartPage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class StartPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome, {this.props.data.name}! How would you like to get to your
          destination?
        </p>
        <button onClick={() => this.props.goFunction(TrainPage)}>Train</button>
        <button onClick={() => this.props.goFunction(ShipPage)}>Ship</button>
      </div>
    );
  }
}

class TrainPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome aboard the choo-choo train! Please make your way to your seat.
          What is the number?
          <br />
          <input
            type="number"
            value={this.props.data.TrainSeatA}
            onChange={event =>
              this.props.setStateFunction("TrainSeatA", event.target.value)
            }
          />
          <select
            value={this.props.data.TrainSeatB}
            onChange={event =>
              this.props.setStateFunction("TrainSeatB", event.target.value)
            }
          >
            <option value="A">A</option>
            <option value="C">C</option>
            <option value="E">E</option>
            <option value="G">G</option>
          </select>
        </p>
        <button onClick={() => this.props.goFunction(TrainSeatPage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class ShipPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome aboard the choo-choo Ship! Please make your way to your seat.
          What is the number?
          <br />
          <input
            type="number"
            value={this.props.data.ShipSeatA}
            onChange={event =>
              this.props.setStateFunction("ShipSeatA", event.target.value)
            }
          />
          <select
            value={this.props.data.ShipSeatB}
            onChange={event =>
              this.props.setStateFunction("ShipSeatB", event.target.value)
            }
          >
            <option value="A">A</option>
            <option value="C">C</option>
            <option value="E">E</option>
            <option value="G">G</option>
          </select>
        </p>
        <button onClick={() => this.props.goFunction(ShipSeatPage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class TrainSeatPage extends Component {
  render() {
    if (this.props.data.TrainSeatA > 50) {
      return (
        <div className="page">
          <p>YOU ARE DEAD.</p>
        </div>
      );
    } else
      return (
        <div className="page">
          <p>YOU SURVIVED.</p>
        </div>
      );
  }
}

class ShipSeatPage extends Component {
  render() {
    if (this.props.data.ShipSeatA > 50) {
      return (
        <div className="page">
          <p>YOU ARE DEAD.</p>
        </div>
      );
    } else
      return (
        <div className="page">
          <p>YOU SURVIVED.</p>
        </div>
      );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageClass: NamePage
    };
  }

  goToPage(pageClass) {
    this.setState({
      pageClass: pageClass
    });
  }

  render() {
    var app = this;

    function setState(key, value) {
      let newState = {};
      newState[key] = value;
      app.setState(newState);
    }

    function goFunction(pageClass) {
      app.goToPage(pageClass);
    }

    return (
      <div className="App">
        <this.state.pageClass
          data={this.state}
          setStateFunction={setState}
          goFunction={goFunction}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
