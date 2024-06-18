import {AppState} from 'react-native';
import {getAppState} from '../state-management/features/global/globalSlice';
import {store} from '../state-management/store';

const handleAppStateChange = nextAppState => {
  store.dispatch(getAppState(nextAppState));
};

export const appStateTracker = () => {
  AppState.addEventListener('change', handleAppStateChange);

  return () => {
    AppState.removeEventListener('change', handleAppStateChange);
  };
};
