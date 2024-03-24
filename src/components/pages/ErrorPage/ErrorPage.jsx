
import { Link} from 'react-router-dom'
import React from "react";



export default function ErrorPage() {
	
  return (
    <section className="Eror">
			<h1>Ошибка, такой страницы нет!</h1>
			<Link to='/feedback/'>Перейти на главную</Link>
    </section>
		
  );
}