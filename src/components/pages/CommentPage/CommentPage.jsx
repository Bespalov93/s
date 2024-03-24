
import './CommentPage.css'
import React from "react";
import AnimatedPage from '../../AnimatedPage'
import QR from '../../QR/QR.jsx';
import FastAnswer from './FastAnswer/FastAnswer.jsx';
import NextBtn from '../../NextBtn/NextBtn.jsx';
import PreviousBtn from '../../PreviousBtn/PreviousBtn.jsx';
import useCommentState from './useCommentState';
import useLastChangeTime from './useLastChangeTime';

export default function RatePage() {
    const { commentText, handleSelectFastAnswer, handleInputChange } = useCommentState();
    const { lastChangeTime, setLastChangeTime } = useLastChangeTime();

    const handleClick = () => {
      // Проверяем, что комментарий не пустой
      if (commentText.trim() !== '') {
        // Сохранение комментария в localStorage
        localStorage.setItem('comment', commentText);

        // Получение всех ключей из локального хранилища
        const keys = Object.keys(localStorage);

        // Перебор всех ключей и вывод соответствующих значений в консоль
        keys.forEach(key => {
          const value = localStorage.getItem(key);
          console.log(`${key}: ${value}`);
        });
        localStorage.clear();
      }

      // Обновляем время последнего изменения
      setLastChangeTime(Date.now());
    };
  
    // Проверяем, что комментарий не пустой
    const isCommentNotEmpty = commentText.trim() !== '';

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
            <PreviousBtn func={handleClick} Link='/feedback/rate'/>
            <NextBtn func={handleClick} Link='/feedback/last' par={!isCommentNotEmpty} />
          </section>
        </section>
      </AnimatedPage>
    );
}
