import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import MealSection from '../components/MealSection';

export default ({ navigation }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="Aujourd'hui" alignment='center'/>
      <Divider/>
      <Layout style={{ padding: 10 }}>
        <MealSection title="Petit déjeuner" navigate={navigation.navigate}/>
        <Button onPress={() => navigation.navigate('Search')}>Recherche</Button>
      </Layout>
    </SafeAreaView>
  );
};