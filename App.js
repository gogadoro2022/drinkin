import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {AppNavigation} from './src/infra/navigation/AppNavigation';
import {CocktailContextPorvider} from './src/service/cocktail/cocktail.context';
import {RecomandedContextProvider} from './src/service/recomanded/recomanded.context';

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
        <RecomandedContextProvider>
          <AppNavigation />
          <StatusBar />
        </RecomandedContextProvider>
      </CocktailContextPorvider>
    </>
  );
}
