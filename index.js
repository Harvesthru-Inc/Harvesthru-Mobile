import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import axios from 'axios';

const devMode = true;
const baseUrl = devMode ? 'http://localhost:8000' : 'https://blah';

axios.defaults.baseURL = baseUrl;

AppRegistry.registerComponent(appName, () => App);
