import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const SubGreeting = ({ greeting }) => <h1>{greeting}</h1>;

const Salutations = ({ salutations }) => <h3>{salutations}</h3>;

class Header extends Component {
  static SubGreeting = SubGreeting;

  static Salutations = Salutations;

  state = {
    greeting: "Hello World",
    salutations: "How you doin?"
  };
  render() {
    const { greeting, salutations } = this.state;
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { greeting, salutations });
    });
    return <Fragment>{children}</Fragment>;
  }
}

const App = () => (
  <div style={styles}>
    <Header>
      <Header.SubGreeting />
      <Header.Salutations />
    </Header>
  </div>
);

render(<App />, document.getElementById("root"));
