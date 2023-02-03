import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import CocktailDetail from '../../component/cocktail/CocktailDetail';
import Liquor from '../../component/Detail/Liquor';
import Ingredient from '../../component/Detail/Ingredient';
import Tool from '../../component/Detail/Tool';
import Skill from '../../component/Detail/Skill';
import Abv from '../../component/Detail/Abv';
import Glass from '../../component/Detail/Glass';

const Tab = createStackNavigator();

export const CocktailStackScreen = props => {
  console.log('navigator :', props);
  return (
    <Tab.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <Tab.Screen
        name="cocktailDetail"
        component={CocktailDetail}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="liquor"
        component={Liquor}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ingredient"
        component={Ingredient}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="tool"
        component={Tool}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="skill"
        component={Skill}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="glass"
        component={Glass}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="abv"
        component={Abv}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
