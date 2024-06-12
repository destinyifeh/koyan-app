import ChnagePasswordScreen from './account-info/change-assword';
import UpdateAccountScreen from './account-info/update-profile';
import {DashboardTabs} from './navigator';
import OrderMapViewScreen from './orders/orders-screens/map-view';
import OngoingDeliveryScreen from './orders/orders-screens/ongoing-delivery';
import OngoingEatinScreen from './orders/orders-screens/ongoing-eatIn';
import OngoingPickupScreen from './orders/orders-screens/ongoing-pickup';

export const dashboardScreenComponents = [
  {name: 'UpdateProfile', component: UpdateAccountScreen},
  {name: 'ChangePassword', component: ChnagePasswordScreen},
  {name: 'Dashboard', component: DashboardTabs},
  {name: 'OngoingDeliveryScreen', component: OngoingDeliveryScreen},
  {name: 'OrderMapViewScreen', component: OrderMapViewScreen},
  {name: 'OngoingPickupScreen', component: OngoingPickupScreen},
  {name: 'OngoingEatinScreen', component: OngoingEatinScreen},
];
