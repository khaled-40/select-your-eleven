import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const Player = ({player,deductMoney,purchasePlayerDetails}) => {
    const [select, setSelect] = useState(false)
    const {image,name,country,role,rating,batting_style,bowling_style,price} = player;
    return (
        <div className="card bg-base-100 w-96 shadow-sm max-w-[1200px] mx-auto p-4">
            <figure>
                <img className='rounded-2xl w-full h-[300px] object-cover'
                    src={image}
                    alt={`${name} is Coming`} />
            </figure>
            <h3 className='my-4 font-bold text-2xl'><FontAwesomeIcon icon={faUser} className='mr-3' />{name}</h3>
            <div className='flex justify-between items-center'>
                <p className='text-gray-500'><FontAwesomeIcon icon={faFlag} className='mr-2 w-10' />{country}</p>
                <button className='btn rounded-xl'>{role}</button>
            </div>
            <div className='flex justify-between items-center pt-2'>
                <h4 className='font-semibold text-base'>Rating:</h4>
                <p className='font-semibold'>{rating}</p>
            </div>
            <div className='flex justify-between py-3 items-center'>
                <p className='font-semibold text-base'>{batting_style}</p>
                <p className='text-gray-500'>{bowling_style}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-semibold text-base'>Price: {price}</p>
                <button disabled={select} onClick={() => {setSelect(!select);deductMoney(price);purchasePlayerDetails(player)}} className='btn'>{select? "Selected":"Choose Player"}</button>
            </div>
        </div>
    );
};

export default Player;