import React from 'react'
import { TouchableOpacity, Dimensions} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";
import {View, Text, StyleSheet, Image} from "react-native";
import LogoItem from "../../atoms/LogoItem/index";
import styles from "../../templates/styles";

const deviceWidth = Dimensions.get("window").width;

const Header = ({ navigation }) => (
  <View styles={styles.row}>
      <View style={styles.logo}>
           <LogoItem />
      </View>

      <View styles={styles.logo}>
          </View>
      <View style={styles.iconRight}>
        <Icon style={styles.icon}
          name="md-menu"
          size={32}
          color="black"
           onPress={() => navigation.openDrawer()}
    />
   </View>
  </View>
);

export default Header;
