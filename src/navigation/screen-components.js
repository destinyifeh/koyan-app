import EateriesScreen from '../screens/category-screens/eateries';
import OpenEateriesScreen from '../screens/category-screens/eateries/open-eateries';
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
];
