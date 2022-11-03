import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Login'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Login':
                iconName = `home`;
                break;
              case 'Signup':
                iconName = `flash`;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          activeTintColor: 'blue',
          inactiveTintColor: 'black',
          style: { padding: 10, height: 70}
        }}>
        <Tab.Screen name={'Login'} component={LoginScreen} />
        <Tab.Screen name={'Signup'} component={SignupScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainTabNavigator;