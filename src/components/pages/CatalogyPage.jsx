import CardList from '../CardList/CardList';
import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './Catalogy.css';

export default function CatalogyPage({addToCart}) {
  const navigate = useNavigate();

  const handleButtonClick = (url) => {
    navigate(url, { replace: true }); // Используйте { replace: true } для замены URL без добавления истории
  };

  return (
    <section className="Catalogy">
      <div className="wrapper-btns">
        <div className="btns">
          <button className='cat' onClick={() => handleButtonClick('/catalogy/popularity')}>
					<svg width="21" height="21" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 17-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.23 4.48 1.597 6.7L12 17Zm0-2.344 2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657v-.001Z"></path>
</svg>
            Популярное
          </button>
          <button className='cat' onClick={() => handleButtonClick('/catalogy') }><svg width="21" height="21" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m2 5 7-3 6 3 6.303-2.701a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.501.501 0 0 1-.697-.46V5Zm12.935 2.204-6-3L4 6.319v12.648l5.065-2.17 6 3L20 17.68V5.033l-5.065 2.17v.001Z"></path>
</svg>Все товары</button>
          <button className='cat cate' onClick={() => handleButtonClick('/catalogy/discount')}>
					<svg width="21" height="21" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 21a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-11-9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm0-2a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm12.571-4.485 1.414 1.414L4.93 20.485l-1.414-1.414L19.07 3.515h.001Z"></path>
</svg> <p>Со скидкой</p>
          </button>
        </div>
      </div>
      <div className="cards">
        <Routes>
          <Route path="*" element={<CardList addToCart={addToCart} key={window.location.pathname} url="http://127.0.0.1:8000/catalogy/"  />} />
          <Route path="popularity" element={<CardList addToCart={addToCart}  key={window.location.pathname} url="http://127.0.0.1:8000/popularity/" />} />
          <Route path="discount" element={<CardList addToCart={addToCart}  key={window.location.pathname} url="http://127.0.0.1:8000/discount/" />} />
        </Routes>
      </div>
    </section>
  );
}