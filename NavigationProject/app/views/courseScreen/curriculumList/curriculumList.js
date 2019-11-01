import React, { Component } from 'react';
import { View, Text, SectionList } from 'react-native';
import { styles } from './styles';
import CurriculumItem from './curriculumItem/curriculumItem';

export class CurriculumList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { curriculumList } = this.props;
         return (
            <View style={styles.container}>
                <Text style={styles.titleText}> Curriculum </Text>
                <SectionList
                    sections={[{...curriculumList}]}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => < CurriculumItem text={item.text} textVideoLenght={item.textVideoLenght} numberInSection={item.numberInSection} onPress={this.goToCourse} />}
                    renderSectionHeader={({ section: { title } }) => (<Text style={styles.header}>{title}</Text>)} />
            </View>
        );
    }
}

export default CurriculumList;