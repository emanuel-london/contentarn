import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "../../templates/styles";
import { withNavigation, StackActions, NavigationActions  } from "react-navigation";

export default class CardTitle extends React.Component {
	constructor(props) {
	  super(props);
			console.log(this.props)
	 	 this.state = {};
	}

  navigate(){
    
  }
    render() {
        return (
             <TouchableOpacity onPress={() => this.props.navigation.navigate("Recipes", {nid: this.props.nid})}><Text style={styles.titleLink} >{this.props.title}</Text></TouchableOpacity>
        )
    }
  }
