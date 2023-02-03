import React from 'react';
import {SafeArea} from '../../component/util/SafeArea';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity, View} from 'react-native';
import {MainStackScreen} from './MainStackScreen';

export default function LoginNavigation() {
  const Login = ({navigation}) => {
    return (
      <View>
        <Text>log in</Text>
        <TouchableOpacity
          onPress={() => navigation.reset({routes: [{name: 'main'}]})}>
          <Text>click</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const Tab = createStackNavigator();
  return (
    <SafeArea>
      <Tab.Navigator>
        <Tab.Screen name="logIn" component={Login} />
        <Tab.Screen name="main" component={MainStackScreen} />
      </Tab.Navigator>
    </SafeArea>
  );
}
