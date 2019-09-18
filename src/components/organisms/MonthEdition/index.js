import React from 'react';
import { View, Text } from 'react-native';
import styles from "../../templates/styles";

export default class MonthEdition extends React.Component {

  render() {
    return (
       <View> 
        <Text style={styles.h2}>In this month's edition</Text>
        <Text>Dumque ibi diu moratur commeatus opperiens, quorum translationem ex
          Aquitania verni imbres solito crebriores prohibebant auctique torrentes,
          Herculanus advenit protector domesticus, Hermogenis ex magistro equitum filius,
          apud Constantinopolim, ut supra rettulimus, populari quondam turbela discerpti.
          quo verissime referente quae Gallus egerat, damnis super praeteritis maerens et
          futurorum timore suspensus angorem animi quam diu potuit emendabat.
        </Text>
    </View>
    )
  }

}