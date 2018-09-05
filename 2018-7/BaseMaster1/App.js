import React from 'react';
import {createStackNavigator} from 'react-navigation'
import MainPage from './app/containers/MainPage'
import WidgetPage from "./app/containers/WidgetPage";
import LifeCyclePage from "./app/containers/LifeCyclePage";
import AnimatablePage from "./app/containers/AnimatablePage";
import SortPage from "./app/containers/SortPage";
import PopupPage from "./app/containers/PopupPage";

const App  = createStackNavigator({
    MainPage: {screen: MainPage},
    WidgetPage: {screen: WidgetPage},
    LifeCyclePage: {screen: LifeCyclePage},
    AnimatablePage: {screen: AnimatablePage},
    SortPage: {screen: SortPage},
    PopupPage: {screen: PopupPage},
},{
    navigationOptions: {
        gesturesEnabled: true
    },
    headerMode: 'none',
})

export default App
