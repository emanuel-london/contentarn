import React from 'react'
import { TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import {View, Text, StyleSheet, Image} from "react-native";
import LogoItem from "../../atoms/LogoItem/index";
import styles from "../../templates/styles";

const deviceWidth = Dimensions.get("window").width;


export default class Header extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {

    };
  }

  driveToggle(){
    if(!this.state.toggle){this.setState({
          toggle: true
        })}else{
      this.setState({
          toggle: false
        })
    }
  }

  driver(){
    if(this.state.toggle){
        return(<View style={{height:50, alignItems:'center', justifyContent:'flex-start', flexDirection:'row', width:'100%'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Homepage')} style={styles.eachNav}><Text>Home</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Recipe')} style={styles.eachNav}><Text>Recipe</Text></TouchableOpacity>
          </View>)
      }else{
        return(<View />)
      }
    }

  render(){
    return(<View style={{flex:1}}><View style={styles.row}>
        <View style={styles.logo}>
             <LogoItem />
        </View>
  
        <View style={styles.iconRight}>
          <Icon style={styles.icon}
            name="md-menu"
            size={32}
            color="black"
            onPress={() => this.driveToggle()}
      />
     </View>
     </View>
     {this.driver()}
    </View>)}
}