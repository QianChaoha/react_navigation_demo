//import { RootNavigator, MaterialTopTabNavigator, BottomTabNavigator } from './navigators/AppNavigators'
import AppNavigator from './navigators/AppNavigators'
import SwitchNavigator from './navigators/SwitchNavigator'
import React, {Component} from 'react';
import store from './pages/store/index'
import {Provider} from 'react-redux';

type Props = {};
export default class App extends Component<Props> {
    render() {
        /** * 将store传递给App框架 */
        return <Provider store={store}>
            <AppNavigator/>
        </Provider>     }
}