// В новом файле QuestionRatings.jsx
import React from "react";
import star from '../../../images/Star 5.svg'

const QuestionRatings = ({ data, ratings, handleRatingChange, getImageColor }) => {
  return (
    <div className='RateWrapper'>
      <div className='TitleRateWrapper'> <h3>Оцените качество работы склада</h3> </div>
      {data.map((item) => (
        <div key={item.id} className="question">
          <p>{item.question}</p>
          <div className='WrapperStars'>
            {[1, 2, 3, 4, 5].map((rating) => (
              <label key={rating} className="star-label">
                <img
                  src={star}
                  alt={`star-${rating}`}
                  className={`star-icon ${getImageColor(item.id, rating)}`}
                  onClick={() => handleRatingChange(item.id, rating)}
                />
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionRatings;
