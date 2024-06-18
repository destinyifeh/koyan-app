import {appStateTracker} from '../utils/app-state';

export const configureServices = async () => {
  try {
    appStateTracker();
  } catch (error) {
    console.error('Error initializing async services', error);
  }
};
