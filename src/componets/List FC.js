import React from 'react';

function ListFC(props) {

    const { arr, isOrdered } = props;
    const list = arr.map((item, index) => <li className='listFC_list-item-style' key={index}>{item}</li>)

    return (
        <div className='listFC-wrapper'>
            <h1 className='listFC_title-style'>{props.title}</h1>
            {list.length > 0 && !isOrdered ? <ol className='listFC_list-item'>{list}</ol> :
                list.length > 0 && isOrdered ? <ul className='listFC_list-item'>{list}</ul> :
                    <h2 className='listFC_title-style'>No items</h2>}
        </div>
    )
}

export default ListFC;
