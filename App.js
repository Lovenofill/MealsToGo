import * as React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { Oswald_400Regular, useFonts as UseOswald } from '@expo-google-fonts/oswald'
import { Lato_400Regular, useFonts as UseLato } from '@expo-google-fonts/lato'
import { View, Text } from 'react-native';
import { SafeArea } from './src/components/utility/safe-area.component';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from "./src/services/location/location.context";
import 'react-native-gesture-handler';
import { AppNavigator } from './src/infrastructure/navigation/app.navigator';
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { firebase } from "./firebaseConfig";
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      firebase.auth
        .signInWithEmailAndPassword(
          firebase.getAuth,
          "LNF@hotmail.com",
          "123456"
        )
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((error) => {
          setIsAuthenticated(false);
          console.log(error);
        });
    }, 2000);
  }, []);



  let [OswaldLoaded] = UseOswald({
    Oswald_400Regular,
  });
  let [LatoLoaded] = UseLato({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !LatoLoaded) {
    return null;
  }
  if (!isAuthenticated) return null;
  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigator />
            </RestaurantsContextProvider>
          </LocationContextProvider>
          <ExpoStatusBar style="auto" />
        </FavouritesContextProvider>
      </ThemeProvider>
    </>
  );
}


