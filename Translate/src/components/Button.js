import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderButton(Color) {
    return (
      <button className={`ui button ${Color}`}>
        <LanguageContext.Consumer>
          {({ language }) => (language === "English" ? "Submit" : "Voorleggen")}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(Color) => this.renderButton(Color)}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
