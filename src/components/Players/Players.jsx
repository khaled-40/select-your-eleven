import React, { use } from 'react';
import Player from '../Player/Player';


const Players = ({fetchPlayers}) => {
    const players = use (fetchPlayers);
    console.log(players)
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-4'>
            {
                players.map(player => <Player key={player.id} player= {player}></Player>)
            }
        </div>
    );
};

export default Players;