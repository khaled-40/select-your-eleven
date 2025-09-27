import React from 'react';
import SelectedPlayer from './SelectedPlayer';

const Selected = ({purchasedPlayers}) => {
    console.log(purchasedPlayers)
    return (
        <div>
            {
                purchasedPlayers.map(player => <SelectedPlayer player = {player}></SelectedPlayer>)
            }
        </div>
    );
};

export default Selected;