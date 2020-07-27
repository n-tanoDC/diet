import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Icon, Divider, TopNavigation, TopNavigationAction, Layout, Input, Text} from '@ui-kitten/components';

const requestHeaders = {
  "x-app-id": "05e754e7",
  "x-app-key": "107ea2f449d4e88d05e32f46d25b7746",
  "x-remote-user-id": 0
}

export default ({ navigation }) => {

  const renderBackAction = () => {
    return (
      <TopNavigationAction 
        onPress={() => navigation.goBack()}
        icon={(props) => <Icon {...props} name='arrow-back'/>}/>
    )
  }

  const getMeals = (input) => {
    fetch('https://trackapi.nutritionix.com/v2/search/instant?query=' + input + '&locale=fr_FR', {
      headers: requestHeaders
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.common);
        setResults(data.common);
        setLoadingResults(false); 
      })
      .catch(err => console.log(err));
  }

  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const [loadingResults, setLoadingResults] = useState(true);
  
  let renderedResults;
  if (!loadingResults) {
    renderedResults = results.map(result => <Text>{result.food_name}</Text>)
  } else {
    renderedResults = <Text>Aucun résultat</Text>
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation 
        title="Ajouter un aliment"
        alignment="center"
        accessoryLeft={renderBackAction}
      />
      <Divider />
      <Layout style={{ padding: 10 }}>
        <Input
          placeholder="Recherchez un ingrédient"
          onChangeText={input => setValue(input)}
          onSubmitEditing={() => getMeals(value)}
        />
        {renderedResults}
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
})