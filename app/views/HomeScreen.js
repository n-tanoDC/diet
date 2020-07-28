import React from 'react';
import MealSection from '../components/MealSection';
import { Container, Content, Button, Text } from 'native-base';
import CustomHeader from '../components/CustomHeader';
import { StyleSheet } from 'react-native';

const mealSections = [
  "Petit Déjeuner", "Déjeuner", "Diner"
]

export default ({ navigation }) => {

  const renderedSections = mealSections.map((section, index) => <MealSection key={index} title={section} navigate={navigation.navigate}/>) 

  return (
    <Container>
      <CustomHeader title="Aujourd'hui" left="home" />
      <Content style={styles.contentContainer}>
        {renderedSections}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 5,
  }
})