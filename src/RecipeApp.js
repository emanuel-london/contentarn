import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from "./components/pages/Homepage/index";
import Recipes from "./components/pages/Recipes/index";

const Stack = createStackNavigator(
  {
    Homepage : HomePage,
    Recipes: Recipes
  },
  {
    initialRouteName: 'Homepage',
    headerMode: 'none'
  }
);

const Sunny = createAppContainer(Stack);

export default Sunny;

