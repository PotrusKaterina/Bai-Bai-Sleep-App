import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ToolBar from '../../components/toolbar/toolbar';
import TabBarNavigator from './tabNavigator';

export const TabContainer = createStackNavigator({
    TabContainer: {
        screen: TabBarNavigator,
        navigationOptions: ({ navigation }) => ({
            header: <ToolBar {...{ navigation }} />,
        }),
    }
});