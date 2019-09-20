import React from 'react';
import {View} from 'react-native';
import Header from '../../../components/organisms/Header/index';
import {ScrollView} from 'react-native-gesture-handler';
import RecipeApi from '../../../api/recipe';
import PromotedRecipes from '../../organisms/PromotedRecipes/index';
import Transform from '../../../utils/Transform';
import MonthEdition from '../../organisms/MonthEdition/index';
import HomeWidgets from '../../organisms/HomeWidgets/index';
import RecipeList from '../../organisms/RecipeList/index';
import styles from '../../templates/styles';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promotedItems: [],
      latestRecipes: [],
    };
  }

  initialize = () => {
    recep = new RecipeApi();
    t = new Transform();
    try {
      recep
        .getPromoted()
        .then(response => response)
        .then(responseJson => {
          const transformed = t.transformJson(responseJson);
          this.setState({promotedItems: transformed});
        })
        .catch(error => {
          console.error(error);
        });
    } catch (e) {}
    try {
      recep
        .getAll()
        .then(response => response)
        .then(responseJson => {
          const transformed = t.transformJson(responseJson);
          this.setState({latestRecipes: transformed});
        })
        .catch(error => {
          console.error(error);
        });
    } catch (e) {}
  };
  componentDidMount() {
    this.initialize();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView stickyHeaderIndices={[0]}>
          <Header navigation={this.props.navigation} style={styles.header} />
          <View>
            <PromotedRecipes
              recipes={this.state.promotedItems}
              navigation={this.props.navigation}
            />
            <MonthEdition navigation={this.props.navigation} />
            <HomeWidgets />
            <RecipeList
              recipes={this.state.latestRecipes}
              navigation={this.props.navigation}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
