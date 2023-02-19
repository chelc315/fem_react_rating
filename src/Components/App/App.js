import React from "react";
import "./App.css";
import star from "./star.svg";
import thankYou from "./thankYou.svg";
import { RatingButtons } from "../RatingButtons/RatingButtons";
import { SubmitButton } from "../SubmitButton/SubmitButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      rating: null,
    };
    this.chooseRating = this.chooseRating.bind(this);
    this.submitRating = this.submitRating.bind(this);
  }

  chooseRating(rating) {
    this.setState({ rating: rating });
  }

  submitRating() {
    if (this.state.rating) {
      this.setState({
        submitted: true
      })
    }
  }

  render() {
    let body;

    if (this.state.submitted) {
      body = (
        <div>
          <img src={thankYou} alt="Thank You Illustration" className="thankYouIllustration" />
          <div className="ratingSelection">
            <h2 className="center">You selected {this.state.rating} out of 5</h2>
          </div>
          <h1 className="center">Thank you!</h1>
          <p className="bodyCopy center thankYou topMargin50">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
      );
    } else {
      body = (
        <div>
          <div className="starDiv">
            <img src={star} alt="Star Icon" className="starIcon"/>
          </div>
          <h1>How did we do?</h1>
          <p className="bodyCopy ratingRequest">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <RatingButtons 
            className="ratingButtons"
            chooseRating={this.chooseRating}
            selectedRating={this.state.rating} />
          <SubmitButton 
            active={this.state.rating ? true : false} 
            onSubmit={this.submitRating} />
        </div>
      );
    }

    return (
      <div className="App">
        <main>{body}</main>
      </div>
    );
  }
}

export default App;
