// QuestionRatings.jsx
import React from "react";
import Star from '../../../images/Star 5.svg';

// Отображение одной звезды
const StarIcon = ({ color, onClick }) => {
  return (
    <label className="star-label">
      <img
        src={Star}
        alt="star"
        className={`star-icon ${color}`}
        onClick={onClick}
      />
    </label>
  );
};

const QuestionRatings = ({ questions, ratings, handleRatingChange, getImageColor }) => {
  return (
    <div className="RateWrapper">
      <div className="TitleRateWrapper">
        <h3>Оцените качество работы склада</h3>
      </div>
      {questions.map((item, index) => (
        <div key={index} className="question">
          <p>{item.question}</p>
          <div className="WrapperStars">
            {[1, 2, 3, 4, 5].map((rating) => (
              <StarIcon
                key={rating}
                color={getImageColor(index, rating)}
                onClick={() => handleRatingChange(index, rating)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionRatings;