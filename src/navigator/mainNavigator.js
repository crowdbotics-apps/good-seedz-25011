import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings214598Navigator from '../features/Settings214598/navigator';
import Maps214576Navigator from '../features/Maps214576/navigator';
import Additem214575Navigator from '../features/Additem214575/navigator';
import Maps214571Navigator from '../features/Maps214571/navigator';
import UserProfile214567Navigator from '../features/UserProfile214567/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings214598: { screen: Settings214598Navigator },
Maps214576: { screen: Maps214576Navigator },
Additem214575: { screen: Additem214575Navigator },
Maps214571: { screen: Maps214571Navigator },
UserProfile214567: { screen: UserProfile214567Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
