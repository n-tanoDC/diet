import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Layout, TopNavigation, Button } from '@ui-kitten/components';
import MealSection from '../components/MealSection';

const mealSections = [
  "Petit Déjeuner", "Déjeuner", "Diner"
]

export default ({ navigation }) => {

  const renderedSections = mealSections.map((section, index) => <MealSection key={index} title={section} navigate={navigation.navigate}/>) 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Aujourd'hui" alignment='center'/>
      <Divider/>
      <Layout style={{ padding: 10 }}>
        {renderedSections}
        {/* // Todo => Créer et rendre un composant Summary */}
        <Button onPress={() => navigation.navigate('Search')}>Recherche</Button>
      </Layout>
    </SafeAreaView>
  );
};