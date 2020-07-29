import React from 'react';
import { List, ListItem, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import { addItem } from '../functions/storage';

export default (props) => {

  const { meal, results } = props;
  
  if (!results[0]) {
    return (
      <Text>Aucun résultat.</Text>
    )
  }
  
  const renderedResults = results.map(result => (
    <ListItem key={result.food_name} style={styles.listItem}>
      <Text>{result.food_name}</Text>
      <Icon 
        name="add-outline"
        onPress={() => addItem({ ...result, meal: meal })}
      /> 
    </ListItem>
  ))

  return (
    <List>
      {renderedResults}
    </List>
  )
}

const styles = StyleSheet.create({
  listItem: {
    justifyContent: "space-between"
  }
})