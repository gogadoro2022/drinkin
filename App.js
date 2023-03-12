import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {AppNavigation} from './src/infra/navigation/AppNavigation';
import {CocktailContextPorvider} from './src/service/cocktail/cocktail.context';
import {RecomandedContextProvider} from './src/service/recomanded/recomanded.context';
import {SelectContextProvider} from './src/service/select/select.context';

export default function App() {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <>
      <CocktailContextPorvider>
        {/* <SelectContextProvider> */}
        {/* <RecomandedContextProvider> */}
        <AppNavigation />
        <StatusBar />
        {/* </RecomandedContextProvider> */}
        {/* </SelectContextProvider> */}
      </CocktailContextPorvider>
    </>
  );
}
