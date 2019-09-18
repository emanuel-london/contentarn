import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import  CardTitle from '../../../components/atoms/CardTitle/index';
import CardImage from "../../../components/atoms/CardImage/index";
import CardBody from "../../../components/atoms/CardBody/index";
import { withNavigation } from "react-navigation";
import styles from "../../templates/styles";

export default class Card extends React.Component {
    render() {
        return (
            
            <View style={{ flex: 1 }}>
              <CardImage src={this.props.src}/>
              <CardBody bdy={this.props.subtitle}/>
              <CardTitle title={this.props.title} navigation={this.props.navigation} nid={this.props.nid} />
            </View>
        );
    }
}