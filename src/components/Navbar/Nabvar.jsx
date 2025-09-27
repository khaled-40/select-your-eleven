import React from 'react';
import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'

const Nabvar = ({money}) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto">
            <div className="flex-1">
                <img src={logo} alt="" />
            </div>
            <div className="flex-none space-x-8 text-gray-500 font-normal">
                <a href="">Home</a>
                <a href="">Fixture</a>
                <a href="">Teams</a>
                <a href="">Schedules</a>
                <button className='btn'>$<span>{money}</span> coin <img className='w-30px h-[30px]' src={coin} alt="" /></button>
            </div>
        </div>
    );
};

export default Nabvar;