import './QR.css'
import React from "react";
import AnimatedPage from '../AnimatedPage'
import QR_code from '../images/QR_codes/QR_code.png'

export default function QR() {

  return (
		<AnimatedPage>
    <div className="QR">
			<img className='proezd' src={QR_code} alt='Схема проезда'/>
            <h5 className='comment'>Схема территории</h5>
    </div>
		</AnimatedPage>
  );
} 