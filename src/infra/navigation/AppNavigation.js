import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Cocktail} from '../../feature/cocktail/screen/Cocktail';
import {MyHomebar} from '../../feature/myHomebar/screen/MyHomebar';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {MainStackScreen} from './MainStackScreen';

const Tab = createBottomTabNavigator();
const TAB_ICONS = {
  메인: 'md-home-outline',
  칵테일: 'md-wine-outline',
  '나의 홈바': 'md-person-outline',
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const iconName = TAB_ICONS[route.name];
            return <Ionicon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="메인"
          component={MainStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="칵테일"
          component={Cocktail}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="나의 홈바"
          component={MyHomebar}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
