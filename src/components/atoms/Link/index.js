import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styles from "../../templates/styles";

export  default class Link extends React.Component {

  render()  {
    return (
       <View>
          <Text style={styles.link} onPress={() => this.props.navigation.navigate(this.props.to)}>{this.props.text}</Text>
         </View>
    )
  }
}
