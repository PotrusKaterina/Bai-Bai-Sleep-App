import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { TabContainer } from './tabContainer';
import DrawerContentComponent from '../../components/drawerContentComponent/drawerContentComponent';

export const drawerNavigator = createDrawerNavigator({
    DrowerContainer: TabContainer,
}, {
    contentComponent: DrawerContentComponent,
});

const DrawerNavigator = createAppContainer(drawerNavigator);

export default DrawerNavigator;