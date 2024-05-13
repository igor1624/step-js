import React from "../react";
import {ThemesTogglerComponent} from "../step-js-custom";

const Person = (props) => {
  return (
    <div>
      <ThemesTogglerComponent htmlElement={document.body} />
      <div>THIS IS A PERSON:</div>
      <div>{props.person}</div>
    </div>
  );
};

const View = (props) => {
  return (
    <div style={{backgroundColor: "indigo", color: "white"}}>
      VIEW
      <button onClick={() => props.onBaseClick()}>BASE++</button>
      <button onClick={() => props.onCounterClick()}>COUNTER++</button>
      <div>base = {props.base} </div>
      <div>counter = {props.counter} </div>
      <div>sum = {props.base + props.counter} </div>
      <div>PEOPLE</div>
      <ul>
        {props.people.map((person) => {
          return <Person key={person} person={person} />
        })}
      </ul>
    </div>
  );
};

class Counter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{backgroundColor: "tan"}}>
        <div>counter = {this.state.counter}</div>
        <View
          base={this.props.base}
          counter={this.state.counter}
          people={this.state.people}
          onBaseClick={this.props.onBaseClick}
          onCounterClick={this.onCounterClick}
        />
       </div>
    );
  }

  componentWillMount() {
    this.setState({
      counter: 1,
      people: [
        "Ivanov",
        "Petrov",
        "Sidorov"
      ]
    });
  }

  onCounterClick = () => {
    const state ={... this.state};
    state.counter = state.counter + 1;
    state.people.push("NEW PERSON " + state.counter);
    this.setState(state);
  };

  componentDidMount() {
    console.log("Counter DID mount");
  }

  componentDidUpdate() {
    console.log("Counter DID update");
  }

  componentWillUnmount() {
    console.log("Conter WILL unmount");
  }
}

class Page0 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      base: 11
    }
  }

  render() {
    return (
      <div
        className={"class" + this.state.base}
        style={{
          backgroundColor: this.state.base % 2 === 0 ? "teal" : "maroon"
        }}
      >
        <div>base = {this.state.base}</div>
        <Counter base={this.state.base} onBaseClick={this.onBaseClick}/>
      </div>
    );
  }

  onBaseClick = () => {
    this.setState({
      base: this.state.base + 1
    });
  };

  componentDidMount() {
    console.log("Base DID mount");
  }

  componentDidUpdate() {
    console.log("Base DID update");
  }

  componentWillUnmount() {
    console.log("Base WILL unmount");
  }
}

class Page1 extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: "magenta"}}>DUMMY PAGE</div>
    );
  }
}

class ExampleCustom01 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.page % 2 === 0 ? "red" : "green"
        }}
      >
        <button onClick={() => this.setPage(0)}>PAGE 0</button>
        <button onClick={() => this.setPage(1)}>PAGE 1</button>
        {this.state.page === 0 &&
          <div>
            <div>THIS IS PAGE 0</div>
            <Page0 />
          </div>
        }
        {this.state.page !== 0 &&
          <div>THIS IS PAGE 1
            <Page1 />
          </div>
        }
      </div>
    )
  }

  setPage = (page) => {
    this.setState({page: page});
  };

  componentDidMount() {
    console.log("Router DID mount");
  }

  componentDidUpdate() {
    console.log("Router DID update");
  }

  componentWillUnmount() {
    console.log("Router WILL unmount");
  }
}

export default ExampleCustom01;
