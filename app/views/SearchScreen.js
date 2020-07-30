import React, { useState } from 'react';
import { Container, Item, Content, Input, Spinner } from 'native-base';
import SearchResults from '../components/search/SearchResults';
import { fetchData } from '../functions/data';
import SearchHeader from '../components/headers/SearchHeader';

export default ({ route, navigation }) => {

  const [value, setValue] = useState('');
  const [results, setResults] = useState(null);
  const [loadingResults, setLoadingResults] = useState(false);
  
  const { subtitle } = route.params;

  let outputResults;

  if (loadingResults) {
    outputResults = <Spinner />
  } else {
    if (results) {
      outputResults = (
        <SearchResults
          meal={subtitle}
          results={results} />
      )
    }
  }
  
  return (
    <Container>
      <SearchHeader
        title="Ajouter un aliment"
        subtitle={subtitle}
        navigation={navigation}
      />
      <Content>
        <Item>
          <Input
            placeholder="Recherchez un ingrédient"
            onChangeText={input => setValue(input)}
            onSubmitEditing={() => fetchData(value, setResults, setLoadingResults)}
          />
        </Item>
        {outputResults}
      </Content>
    </Container>
  );
};

