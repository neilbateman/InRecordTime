import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from './components/Racer/Context';

export default function App() {
  return (
  <Provider>
    <AppNavigator/>
  </Provider>
  )
};
