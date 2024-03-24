// FastAnswer.jsx
import React from "react";
import './FastAnswer.css'

export default function FastAnswer({ onSelect }) {
    return (
        <div className='FastAnswer'>
            <div className='f1' onClick={() => onSelect("Хорошая работа склада")}>
                <h3>Хорошая работа склада</h3>
            </div>
            <div className='f2' onClick={() => onSelect("Очень вежливый персонал")}>
                <h3>Очень вежливый персонал</h3>
            </div>
            <div className='f3' onClick={() => onSelect("Претензий не имею")}>
                <h3>Претензий не имею</h3>
            </div>
            <div className='f4' onClick={() => onSelect("Есть к чему стремиться")}>
                <h3>Есть к чему стремиться</h3>
            </div>
        </div>
    );
}
