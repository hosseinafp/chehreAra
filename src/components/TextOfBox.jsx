import React from 'react';

const TextOfBox = ({item}) => {
    return (
        <div className='col-6 col-md-3'>
            <h5 className="text-end">{item.header}</h5>
            {item.data.map(val=>(
                <p className="text-end text-white fsm cursor-pointer">{val.name}</p>
            ))}
        </div>
    );
};

export default TextOfBox;