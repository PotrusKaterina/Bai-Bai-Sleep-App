import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './app/App';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';


console.disableYellowBox = true; // disable all yellow warnings

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./app/services/audioService'));
