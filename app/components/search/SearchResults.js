import React from 'react';
import { List, Text, ListItem } from 'native-base';
import SearchItem from './SearchItem';
import { StyleSheet } from 'react-native';

export default (props) => {

  const { meal, results } = props;
  
  let renderedResults;

  if (!results[0]) {
    renderedResults = (
      <ListItem noIndent={true}>
        <Text>Aucun résultat.</Text>
      </ListItem>)
  } else {
    renderedResults = results.map((result, index) => (
      <SearchItem key={index} meal={meal} result={result} />
    ))
  }
  
  return (
    <List style={styles.listContainer}>
      {renderedResults}
    </List>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#eee"
  }
})