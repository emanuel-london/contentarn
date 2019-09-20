import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import LogoItem from '../../atoms/LogoItem/index';
import styles from '../../templates/styles';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  menuToggle() {
    if (!this.state.toggle) {
      this.setState({
        toggle: true,
      });
    } else {
      this.setState({
        toggle: false,
      });
    }
  }

  menu() {
    if (this.state.toggle) {
      return (
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Homepage')}>
            <Text style={styles.eachNav}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Recipes')}>
            <Text style={styles.eachNav}>Recipes</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return <View />;
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.row}>
          <View style={styles.logo}>
            <LogoItem />
          </View>

          <View style={styles.iconRight}>
            <Icon
              style={styles.icon}
              name="md-menu"
              size={32}
              color="black"
              onPress={() => this.menuToggle()}
            />
          </View>
        </View>
        {this.menu()}
      </View>
    );
  }
}
