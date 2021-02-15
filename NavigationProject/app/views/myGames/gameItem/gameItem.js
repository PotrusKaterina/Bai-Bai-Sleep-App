
import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export const GameItem = ({ game, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(game.screen)} style={styles.container}>
            <Text style={styles.title}>{game.name}</Text>
        </TouchableOpacity>
    );
}

export default GameItem;