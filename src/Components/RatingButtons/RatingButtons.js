import React from "react";
import "./RatingButtons.css";
import { RatingButton } from "../RatingButton/RatingButton";

export class RatingButtons extends React.Component {render() {
        const ratingOptions = [1, 2, 3, 4, 5];
        return (
            <div className="ratingButtons">
                {ratingOptions.map((option) => {
                    return (
                        <RatingButton
                            key={option} 
                            rating={option} 
                            chooseRating={this.props.chooseRating}
                            selectedRating={this.props.selectedRating} />)
                })}
            </div>
        );
    }
};