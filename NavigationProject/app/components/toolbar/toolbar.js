import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { getTitleForTollBar } from './toolbarApi';
import ToolBarButtons from './toolBarButtons/toolBarButtons';
import { connect } from 'react-redux';
import { setContent } from '../popupApp/redux/popupAction';

export class ToolBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }

    static getDerivedStateFromProps(props) {
        const { navigation: { state: { index } } } = props;
        const title = getTitleForTollBar(index);
        const result = { title };
        return result;
    }

    render() {
        const { title } = this.state;
        const { navigation, setContent, navigation: { state: { index } } } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                {index ? null : <ToolBarButtons {...{ navigation, setContent }} />}
            </View>
        );
    }
}

const mapDispatchToProps = {
    setContent,
};

export default connect(null, mapDispatchToProps)(ToolBar);