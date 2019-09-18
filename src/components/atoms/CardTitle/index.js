import React from 'react';
import { Text } from 'react-native';
import styles from "../../templates/styles";
import { withNavigation, StackActions, NavigationActions  } from "react-navigation";

export default class CardTitle extends React.Component {
    render() {
        return (
             <Text style={styles.titleLink} onPress={() => this.props.navigation.navigate("Recipes", {nid: this.props.nid})}>{this.props.title}</Text>
        )
    }
  }
