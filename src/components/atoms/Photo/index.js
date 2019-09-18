import React from 'react';
import { View, Image } from 'react-native';

const Photo = () => {
  return (
    <View>
       <Image
         source={this.props.src}
         style={this.props.size}
       />
    </View>
  );
};

const thumb = {
  width: 80,
  height: 60,
}
const medium = {
  width: 160,
  height: 100,
}
const large = {
  width: 340,
  height: 220,
}
export default Photo;
