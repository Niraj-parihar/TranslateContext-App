//this is how we write context object in React
//this is a default value context object.

import React from "react";

const Context = React.createContext("English");

export class LanguageStore extends React.Component {
  state = { language: "English" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      //adding all of our state into ...this.state
      <Context.Provider value={{ ...this.state, onLanguageChange:this.onLanguageChange}}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
