import React from "react";
import "./SubmitButton.css";

export class SubmitButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

  handleMouseOver(e) {
    if (this.props.active) {
      const element = e.target;
      element.style.backgroundColor = "white";
      element.style.color = "hsl(25, 97%, 53%)";
    }
  }

  handleMouseLeave(e) {
    const element = e.target;
    element.style.backgroundColor = "hsl(25, 97%, 53%)";
    element.style.color = "white";
  }
  
  render() {
    return (
      <div className="submitDiv">
        <button
          onClick={this.props.onSubmit}
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
          className="submit"
        >
          SUBMIT
        </button>
      </div>
    );
  }
}
