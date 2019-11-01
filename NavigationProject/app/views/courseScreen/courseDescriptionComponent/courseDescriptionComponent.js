import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import KeyboardArrowUp from '../../../assets/icons/KeyboardArrowUp';
import KeyboardArrowDown from '../../../assets/icons/KeyboardArrowDown';


export class CourseDescriptionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenDescription: false
        }
    }

    onPress = () => {
        this.setState(prevState => ({ isOpenDescription: !prevState.isOpenDescription }))
    }

    render() {
        const { isOpenDescription } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.titleText} > Course description </Text>
                <TouchableWithoutFeedback onPress={this.onPress}>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptonText} numberOfLines={isOpenDescription ? null : 3}>In this course you will learn the important basics that are so mystifying for new parents: bathing and changing your baby, tips on breastfeeding, how to calm your baby and help them sleep, sleep safety, home safety and car safety, and knowing when to call the doctor. A hand-picked, all-in-one introduction to Newborn Basics, with the best and most experienced teachers, all of them certified medical professionals.
                        Newborn basics Get excellent tips to assist you with your baby's bath time, changing a diaper, and how and when to do tummy time, and a variety of ways to safely and comfortably hold a baby. Learn all this with the qualified staff at Epworth Freemasons hospital (Victoria, Australia) and Sunnybrook Hospital (Toronto, Canada). How to Calm a Baby Newborns cry a lot, and this is normal! They are simply getting used to life outside the womb.
                        </Text>
                        <View>
                            {isOpenDescription ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.line} />
                <View style={styles.line} />
            </View>
        );
    }
}

export default CourseDescriptionComponent;