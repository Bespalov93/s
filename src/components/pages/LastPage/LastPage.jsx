import './LastPage.css'
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedPage from '../../AnimatedPage';

export default function LastPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Устанавливаем таймер для перехода на страницу '/feedback/' спустя 10 секунд
    const timer = setTimeout(() => {
      navigate('/feedback/');
    }, 10000);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <AnimatedPage>
      <section className="Last">
        <div className='TY'>
          <div className='h1Wrapper'>
            <h1>Спасибо за ваш отзыв!</h1>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
