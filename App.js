import React from 'react';
import RecipeApp from './src/RecipeApp';
import store from "./src/redux";
import { Provider } from "react-redux";

const App = () => {
  return (
      <Provider store={store}>
      <RecipeApp />
      </Provider>
  );
}

export default App;
