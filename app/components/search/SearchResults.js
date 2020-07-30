import React from 'react';
import { List, Text } from 'native-base';
import SearchItem from './SearchItem';

export default (props) => {

  const { meal, results } = props;
  
  if (!results[0]) {
    return (
      <List>
        <Text>Aucun résultat.</Text>
      </List>
    )
  }
  
  const renderedResults = results.map((result, index) => (
    <SearchItem key={index} meal={meal} result={result} />
  ))

  return (
    <List>
      {renderedResults}
    </List>
  )
}