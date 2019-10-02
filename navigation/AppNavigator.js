import React from 'react';
import { createAppContainer } from 'react-navigation';
import MainNavigator from './MainNavigator';

let AppNavigator = createAppContainer(MainNavigator);
export default AppNavigator;
