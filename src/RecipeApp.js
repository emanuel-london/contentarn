import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import DrawerNavigator from "./components";
import HomePage from "./components/pages/Homepage/index";
import Recipes from "./components/pages/Recipes/index";


const MainNavigator = createDrawerNavigator({
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="ios-home" style={{ color: "red" }} />
        ),
        drawerLabel: "Home"
      },
      screen: HomePage
    },
    Recipes: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon type='MaterialIcons' name="md-restaurant" style={{ color: tintColor }} />
        ),
        drawerLabel: "Recipes"
      },
      screen: Recipes
    },
  }
);

const RecipeApp = createAppContainer(MainNavigator);
export default RecipeApp;
