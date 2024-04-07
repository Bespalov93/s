import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnalyticsAll.css'
import { Link } from 'react-router-dom';
import AnimatedPage from '../../AnimatedPage';
const AnalyticsAll = () => {

    function reloadPage(){
        window.location.reload()
    }

    const [analyticsData, setAnalyticsData] = useState([]);
    const [questionsData, setQuestionsData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8000/analytics/questions')
            .then(response => {
                // Обновляем состояние компонента данными из ответа, исключая последний элемент
                setQuestionsData(response.data);
            })
            .catch(error => {
                console.error('Произошла ошибка при получении данных о вопросах:', error);
            });
        // Выполняем GET запрос при монтировании компонента
        axios.get('http://localhost:8000/analytics/all')
            .then(response => {
                // Обновляем состояние компонента данными из ответа
                setAnalyticsData(response.data);
            })
            .catch(error => {
                console.error('Произошла ошибка при получении данных:', error);
            });
    }, []); // Передаем пустой массив зависимостей, чтобы запрос был выполнен только один раз при монтировании

    return (
        
        <section className='sectAnalytic'>
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
            </div></AnimatedPage>

            <AnimatedPage>

        <div className='analyticsAll'>
            <h2>Все оценки</h2>
            <ul>
                {analyticsData.map((data, index) => (
                    <li key={index}>
                        <p className='carN'>Номер машины: <div className='sel'>{data.car_number}</div></p>
                        <p className='avRate'>Средний рейтинг: <div className='sel'>{data.average_rating}</div></p>
                        <p className='datePub'>Дата и время: <div className='sel'>{data.published_datetime}</div></p>
                    </li>
                ))}
            </ul>
        </div>
        </AnimatedPage>
        </section>
       
    );
};

export default AnalyticsAll;
