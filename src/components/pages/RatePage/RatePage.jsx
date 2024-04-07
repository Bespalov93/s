// RatePage.jsx
import './RatePage.css';
import React, { useState, useEffect } from "react";
import AnimatedPage from '../../AnimatedPage';
import QR from '../../QR/QR.jsx';
import NextBtn from '../../NextBtn/NextBtn.jsx';
import PreviousBtn from '../../PreviousBtn/PreviousBtn.jsx';
import AverageRatings from './AverageRating/AverageRaiting.jsx';
import QuestionRatings from './QuestionsRating/QuestionsRating.jsx';
import useLocalStorageTimeout from './useLocalStorageTimeout';
import axios from 'axios';

export default function RatePage() {
  const [ratings, setRatings] = useState({});
  const [averageRating, setAverageRating] = useState(0);
  const [isAllQuestionsAnswered, setIsAllQuestionsAnswered] = useState(false);
  const [questions, setQuestions] = useState([]);

  const getImageColor = (questionId, rating) => {
    return ratings[questionId] >= rating ? 'active' : '';
  };

  const handleRatingChange = (questionId, rating) => {
    const updatedRatings = { ...ratings, [questionId]: rating };
    setRatings(updatedRatings);
    saveRatingsToLocal(); // Вызываем функцию сохранения в локальное хранилище при изменении оценок
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/feedback/rate');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    loadRatingsFromLocal();
  }, []);

  useEffect(() => {
    setIsAllQuestionsAnswered(Object.keys(ratings).length === questions.length);
  }, [ratings, questions]);

  useEffect(() => {
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

    calculateAverageRating();
  }, [ratings]);

  const saveRatingsToLocal = () => {
    const formattedData = {};
    questions.forEach((questionObj, index) => {
      const question = questionObj.question;
      formattedData[question] = ratings[index];
    });
    localStorage.setItem('questions_answers', JSON.stringify(formattedData));
    localStorage.setItem('average_rating', parseFloat(averageRating));
  };

  const loadRatingsFromLocal = () => {
    const savedData = localStorage.getItem('questions_answers');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setRatings(parsedData);
    }
  };

  const setLastChangeTime = useLocalStorageTimeout(300000, () => {
    window.location.href = '/feedback/';
  });

  return (
    <AnimatedPage>
      <section className="Rate">
        <div className='RateLeft'>
          <QR />
          <AverageRatings averageRating={averageRating} />
        </div>

        <section>
          <QuestionRatings
            questions={questions}
            ratings={ratings}
            handleRatingChange={handleRatingChange}
            getImageColor={getImageColor}
          />
          {/* <PreviousBtn func={saveRatingsToLocal} Link='/feedback/'/> */}
          <NextBtn func={saveRatingsToLocal} Link='/feedback/comment' par={!isAllQuestionsAnswered} />
        </section>
      </section>
    </AnimatedPage>
  );
}