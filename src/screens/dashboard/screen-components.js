import ChnagePasswordScreen from './account-info/change-assword';
import UpdateAccountScreen from './account-info/update-profile';
import {DashboardTabs} from './navigator';

export const dashboardScreenComponents = [
  {name: 'UpdateProfile', component: UpdateAccountScreen},
  {name: 'ChangePassword', component: ChnagePasswordScreen},
  {name: 'Dashboard', component: DashboardTabs},
];
