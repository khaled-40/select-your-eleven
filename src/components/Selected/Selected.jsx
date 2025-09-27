import React from 'react';
import SelectedPlayer from './SelectedPlayer';

const Selected = ({purchasedPlayers,removePlayers}) => {
    // console.log(purchasedPlayers)
    return (
        <div>
            {
                purchasedPlayers.map(player => <SelectedPlayer key={player.id} player = {player} removePlayers ={removePlayers}></SelectedPlayer>)
            }
        </div>
    );
};

export default Selected;