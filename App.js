import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/app-navigator';
import {store} from './src/state-management/store';
function App() {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </View>
  );
}

export default App;
