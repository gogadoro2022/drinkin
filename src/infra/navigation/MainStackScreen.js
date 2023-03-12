import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Start} from '../../feature/main/screen/Start';
import Select from '../../feature/main/screen/Select';
import Recomand from '../../feature/main/screen/Recomand';
import {CocktailStackScreen} from './CocktailStackScreen';
import LoginNavigation from './LoginNavigation';
import CocktailCard from '../../feature/cocktail/component/CocktailCard';

const Tab = createStackNavigator();

export const MainStackScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="start"
        component={Start}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="selectCocktail"
        component={Select}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="recomand"
        component={Recomand}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="logInStack"
        component={LoginNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="recomandedCard"
        component={CocktailCard}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="cocktailDetailScreen"
        component={CocktailStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
