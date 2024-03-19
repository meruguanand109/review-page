import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReview: 0,
  }

  onClickLeftArrow = () => {
    const {activeReview} = this.state
    if (activeReview === 0) {
      this.setState({activeReview: 0})
    } else {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  onClickRightArrow = () => {
    const {activeReview} = this.state
    if (activeReview === 3) {
      this.setState({activeReview: 3})
    } else {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    const {imgUrl, username, companyName, description} =
      reviewsList[activeReview]
    console.log(activeReview)
    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="carousels-container">
          <button
            className="arrow-btn"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            className="arrow-btn"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
