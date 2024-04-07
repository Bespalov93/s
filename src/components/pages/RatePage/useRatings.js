// useRatings.js
import { useState, useEffect } from "react";

export default function useRatings(data) {
  const [ratings, setRatings] = useState({});
  const [averageRating, setAverageRating] = useState(0);

  const getImageColor = (questionId, rating) => {
    return ratings[questionId] >= rating ? 'active' : '';
  };

  const handleRatingChange = (questionId, rating) => {
    const updatedRatings = { ...ratings, [questionId]: rating };
    setRatings(updatedRatings);
  };

  const calculateAverageRating = () => {
    const totalRatings = Object.values(ratings);
    if (totalRatings.length > 0) {
      const total = totalRatings.reduce((acc, cur) => acc + cur, 0);
      const average = total / totalRatings.length;
      const roundedAverage = average.toFixed(1);
      setAverageRating(roundedAverage);
    } else {
      setAverageRating(0);
    }
  };

  const loadRatingsFromLocal = () => {
    const savedData = localStorage.getItem('questions_answers');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setRatings(parsedData);
    }
    const savedAverageRating = localStorage.getItem('average_rating');
    if (savedAverageRating) {
      setAverageRating(parseFloat(savedAverageRating));
    }
  };

  const saveRatingsToLocal = () => {
    localStorage.setItem('questions_answers', JSON.stringify(ratings));
    localStorage.setItem('average_rating', parseFloat(averageRating));
  };

  useEffect(() => {
    loadRatingsFromLocal();
  }, []);

  useEffect(() => {
    calculateAverageRating();
  }, [ratings]);

  return { ratings, averageRating, handleRatingChange, getImageColor, saveRatingsToLocal };
}
