import React from 'react';
import {SafeAreaView, View} from 'react-native';
//import {Provider} from 'react-redux';
//import {store} from './src/state-management/store';
import AppNavigator from './src/navigation/app-navigator';
function App() {
  return (
    <View style={{flex: 1}}>
      {/* <Provider store={store}> */}
      <AppNavigator />
      {/* </Provider> */}
    </View>
  );
}

export default App;
