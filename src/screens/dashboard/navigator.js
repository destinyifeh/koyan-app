import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {FONT_FAMILY_BODY} from '../../constants/Styles';
import QRScreen from './QR';
import AccountScreen from './account';
import HomeScreen from './home';
import OrdersScreen from './orders';
import {dashboardScreenComponents} from './screen-components';
import SupportScreen from './support';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function DashboardTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#E3EEFC',
        tabBarActiveTintColor: '#74AAF0',
        tabBarLabelStyle: {
          color: '#757C7D',
          fontFamily: FONT_FAMILY_BODY,
          lineHeight: 18,
          fontWeight: '400',
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={16} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="shopping-basket" color={color} size={16} />
          ),
        }}
      />

      <Tab.Screen
        name="QR"
        component={QRScreen}
        options={{
          tabBarLabel: 'Scan QR',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="line-scan" color={color} size={16} />
          ),
        }}
      />

      <Tab.Screen
        name="Support"
        component={SupportScreen}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({color, size}) => (
            <SimpleLineIcons name="earphones-alt" color={color} size={16} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={16} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function DashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      {dashboardScreenComponents.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
}
