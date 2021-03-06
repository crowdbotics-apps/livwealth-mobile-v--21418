import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen25139987Navigator from '../features/BlankScreen25139987/navigator';
import SignUp21139915Navigator from '../features/SignUp21139915/navigator';
import UserProfile2139914Navigator from '../features/UserProfile2139914/navigator';
import Dashboard23139913Navigator from '../features/Dashboard23139913/navigator';
import Dashboard14139912Navigator from '../features/Dashboard14139912/navigator';
import ArticleList6139910Navigator from '../features/ArticleList6139910/navigator';
import ArticleList139890Navigator from '../features/ArticleList139890/navigator';
import Maps139877Navigator from '../features/Maps139877/navigator';
import ArticleList139872Navigator from '../features/ArticleList139872/navigator';
import Maps139859Navigator from '../features/Maps139859/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen25139987: { screen: BlankScreen25139987Navigator },
SignUp21139915: { screen: SignUp21139915Navigator },
UserProfile2139914: { screen: UserProfile2139914Navigator },
Dashboard23139913: { screen: Dashboard23139913Navigator },
Dashboard14139912: { screen: Dashboard14139912Navigator },
ArticleList6139910: { screen: ArticleList6139910Navigator },
ArticleList139890: { screen: ArticleList139890Navigator },
Maps139877: { screen: Maps139877Navigator },
ArticleList139872: { screen: ArticleList139872Navigator },
Maps139859: { screen: Maps139859Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
