import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Main} from '../../feature/main/screen/Start';
import {Cocktail} from '../../feature/cocktail/screen/Cocktail';
import {MyHomebar} from '../../feature/myHomebar/screen/MyHomebar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MainStackScreen} from './MainStackScreen';

const Tab = createBottomTabNavigator();
const TAB_ICONS = {
  메인: 'home-sharp',
  칵테일: 'ios-wine-outline',
  '나의 홈바': 'person-outline',
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const iconName = TAB_ICONS[route.name];
            return <Ionicons name={iconName} color={color} size={size} />;
          },
        })}>
        <Tab.Screen
          name="메인"
          component={MainStackScreen}
          options={{headerShown: false}}
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
