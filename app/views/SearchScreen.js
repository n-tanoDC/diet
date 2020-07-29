import React, { useState } from 'react';
import { Container, Item, Content, Input, Spinner } from 'native-base';
import SearchResults from '../components/SearchResults';
import CustomHeader from '../components/CustomHeader';
import { getMeals } from '../functions';

export default ({ route, navigation }) => {

  const [value, setValue] = useState('');
  const [results, setResults] = useState(null);
  const [loadingResults, setLoadingResults] = useState(false);
  
  const { subtitle, storageKey } = route.params;

  let outputResults;

  if (loadingResults) {
    outputResults = <Spinner />
  } else {
    if (results) {
      outputResults = (
        <SearchResults
          storageKey={storageKey}
          meal={subtitle}
          results={results} />
      )
    }
  }
  
  return (
    <Container>
      <CustomHeader
        title="Ajouter un aliment"
        subtitle={subtitle}
        left="back"
        navigation={navigation}
      />
      <Content>
        <Item>
          <Input
            placeholder="Recherchez un ingrédient"
            onChangeText={input => setValue(input)}
            onSubmitEditing={() => getMeals(value, setResults, setLoadingResults)}
          />
        </Item>
        {outputResults}
      </Content>
    </Container>
  );
};

