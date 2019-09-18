import React from 'react';
import { View, Image } from 'react-native';

export default class CardImage extends React.Component {
  render() {
    return (
      <View style={{padding: 5}}>
         <Image source={{uri: this.props.src}} style={{flex: 1, borderRadius: 5, padding: 10, width: null, height: 200}}/>
    </View>
    );
  }
}
