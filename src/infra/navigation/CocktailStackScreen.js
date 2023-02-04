import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import CocktailDetail from '../../feature/cocktail/component/CocktailDetail';
import Base from '../../feature/base/screen/Base';
import BaseDetail from '../../feature/base/screen/BaseDetail';
import Skill from '../../feature/detailModals/screen/Skill';
import Abv from '../../feature/detailModals/screen/Abv';
import Glass from '../../feature/detailModals/screen/Glass';
import Tool from '../../feature/detailModals/screen/Tool';

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
        name="base"
        component={Base}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="baseDetail"
        component={BaseDetail}
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
