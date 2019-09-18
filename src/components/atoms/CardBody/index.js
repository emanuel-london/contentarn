import React from 'react';
import { Text } from 'react-native';
import styles from "../../templates/styles";

export default class CardBody extends React.Component {
    render() {
        return (
          <Text style={styles.link}>{this.props.bdy}</Text>
        )
    }
}