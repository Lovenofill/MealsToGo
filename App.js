import * as React from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { Oswald_400Regular, useFonts as UseOswald } from '@expo-google-fonts/oswald'
import { Lato_400Regular, useFonts as UseLato } from '@expo-google-fonts/lato'
import { View, Text } from 'react-native';



export default function App() {

  let [OswaldLoaded] = UseOswald({
    Oswald_400Regular,
  });
  let [LatoLoaded] = UseLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}


