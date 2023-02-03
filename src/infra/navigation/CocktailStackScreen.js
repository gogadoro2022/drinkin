import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import CocktailDetail from '../../feature/cocktail/component/CocktailDetail';
import Liquor from '../../component/Detail/Liquor';
import Ingredient from '../../component/Detail/Ingredient';
import Tool from '../../component/Detail/Tool';
import Skill from '../../component/Detail/Skill';
import Abv from '../../component/Detail/Abv';
import Glass from '../../component/Detail/Glass';

const Tab = createStackNavigator();

export const CocktailStackScreen = ({route}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <Tab.Screen
        name="cocktailDetail"
        component={CocktailDetail}
        options={{
          headerShown: false,
        }}
        initialParams={{item: route}}
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
