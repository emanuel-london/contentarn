import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Link from "../../atoms/Link/index";
import styles from "../../templates/styles";

export default class HomeWidgets extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.row}>
          <View style={styles.columnLeft}>
            <Text style={styles.h6}>Dinners to impress</Text>
            <Link to="Recipes" text="List recipes"  />
          </View>
          <View style={styles.columnRight}>
            <Text style={styles.h6}>Learn to cook</Text>
            <Link to="Recipes" text="Recipes for beginners" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.columnLeft}>
            <Text style={styles.h6}>Baked up</Text>
            <Link to="Recipes" text="Delicious cake and bakes" />
          </View>

          <View style={styles.columnRight}>
            <Text style={styles.h6}>Quick and easy</Text>
            <Link to="Recipes" text="20 minutes or less" />
          </View>
        </View>
 
    </View>
    );
  }
}