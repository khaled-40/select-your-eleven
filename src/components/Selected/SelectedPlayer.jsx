import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SelectedPlayer = ({ player,removePlayers }) => {
    return (
        <div className='max-w-[1200px] mx-auto border-1 border-gray-400 p-4 flex justify-between items-center rounded-xl mt-5'>
            <div className='flex justify-between items-center gap-4'>
                <img className='w-[50px] h-[50px] rounded-xl' src={player.image} alt="" />
                <div>
                    <h4 className='font-bold text-base'>{player.name}</h4>
                    <p className='text-base text-gray-400'>{player.role}</p>
                </div>
            </div>
            <div onClick={() => {removePlayers(player)}}>
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </div>
    );
};

export default SelectedPlayer;