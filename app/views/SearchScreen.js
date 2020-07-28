import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, TopNavigation, Layout, Input } from '@ui-kitten/components';
import { BackAction } from '../components/SmallComponents';
import SearchResults from '../components/SearchResults';

const requestHeaders = {
  "x-app-id": "05e754e7",
  "x-app-key": "107ea2f449d4e88d05e32f46d25b7746",
  "x-remote-user-id": 0
}

export default ({ navigation }) => {

  const getMeals = (input) => {
    fetch('https://trackapi.nutritionix.com/v2/search/instant?query=' + input + '&locale=fr_FR', {
      headers: requestHeaders
    })
      .then(res => res.json())
      .then(data => {
        setResults(data.common);
        setLoadingResults(false); 
      })
      .catch(err => console.log(err));
  }

  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const [loadingResults, setLoadingResults] = useState(true);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation 
        title="Ajouter un aliment"
        alignment="center"
        accessoryLeft={() => <BackAction goBack={navigation.goBack}/>}
      />
      <Divider />
      <Layout style={{ padding: 10 }}>
        <Input
          placeholder="Recherchez un ingrédient"
          onChangeText={input => setValue(input)}
          onSubmitEditing={() => getMeals(value)}
        />
        <SearchResults results={results} />
      </Layout>
    </SafeAreaView>
  );
};