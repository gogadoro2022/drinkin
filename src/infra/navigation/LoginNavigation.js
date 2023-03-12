import React from 'react';
import {SafeArea} from '../../component/util/SafeArea';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity, View} from 'react-native';
import {MainStackScreen} from './MainStackScreen';
import LogIn from '../../feature/signIn/LogIn';

export default function LoginNavigation() {
  const Tab = createStackNavigator();
  return (
    <SafeArea>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Tab.Screen name="회원가입" component={LogIn} />
        {/* <Tab.Screen name="r" */}
        <Tab.Screen name="main" component={MainStackScreen} />
      </Tab.Navigator>
    </SafeArea>
  );
}
