import { createStackNavigator } from "react-navigation-stack";
import CurrentMatchScreen from "../screens/CurrentMatchScreen";
import NewMatchScreen from "../screens/NewMatchScreen";
import PreviousMatchScreen from "../screens/PreviousMatchScreen";
import MainPageScreen from "../screens/MainPageScreen";
import { createAppContainer } from "react-navigation";

const MatchesNavigator = createStackNavigator({
  MainPage: MainPageScreen,
  NewMatch: NewMatchScreen,
  CurrentMatch: CurrentMatchScreen,
  PreviousMatch: PreviousMatchScreen,
});

export default createAppContainer(MatchesNavigator);
