import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import PopupSortButton from '../../buttons/popupSortButton/popupSortButton';
import ABC from '../../../assets/icons/ABC';
import Categories from '../../../assets/icons/Categories';
import FillLike from '../../../assets/icons/FillLike';
import { config } from '../../../config/config';

export class PopupSort extends Component {
    constructor(props) {
        super(props);
    }

    clear = () => {
        const { setContent } = this.props;
        setContent('');
    }

    render() {
        const {setSoundSleeperMode} = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.clear} >
                <View style={styles.container}>
                    <View style={styles.popupContainer}>
                        <Text style={styles.text}>
                            Sort by
                    </Text>
                        <PopupSortButton title={'Categories'} icon={<Categories />} clear={this.clear} {...{setSoundSleeperMode}} nameOfMode={'Categories'}/>
                        <PopupSortButton title={'ABC'} icon={<ABC />} clear={this.clear} {...{setSoundSleeperMode}} nameOfMode={'ABC'}/>
                        <PopupSortButton title={'Favourites'} icon={<FillLike color={config.COLOR_LIGHT_VIOLET} width={24} height={24}/>} clear={this.clear} {...{setSoundSleeperMode}} nameOfMode={'Favourites'}/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default PopupSort;