import React from 'react';
import MealSection from '../components/MealSection';
import { Container, Content, Button, Text } from 'native-base';
import CustomHeader from '../components/CustomHeader';

const mealSections = [
  "Petit Déjeuner", "Déjeuner", "Diner"
]

export default ({ navigation }) => {

  const renderedSections = mealSections.map((section, index) => <MealSection key={index} title={section} navigate={navigation.navigate}/>) 

  return (
    <Container>
      <CustomHeader title="Aujourd'hui" left="home" />
      <Content>
        {renderedSections}
        <Button full onPress={() => navigation.navigate('Search')}>
          <Text>Rechercher</Text>
        </Button>
      </Content>
    </Container>
  );
};