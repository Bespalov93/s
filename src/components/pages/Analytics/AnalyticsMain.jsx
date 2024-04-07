import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnalyticsMain.css';
import { Link } from 'react-router-dom';
import AnimatedPage from '../../AnimatedPage';

const AnalyticsComponent = () => {

    function reloadPage(){
        window.location.reload()
    }

    const [questionsData, setQuestionsData] = useState([]);
    const [last5Data, setLast5Data] = useState([]);

    useEffect(() => {
        // Выполняем GET запрос при монтировании компонента для данных о вопросах
        axios.get('http://localhost:8000/analytics/questions')
            .then(response => {
                // Обновляем состояние компонента данными из ответа, исключая последний элемент
                setQuestionsData(response.data);
            })
            .catch(error => {
                console.error('Произошла ошибка при получении данных о вопросах:', error);
            });

            axios.get('http://localhost:8000/analytics')
            .then(response => {
                // Передаем последние пять объектов в состояние last5Data
                setLast5Data(response.data.slice(-5));
            })
            .catch(error => {
                console.error('Произошла ошибка при получении данных о последних 5 записях:', error);
            });
    }, []); // Передаем пустой массив зависимостей, чтобы запросы были выполнены только один раз при монтировании
    const overallAvgRatingObject = questionsData.find(item => item.survey_overall_avg_rating !== undefined);
    const overallAvgRating = overallAvgRatingObject ? overallAvgRatingObject.survey_overall_avg_rating : null;
    return (
        
        <section className='analytics'>
            <aside className='navig'>
                <Link className='link' to='/analytics'>Главная</Link>
                <Link className='link' to='/analytics/all/day'>Оценки за день</Link>
                <Link className='link' to='/analytics/all/week'>Оценки за неделю</Link>
                <Link className='link' to='/analytics/all/month'>Оценки за месяц</Link>
                <Link className='link'to='/analytics/all'>Все оценки</Link>
                <div onClick={reloadPage} className='link'>Обновить данные</div>
            </aside>
            <AnimatedPage>
            <div className='que'>
                <h2>Аналитика вопросов</h2>
                <ul>
    {questionsData.slice(0, -1).map(question => (
        <li key={question.id}>
            <h3>{question.question}</h3>
            <p>Средний рейтинг: <div className='score'> {question.question_average_rating}/5.0</div></p>
        </li>
    ))}
</ul>
    <p className='avg'>Общий средний рейтинг: <div className='score'>{overallAvgRating}</div></p>
            </div>
            </AnimatedPage>
            <AnimatedPage>
            <div className='last5'>
                <h2>Последние 5 записей</h2>
                <ul>
                    {last5Data.map((item, index) => (
                        <li key={index}>
                            <p className='carN'>Номер машины: <div className='sela'>{item.car_number}</div></p>
                            <p className='avRate'>Средний рейтинг: <div className='sela'>{item.average_rating}</div></p>
                            <p className='datePub'>Дата и время: <div className='sela'>{item.published_datetime}</div> </p>
                        </li>
                    ))}
                    {/* <Link  className='link' to='/analytics/all'>Посмотреть ещё</Link> */}
                </ul>
            </div>
            </AnimatedPage>
        </section>
        
    );
};

export default AnalyticsComponent;
