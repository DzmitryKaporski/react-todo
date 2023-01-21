import React from 'react';
import { Link } from 'react-router-dom';

function Dz(props) {
    return (
        <div>
            <h1 className='DZ_title-style'>{props.title}</h1>
            <ul className='DZ_list-style'>
                <li>
                    <Link className='DZ_Link-color__white' to='/ColoredTitle'>Colored title</Link>
                </li>
                <li>
                    <Link className='DZ_Link-color__white' to='/InputSubmit'>Input submit</Link>
                </li>
                <li>
                    <Link className='DZ_Link-color__white' to='/ListCC'>List Class component</Link>
                </li>
                <li>
                    <Link className='DZ_Link-color__white' to='/ListFC'>List Function component</Link></li>
                <li>
                    <Link className='DZ_Link-color__white' to='/TitleFC'>Title Function component</Link>
                </li>
                <li>
                    <Link className='DZ_Link-color__white' to='/TitleCC'>Title Class component</Link>
                </li>
            </ul>
        </div>
    )
};

export default Dz;
