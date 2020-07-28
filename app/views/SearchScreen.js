import React, { useState } from 'react';
import { Container, Item, Content, Input, Spinner, Button, Text } from 'native-base';
import SearchResults from '../components/SearchResults';
import CustomHeader from '../components/CustomHeader';

const requestHeaders = {
  "x-app-id": "ff0ccea8",
  "x-app-key": "605660a17994344157a78f518a111eda",
  "x-remote-user-id": 0
}

export default ({ route, navigation }) => {

  const getMeals = (input) => {
    setLoadingResults(true)
    fetch('https://trackapi.nutritionix.com/v2/search/instant?query=' + input + '&locale=fr_FR', {
      headers: requestHeaders
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.common);
        setResults(data.common);
        setLoadingResults(false); 
      })
      .catch(err => {
        console.log(err)
        setLoadingResults(false);
      })
  }

  const [value, setValue] = useState('');
  const [results, setResults] = useState(null);
  const [loadingResults, setLoadingResults] = useState(false);
  
  let outputResults;

  if (loadingResults) {
    outputResults = <Spinner />
  } else {
    if (results) {
      outputResults = <SearchResults results={results} />
    }
  }
  
  return (
    <Container>
      <CustomHeader
        title="Ajouter un aliment"
        subtitle={route.params.subtitle}
        left="back" navigation={navigation} />
      <Content>
        <Item>
          <Input
            placeholder="Recherchez un ingrédient"
            onChangeText={input => setValue(input)}
            onSubmitEditing={() => getMeals(value)}
          />
        </Item>
        {outputResults}
        <Button full onPress={() => console.log(results)}>
          <Text>Debug</Text>
        </Button>
      </Content>
    </Container>
  );
};

