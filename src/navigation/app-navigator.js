import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {DashboardStack} from '../screens/dashboard/navigator';
import ForgotPasswordScreen from '../screens/user-account/forgot-password';
import LoginScreen from '../screens/user-account/login';
import ResetPasswordScreen from '../screens/user-account/reset-password';
import SignupScreen from '../screens/user-account/signup';
import VerifyEmailScreen from '../screens/user-account/verify';
import LandingScreen from '../screens/landing';
import SplashScreen from '../screens/splashScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />

        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
