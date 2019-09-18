import React from 'react';
//import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Card from "../../molecules/Card/index";
import { withNavigation } from "react-navigation";

export default class PromotedRecipes extends React.Component {
  render() {
    return (
      <View>
        {this.props.recipes.map((recipe) => (
        <View key={recipe.id}>
          <Card src={recipe.image} subtitle={recipe.category} title={recipe.title} navigation={this.props.navigation} nid={recipe.id} />
        </View>
      ))}
      </View>
    );
  }

}
