import {saveData} from '../services/data-services';
import {
  getPreviousRoute,
  getcurrentRoute,
} from '../state-management/features/global/globalSlice';
import {store} from '../state-management/store';
import {LAST_ACTIVE_SCREEN} from './contants';

export const screenTrackingService = async (
  previousRouteName,
  currentRouteName,
) => {
  // Save the current route name for later comparison
  console.log(currentRouteName, 'currentRouteName');
  console.log(previousRouteName, 'previousRouteName');
  store.dispatch(getcurrentRoute(currentRouteName));
  store.dispatch(getPreviousRoute(previousRouteName));
  await saveData(LAST_ACTIVE_SCREEN, previousRouteName);
  // logScreenView(currentRouteName, currentRouteName);
};
