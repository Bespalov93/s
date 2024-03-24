// MainPage.js
import './MainPage.css';
import React from "react";
import AnimatedPage from '../../AnimatedPage';
import QR from '../../QR/QR.jsx';
import NextBtn from '../../NextBtn/NextBtn.jsx';
import MainInputs from './MainInputs/MainInputs.jsx';
import useCarNumberInput from './useCarNumberInput';

export default function MainPage() {
  const { inputValue, isInputFilled, handleInputChange, handleClick } = useCarNumberInput();

  return (
    <AnimatedPage>
      <section className="Main">
        <QR/>
        <section>
          <h1 className='MainTitle'>Обратная связь о работе ДМЦ</h1>
          <div className='MainOutline'>
            <div className='MainDivWrapper'>
              <p className='MainP'>Введите номер вашего автомобиля</p>
            </div>
            <div className='MainGroupInputs'>
              <MainInputs
                value={inputValue}
                onChange={handleInputChange}
                maxLength={10}
                placeholder='А123НВ 750'
              />
            </div>
          </div>
          <NextBtn func={handleClick} Link='/feedback/rate' par={!isInputFilled}  />
        </section>
      </section>
    </AnimatedPage>
  );
}
