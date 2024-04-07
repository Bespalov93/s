
import './CommentPage.css'
import React from "react";
import AnimatedPage from '../../AnimatedPage'
import QR from '../../QR/QR.jsx';
import FastAnswer from './FastAnswer/FastAnswer.jsx';
import NextBtn from '../../NextBtn/NextBtn.jsx';
import PreviousBtn from '../../PreviousBtn/PreviousBtn.jsx';
import useCommentState from './useCommentState';
import useLastChangeTime from './useLastChangeTime';
import axios from 'axios';

export default function RatePage() {
  const { commentText, handleSelectFastAnswer, handleInputChange } = useCommentState();
  const { lastChangeTime, setLastChangeTime } = useLastChangeTime();

  const isCommentNotEmpty = commentText.trim() !== ''; // Определение переменной isCommentNotEmpty здесь
    
  const handleClick = () => {
    // Проверяем, что комментарий не пустой
    if (commentText.trim() !== '') {
        // Получаем данные из localStorage
        const storedData = {
            car_number: localStorage.getItem('car_number') || "",
            questions_answers: JSON.parse(localStorage.getItem('questions_answers')) || null,
            average_rating: localStorage.getItem('average_rating') || null,
            comment: localStorage.getItem('comment') || "",
        };

        // Отправляем POST запрос на сервер
        axios.post('http://192.168.3.23:8000/feedback/send', storedData)
            .then(response => {
                console.log('Данные успешно отправлены на сервер');
                // Обновляем время последнего изменения
                setLastChangeTime(Date.now());
            })
            .catch(error => {
                console.error('Произошла ошибка при отправке данных на сервер:', error);
                // Ваша логика при неудачной отправке данных на сервер
                // Например, вывод сообщения об ошибке или повторная попытка отправки данных
                // Например:
                alert('Ошибка при отправке данных на сервер. Пожалуйста, повторите попытку позже.');
            });
    } else {
        console.log('Комментарий пустой');
    }
    localStorage.clear();
};


    return (
      <AnimatedPage>
        <section className="Comment">
          <QR></QR>
          <section>
            <div className='CommentWrapper'>
              <div className='CommentTitle'><h3>Добавьте пожалуйста свои пожелания для улучшения качества работы</h3></div>
              <div className='div1'>
                <textarea className='CommentInput' value={commentText} onChange={handleInputChange} name="" id="" cols="30" rows="10" placeholder='Введите текст'></textarea>
                <FastAnswer onSelect={handleSelectFastAnswer} />
              </div>
            </div>
            {/* Делаем кнопку неактивной, если комментарий пустой */}
            {/* <PreviousBtn func={handleClick} Link='/feedback/rate'/> */}
            <NextBtn func={handleClick} Link='/feedback/last' par={!isCommentNotEmpty} />
          </section>
        </section>
      </AnimatedPage>
    );
}
