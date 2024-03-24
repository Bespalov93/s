// В новом файле AverageRating.jsx
import React from "react";

const AverageRating = ({ averageRating }) => {
  return (
    <div className={`AverageRate `}>
      <h3>Средняя оценка:</h3>
      <div className={`AverageCircle ${averageRating >= 4.5 ? 'average-5' : averageRating >= 4.0 ? 'average-4' : averageRating >= 3.5 ? 'average-3' : averageRating >= 2.0 ? 'average-2' : averageRating > 0 ? 'average-1' : 'average-0'}`}>
        <h4>{averageRating}</h4>
      </div>
    </div>
  );
};

export default AverageRating;
