import React from "../react";

class Hello0 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        HELLO0
        <div id="Hello0">HELLO COMPONENT'S WORLD, text = {this.props.text}</div>
      </div>
    );
  }
}

const Hello1 = (props) => {
  return (
    <div id="Hello1">
      HELLO1
      <Hello0 text={props.text}/>
    </div>
  );
};

class Hello2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello2
        <Hello1 text={"asdfasdf"}/>
      </div>
    );
  }
}

const ReactTest0 = () => {
  return (
    <div id="react-example-0" style={{color: "red"}}>
      <Hello2 />
    </div>
  );
};

export default ReactTest0;
