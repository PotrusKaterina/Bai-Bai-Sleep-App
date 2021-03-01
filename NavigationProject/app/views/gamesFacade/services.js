import React from 'react';
import BlowGame from '../../components/games/blowGame/blowGame';
import CosmosGame from '../../components/games/cosmosGame/cosmosGame';
import JungleGame from '../../components/games/jungleGame/jungleGame';
import MusicGame from '../../components/games/musicGame/musicGame';
import OpacityGame from '../../components/games/opacityGame/opacityGame';
import TwoBallsGame from '../../components/games/twoBallsGame/twoBallsGame';

export const gamesObject = {
    'Cosmos': <CosmosGame />,
    'Two Balls': <TwoBallsGame />,
    'Music': <MusicGame />,
    'Jungle': <JungleGame />,
    'Opacity': <OpacityGame />,
    'Blow': <BlowGame />,
}