import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoardNavigation from './dashboard-navigation';
import { NewsDetailScreen } from 'screens/dashboard/news-detail';
import { ROUTES_NAMES } from 'config/constants/navigation';
import { Linking } from "react-native"
import { useTranslation } from "hooks/translation"
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();



const linking = {
  prefixes: ["newsApp://"],
  config: {
    initialRouteName: ROUTES_NAMES.allNews,
    screens: {
      Dashboard: {
        screens: {
          Settings: "my-settings", // my-settings is the key to open Settings page
          [ROUTES_NAMES.allNews]: "all-news"
        },

      },
      [ROUTES_NAMES.newsDetail]: "news-detail"
    },

  },
};



const MainNavigation = () => {
  const theme = useSelector(state => state.appPrefrences.theme)

  const getTranslatedSentence = useTranslation()

  useEffect(() => {
    const handleDeepLink = (event) => {
      const { path, queryParams, url } = event;
      console.log("event    ", event);

    };

    const urlListener = Linking.addEventListener('url', handleDeepLink)

    return () => {
      if (urlListener) urlListener.remove()

    };
  }, []);

  return (
    <NavigationContainer linking={linking}>

      <Stack.Navigator
        screenOptions={({ route }) => {
          return ({
            headerStyle: {
              backgroundColor: theme.backgroundColor,
            },
            headerTintColor: theme.textColor,
            title: getTranslatedSentence(route.name),
          })
        }}

      >
        <Stack.Screen name={ROUTES_NAMES.dashboard} component={DashBoardNavigation}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={ROUTES_NAMES.newsDetail}
          component={NewsDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
};
export default MainNavigation