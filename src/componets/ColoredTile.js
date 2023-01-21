import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textColorBlack: false,
            textColorRed: false,
            textColorGreen: true,
        };
    }

    clickHandlerBlack = () => {
        this.setState({
            textColorBlack: true,
            textColorRed: false,
            textColorGreen: false,
        })
    }

    clickHandlerRed = () => {
        this.setState({
            textColorBlack: false,
            textColorRed: true,
            textColorGreen: false,
        })
    }

    clickHandlerGreen = () => {
        this.setState({
            textColorBlack: false,
            textColorRed: false,
            textColorGreen: true,
        })
    }

    render() {
        const { classNameBlack, titleButtonBlack } = this.props
        const { classNameRed, titleButtonRed } = this.props
        const { classNameGreen, titleButtonGreen } = this.props

        let textColorBlack = this.state.textColorBlack
        let textColorRed = this.state.textColorRed
        let textColorGreen = this.state.textColorGreen

        return (
            <div className='coleredTitle-wrapper-padding'>
                <hr className='main-hr-style'></hr>
                <h1 className={textColorBlack === true ? 'coleredTitle_text-color__black' :
                    textColorRed === true ? 'coleredTitle_text-color__red' :
                        textColorGreen === true ? 'coleredTitle_text-color__green' : null} >{this.props.title}

                    <button onClick={this.clickHandlerBlack} className={classNameBlack}>{titleButtonBlack}</button>
                    <button onClick={this.clickHandlerRed} className={classNameRed}>{titleButtonRed}</button>
                    <button onClick={this.clickHandlerGreen} className={classNameGreen}>{titleButtonGreen}</button>
                </h1>
                <div className='coleredTitle_text-style'>
                    Создайте компонент “ColoredTile”, который принимает через props строчное значение
                    text, и отображает его. Компонент должен также включать три кнопки, отвечающие за
                    разные цвета. Например black, red и green.
                    Нажатие по каждой из кнопок окрашивает текст компонента в выбранный цвет
                </div>
            </div >
        )
    }
}

export default Buttons;
