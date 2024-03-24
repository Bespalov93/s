// RatePage.js
import './RatePage.css';
import React from "react";
import AnimatedPage from '../../AnimatedPage'
import QR from '../../QR/QR.jsx'
import NextBtn from '../../NextBtn/NextBtn.jsx'
import PreviousBtn from '../../PreviousBtn/PreviousBtn.jsx'
import AverageRatings from './AverageRating/AverageRaiting.jsx';
import QuestionsRating from './QuestionsRating/QuestionsRating.jsx';
import useRatings from './useRatings';
import useLocalStorageTimeout from './useLocalStorageTimeout';

export default function RatePage() {
  const data = [
    {
      "id": 1,
      "question": "Качество сопровождения сделки менеджером"
    },
    {
      "id": 2,
      "question": "Простота и скорость оформления документов на выписке"
    },
    {
      "id": 3,
      "question": "Насколько было просто найти место погрузки"
    },
    {
      "id": 4,
      "question": "Качество металлопродукции"
    },
    {
      "id": 5,
      "question": "Отгрузка на складе"
    },
    {
      "id": 6,
      "question": "Вежливость персонала на складе"
    },
    {
      "id": 7,
      "question": "Скорость работника КПП и весов"
    }
  ];

  const { ratings, averageRating, handleRatingChange, getImageColor, saveRatingsToLocal } = useRatings(data);
  const setLastChangeTime = useLocalStorageTimeout(300000, () => {
    window.location.href = '/feedback/';
  });

  const isAllQuestionsAnswered = Object.keys(ratings).length === data.length;

  return (
    <AnimatedPage>
      <section className="Rate">
        <div className='RateLeft'>
          <QR />
          <AverageRatings averageRating={averageRating} />
        </div>

        <section>
          <QuestionsRating
            data={data}
            ratings={ratings}
            handleRatingChange={handleRatingChange}
            getImageColor={getImageColor}
          />
          <PreviousBtn func={saveRatingsToLocal} Link='/feedback/'/>
          <NextBtn func={saveRatingsToLocal} Link='/feedback/comment' par={!isAllQuestionsAnswered} />
        </section>
      </section>
    </AnimatedPage>
  );
}
