import React from 'react';
import { List, ListItem, Text } from 'native-base';

export default (props) => {

  const { results } = props;
  
  if (!results[0]) {
    return (
      <Text>Aucun résultat.</Text>
    )
  }
  
  const renderedResults = results.map(result => (
    <ListItem key={result.tag_id}>
      <Text>{result.food_name}</Text>
    </ListItem>
  ))

  return (
    <List>
      {renderedResults}
    </List>
  )
}