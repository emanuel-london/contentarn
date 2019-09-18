import React from "react";
import {View, Text, FlatList, ListItem} from "react-native";
import styles from "../../templates/styles";
import CardImage from "../../atoms/CardImage/index";
import CardBody from "../../atoms/CardBody/index";

export default class NodeView extends React.Component {
  render() {
    return (
      <View>

      {this.props.node.map((recipe) => (
         <View key={recipe.id}>
          <Text style={styles.h1}>{recipe.title}</Text>

          <CardImage src={recipe.image} />
          <View>
            <Text style={styles.h6}>Difficulty: </Text><Text style={styles.inlineText}>{recipe.difficulty} </Text>
            <Text style={styles.h6}>Total Time: </Text><Text style={styles.inlineText}> {recipe.totalTime} minutes</Text>
            <Text style={styles.h5}>Ingredients</Text>
           <FlatList data={recipe.ingredients} renderItem={({ item }) => <Item title={item} />} keyExtractor={item => item} />
          </View>
          <View>
            <Text style={styles.h5}>Instructions</Text>
            <CardBody bdy={recipe.instructions} />
          </View>
        </View>
      ))}
    </View>
    );
    
  }
}
export function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}