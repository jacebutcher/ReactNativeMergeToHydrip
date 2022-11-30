import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import Settings from './screens/Settings';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = `home`;
                break;
              case 'Settings':
                iconName = 'cog';
                break;
              case 'Account':
                iconName = `person-circle-outline`;     
                break;    
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          style: { padding: 10, height: 90}
        }}>
        <Tab.Screen name={'Home'} component={LoginScreen} />
        <Tab.Screen name={'Settings'} component={SignupScreen} />
        <Tab.Screen name={'Account'} component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainTabNavigator;