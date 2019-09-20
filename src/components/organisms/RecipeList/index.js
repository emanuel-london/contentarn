import React from 'react';
import Card from '../../molecules/Card/index';
import {Text, View } from 'react-native';
import styles from "../../templates/styles";

export default class RecipeList extends React.Component {
  render() {
    return (
      <View>
        <View>
          <Text style={styles.h3}>Recipes</Text>
          <Text style={styles.h5}>Explore recipes across every type of occasion, ingredient and skill level</Text>
        </View>
        {this.props.recipes.map(recipe => (
          <View key={recipe.id}>
            <Card src={recipe.image} title={recipe.title} navigation={this.props.navigation} nid={recipe.id} />
          </View>
        ))}
    </View>
    );
  }
}
