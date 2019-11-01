import React, { Component } from 'react';
import { View, SectionList, Text } from 'react-native';
import { styles } from './styles';
import ListItemWithPictureAndSignature from './listItemWithPictureAndSignature/listItemWithPictureAndSignature';
import { coursesList } from '../../../../__mocks__/coursesMocks';

export class CoursesList extends Component {
    constructor(props) {
        super(props);
    }

    goToCourse = ( title, authors, curriculumList) => {
        const { navigation } = this.props;
        navigation.navigate('CourseScreen', {  title, authors, curriculumList });
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={coursesList}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => < ListItemWithPictureAndSignature title={item.text} authors={item.authors} curriculumList={item.curriculumList} onPress={this.goToCourse} />}
                    renderSectionHeader={({ section: { title } }) => (<Text style={styles.header}>{title}</Text>)} />
            </View>
        );
    }
}

export default CoursesList;