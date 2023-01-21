import React from 'react';

function TitleFC(props) {
    return (
        <div className='titleFC_wrapper'>
            <hr className='main-hr-style'></hr>
            <h1 className='titleFC_title-style'>{props.title}</h1>
            <span>
                Создайте компонент «Title», который будет отображать передаваемый в него текст в
                виде тега h1.
                Сделайте две отдельных версии. Одна должна быть функциональным компонентом,
                другая – классовым.
            </span>
        </div>
    )
};

export default TitleFC;
