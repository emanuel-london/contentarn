import React from 'react';
import logo from './logo.svg';
import { Image } from 'react-native';

export default class LogoItem extends React.Component {

  render() {
    return (
      <Image source={require('./logo.png')} style = {{width: 240, height: 50, marginTop: 10, resizeMode: 'contain'}} />
    );
  }

}

