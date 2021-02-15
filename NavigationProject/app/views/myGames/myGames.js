
import React from 'react';
import { View, FlatList } from 'react-native';
import GameItem from './gameItem/gameItem';
import { games } from './services';
import { styles } from './styles';

export const MyGames = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList data={games} renderItem={({ item }) => (
                <GameItem game={item} {...{ navigation }} />
            )} />
        </View>
    );
}

export default MyGames;