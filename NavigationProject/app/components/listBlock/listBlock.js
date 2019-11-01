import React, { Component } from 'react';
import { View, SectionList, Text } from 'react-native';
import { styles } from './styles';
import ListItem from '../listItem/listItem';
import { createArreySectionList, createArrayFavouriteList } from './listBlockApi';

export class ListBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soundsArray: [],
        }
    }

    static getDerivedStateFromProps(nextProps) {
        const { soundsList, mode } = nextProps;
        const soundsArray = (mode === 'Favourites') ? createArrayFavouriteList(soundsList) : createArreySectionList(soundsList);
        const result = { soundsArray };
        return result;
    }

    goToPlayer = (songsName, isFavourite, id) => {
        const { navigation } = this.props;
        navigation.closeDrawer();
        navigation.navigate('PlayerScreen', { songsName, isFavourite, id });
    }

    render() {
        const { soundsArray } = this.state;
        return (
            <View style={styles.container}>
                <SectionList
                    sections={soundsArray}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <ListItem title={item.text} propOnPress={this.goToPlayer} isFavourite={item.isFavourite} id={item.id} />}
                    renderSectionHeader={({ section: { title } }) => (<Text style={styles.header}>{title}</Text>)}
                />
            </View>
        );
    }
}

export default ListBlock;