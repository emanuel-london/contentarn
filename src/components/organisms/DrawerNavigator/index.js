import React from 'react';
import {View, Text} from 'react-native';
import {DrawerItems } from 'react-navigation';
import styles from "../../templates/styles";

const DrawerNavigator = props => (
  <View style={[styles.container]}>
    <DrawerItems
      activeBackgroundColor={"black"}
      activeTintColor={"blue"}
      {...props}
    />
  </View>
);
export default DrawerNavigator;
