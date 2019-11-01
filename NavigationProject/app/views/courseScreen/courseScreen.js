import React, { Component } from 'react';
import { ImageBackground, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import CourseTitleComponent from './courseTitleComponent/courseTitleComponent';
import CourseDescriptionComponent from './courseDescriptionComponent/courseDescriptionComponent';
import CurriculumList from './curriculumList/curriculumList';

export class CourseScreen extends Component {
    constructor(props) {
        super(props);
        this.signature = props.navigation.getParam('authors', 'authors');
        this.title = props.navigation.getParam('title', 'title');
        this.curriculumList = props.navigation.getParam('curriculumList', {})
    }

    render() {
        return (
            <ImageBackground source={require('../../assets/images/background.jpg')} style={styles.backgraundImage} >
                <ScrollView style={styles.container}>
                    <Image style={styles.image} source={require('../../assets/images/motherAndChild.jpg')} />
                    <CourseTitleComponent authors={this.signature} title={this.title}/>
                    <CourseDescriptionComponent />
                    <CurriculumList curriculumList={this.curriculumList}/>
                </ScrollView>
            </ImageBackground >
        );
    }
}

CourseScreen.navigationOptions = ({ navigation }) => {
    const title = 'Course';
    const result = { title }
    return result;
};

export default CourseScreen;