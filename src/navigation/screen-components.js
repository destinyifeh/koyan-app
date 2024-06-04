import CheckoutDeliveryConfirmOrderScreen from '../screens/cashout-screens/checkout-delivery/checkout-delivery-confirm-order';
import CheckoutDeliveryProceedScreen from '../screens/cashout-screens/checkout-delivery/checkout-delivery-proceed';
import CheckoutEatInConfirmOrderScreen from '../screens/cashout-screens/checkout-eat-in/confirm-order';
import CheckoutEatInProceedScreen from '../screens/cashout-screens/checkout-eat-in/proceed-order';
import CheckoutPickupConfirmOrderScreen from '../screens/cashout-screens/checkout-pickup/confirm-order';
import CheckoutPickupProceedScreen from '../screens/cashout-screens/checkout-pickup/proceed-order';
import EateriesScreen from '../screens/category-screens/eateries';
import OpenEateriesScreen from '../screens/category-screens/eateries/open-eateries';
import OrderDescriptionScreen from '../screens/category-screens/eateries/order-description';
import {DashboardStack} from '../screens/dashboard/navigator';
import LandingScreen from '../screens/landing';
import LocationScreen from '../screens/location';
import SplashScreen from '../screens/splashScreen';
import ForgotPasswordScreen from '../screens/user-account/forgot-password';
import LoginScreen from '../screens/user-account/login';
import PasswordChangedScreen from '../screens/user-account/password-changed';
import ResetPasswordScreen from '../screens/user-account/reset-password';
import SignupScreen from '../screens/user-account/signup';
import VerifiedUserScreen from '../screens/user-account/verified-user';
import VerifyEmailScreen from '../screens/user-account/verify';
import VerifyForgotPasswordEmailScreen from '../screens/user-account/verify-forgot-password';

export const screenComponents = [
  {name: 'Login', component: LoginScreen},
  {name: 'Landing', component: LandingScreen},
  {name: 'SplashScreen', component: SplashScreen},
  {name: 'Signup', component: SignupScreen},
  {name: 'ForgotPassword', component: ForgotPasswordScreen},
  {name: 'ResetPassword', component: ResetPasswordScreen},
  {name: 'VerifyEmail', component: VerifyEmailScreen},
  {name: 'VerifiedUser', component: VerifiedUserScreen},
  {name: 'UserLocation', component: LocationScreen},
  {
    name: 'VerifyForgotPasswordEmail',
    component: VerifyForgotPasswordEmailScreen,
  },
  {name: 'PasswordChangedSuccess', component: PasswordChangedScreen},
  {name: 'DashboardScreen', component: DashboardStack},
  {name: 'Eateries', component: EateriesScreen},
  {name: 'OpenEateries', component: OpenEateriesScreen},
  {name: 'OrderDescriptionScreen', component: OrderDescriptionScreen},

  {
    name: 'CheckoutDeliveryConfirmOrderScreen',
    component: CheckoutDeliveryConfirmOrderScreen,
  },
  {
    name: 'CheckoutDeliveryProceedScreen',
    component: CheckoutDeliveryProceedScreen,
  },
  {
    name: 'CheckoutEatInProceedScreen',
    component: CheckoutEatInProceedScreen,
  },
  {
    name: 'CheckoutEatInConfirmOrderScreen',
    component: CheckoutEatInConfirmOrderScreen,
  },

  {
    name: 'CheckoutPickupProceedScreen',
    component: CheckoutPickupProceedScreen,
  },
  {
    name: 'CheckoutPickupConfirmOrderScreen',
    component: CheckoutPickupConfirmOrderScreen,
  },
];
