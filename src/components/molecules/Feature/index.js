import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import { Photo, CardTitle } from '../../../components';

export default class Feature extends React.Component {
    render() {
        return (
            <View style={{ flex: 0.5 }}>
            <Photo src={ this.props.src } size= {this.props.size} />
            <CardTitle text = { this.props.txt } />
            </View>
        );
    }
}
