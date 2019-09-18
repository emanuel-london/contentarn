import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import NodeView from "../../organisms/NodeView/index";
import RecipeApi from "../../../api/recipe";
import Transform from "../../../utils/Transform";
import styles from "../../templates/styles";
import Header from "../../organisms/Header/index";
import RecipeList from "../../organisms/RecipeList/index";

export default class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      allNodes: []
     };
    }

   initialize = () => {
    recep = new RecipeApi();
    nid = this.props.navigation.getParam('nid', null);
     this.props.navigation.setParams('nid', null);
    if (nid) {
      try {
        recep.get(nid)
        .then((response) => response)
          .then((responseJson) => {
            const transformed = t.transformJson(responseJson);
            this.setState({nodes: transformed});

          })
          .catch((error) => {
            console.error(error);
          });
    }
    catch (e) {

    }
    }
    else {
      try {
        recep.getAll(20)
        .then((response) => response)
          .then((responseJson) => {
            const transformed = t.transformJson(responseJson);
            this.setState({allNodes: transformed});
          })
          .catch((error) => {
            console.error(error);
          });
      }
      catch (e) {

      }
    }

  }
  componentDidMount() {
    this.initialize();
  }
  render() {
    return (
      <View style={styles.container}>
          <ScrollView>
            <Header navigation={this.props.navigation} style={styles.header}/>
            <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
            <View>
              {(this.state.allNodes.length > 0) ?
              <RecipeList recipes={this.state.allNodes} navigation={this.props.navigation} />
              : <NodeView node={this.state.nodes} nid={this.props.navigation.getParam('nid', '')} /> }

            </View>
            </ScrollView>
            </View>
    );
  }
}
