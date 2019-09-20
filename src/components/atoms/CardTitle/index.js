import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "../../templates/styles";

export default class CardTitle extends React.Component {
	constructor(props) {
	  super(props);
	 	 this.state = {};
	}

  navigate(){

  }
    render() {
        return (
             <TouchableOpacity onPress={() => this.props.navigation.push("Recipes", {nid: this.props.nid})}><Text style={styles.titleLink} >{this.props.title}</Text></TouchableOpacity>
        )
    }
  }
