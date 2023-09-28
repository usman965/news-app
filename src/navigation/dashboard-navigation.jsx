import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AllNewsScreen } from '../screens/dashboard/all-news';
import { SettingsScreen } from '../screens/dashboard/settings';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ROUTES_NAMES } from '../config/constants/navigation';
import { useTheme } from '../hooks/theme';




const Tab = createBottomTabNavigator();

function DashBoardNavigation() {
  const {theme} = useTheme()
  return (
    <Tab.Navigator
    screenOptions={{
      headerStyle:{backgroundColor:theme.backgroundColor,
     },
     headerTintColor: theme.textColor,
     tabBarShowLabel:false,
     tabBarStyle:{backgroundColor:theme.backgroundColor,
     }
    

     }}
    >
      <Tab.Screen name={ROUTES_NAMES.allNews} component={AllNewsScreen} 
      options={{
        tabBarIcon:({color,size})=>(
            <Entypo name="home" size={30} color={theme.textColor} />
        )
      }}
      
      />
      <Tab.Screen name={ROUTES_NAMES.settings} component={SettingsScreen} 
        options={{
            tabBarIcon:({color,size})=>(
                <Fontisto name="player-settings" size={30}  color={theme.textColor}/>
            )
          }}
      
      />
    </Tab.Navigator>
  );
}
export default DashBoardNavigation