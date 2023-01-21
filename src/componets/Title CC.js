import React from 'react';

class TitleCC extends React.Component {
    render() {
        return (
            <div className='titleCC-wrapper'>
                <hr className='main-hr-style'></hr>
                <h1 className='titleCC_title-style'>{this.props.title}</h1>
                <span>
                    Создайте компонент «Title», который будет отображать передаваемый в него текст в
                    виде тега h1.
                    Сделайте две отдельных версии. Одна должна быть функциональным компонентом,
                    другая – классовым.
                </span>
            </div>
        )
    }
};

export default TitleCC;
