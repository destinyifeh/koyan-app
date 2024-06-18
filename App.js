import React from 'react';
import {Platform, View} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {configureServices} from './src/helpers/setup';
import AppNavigator from './src/navigation/app-navigator';
import {store} from './src/state-management/store';
function App() {
  React.useEffect(() => {
    configureServices();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigator />
        <FlashMessage
          position="top"
          floating={true}
          style={{marginTop: Platform.OS === 'android' ? 30 : undefined}}
        />
      </Provider>
    </View>
  );
}

export default App;
