import React from "react";
import "./RatingButton.css";

export class RatingButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selected: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleClick(e) {
    const element = e.target;
    this.props.chooseRating(element.value);
    element.classList.add('selected');
    this.setState({ selected: true });
    const prevSelectedRating = document.querySelectorAll(".selected");
    for (let i = 0; i < prevSelectedRating.length; i++) {
        if (element.value !== prevSelectedRating[i].value) {
            prevSelectedRating[i].classList.remove('selected');
        }
    }
  }

  handleMouseOver(e) {
    const element = e.target;
    element.classList.add('hover');
  }

  handleMouseLeave(e) {
    const element = e.target;
    element.classList.remove('hover');
  }

  render() {
    return (
      <button
        value={this.props.rating}
        className={`ratingButton`}
        onClick={this.handleClick}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}>
        {this.props.rating}
      </button>
    );
  }
}
