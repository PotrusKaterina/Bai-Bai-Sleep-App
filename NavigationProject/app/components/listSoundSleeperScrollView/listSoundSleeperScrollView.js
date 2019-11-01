import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { compareCardItem } from './listSounsSleeperApi';
import ListItem from '../listItem/listItem';

export class ListSounsSleeperScrollView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            goToPlayer: this.goToPlayer,
        }
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        const { goToPlayer } = prevState;
        const { soundsList, setFavourites } = nextProps
        const arr = Object.values(soundsList);
        let content = arr.map((item) => <ListItem title={item.text} setFavourites={setFavourites} propOnPress={goToPlayer} key={item.text} isFavourite={item.isFavourite} id={item.id} />)
        content.sort(compareCardItem);
        const result = { content };
        return result;
    }

    goToPlayer = (songsName, isFavourite, id) => {
        const { navigation } = this.props;
        navigation.closeDrawer();
        navigation.navigate('PlayerScreen', { songsName, isFavourite, id });
    }

    render() {
        const { content } = this.state;
        return (
            <ScrollView style={styles.container}>
                {content}
            </ScrollView>
        );
    }
}

export default ListSounsSleeperScrollView;