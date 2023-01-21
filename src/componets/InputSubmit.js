import React from 'react';
import { Button } from '@material-ui/core';
import ListFC from './List FC.js';

class InputSubmit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
        }
        this.valueInput = React.createRef();
    }

    checkRef = () => {
        this.setState({ arr: this.state.arr.concat(this.valueInput.current.value) })
    }

    render() {
        const { arr } = this.state
        return (
            <div className='inputSubmit-wrapper'>
                <hr className='main-hr-style'></hr>
                <div className='inputSubmit_input-wrapper-style'>
                    <label className='inputSubmit_label-input-style' htmlFor='nameElement'>Name item</label>
                    <input id='nameElement' name='nameElement' type='text' ref={this.valueInput} />
                    <Button color='primary' size="small" onClick={this.checkRef}>Submit</Button>
                </div>
                <ListFC arr={arr} isOrdered={false} />
                <span>
                    Создайте компонент, который включает в себя поле ввода, кнопку Submit и созданный
                    ранее компонент List.
                    После нажатия кнопки Submit, значение из поля ввода сохраняется в состоянии
                    компонета, как элемент массива, который по умолчанию должен быть пустым.
                    Массив значений передается для отображения с компонет List для отрисовки всех
                    значений из массива.
                    Если массив значений пуст, то список отображает сообщение «No items»
                </span>
            </div>
        )
    }
}

export default InputSubmit;
