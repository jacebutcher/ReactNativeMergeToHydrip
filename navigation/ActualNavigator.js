import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';

const Tab = createBottomTabNavigator();

function ActualNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Activity':
                iconName = `heart-circle-outline`;
                break
                case 'Settings':
                iconName = `heart-circle-outline`;
                break
                case 'Stats':
                iconName = `heart-circle-outline`;
                break
              case 'Account':
                iconName = `person-circle-outline`;
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
        <Tab.Screen name={'Home'} component={HomeScreen} />
        <Tab.Screen name={'Account'} component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default ActualNavigator;