import StarRating from 'react-native-star-rating';
import React, { Component } from 'react';
import { MAIN_CERISE } from '../../common/colors';

class GeneralStarExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating });
  }

  render() {
    return (
      <StarRating
        emptyStarColor={MAIN_CERISE}
        starColor={MAIN_CERISE}
        starSize={40}
        iconSet={'MaterialIcons'}
        fullStar={'star'}
        emptyStar={'star-border'}
        halfStar={'star-half'}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={rating => this.onStarRatingPress(rating)}
      />
    );
  }
}

export default GeneralStarExample;
