import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div className="ui continer">
        <div>
          Select A Language:
          <i
            className="flag us"
            onClick={() => this.context.onLanguageChange("English")}
          />
          <i
            className="flag nl"
            onClick={() => this.context.onLanguageChange("Dutch")}
          />
        </div>
      </div>
    );
  }
}

export default LanguageSelector;
