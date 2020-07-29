import React from 'react';
import { List, ListItem, Text, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import { addData } from '../functions';

export default (props) => {

  const { results, storageKey } = props;
  
  if (!results[0]) {
    return (
      <Text>Aucun résultat.</Text>
    )
  }
  
  const renderedResults = results.map(result => (
    <ListItem key={result.tag_id} style={styles.listItem}>
      <Text>{result.food_name}</Text>
      <Icon 
        name="add-outline"
        onPress={() => addData(storageKey, result)}
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