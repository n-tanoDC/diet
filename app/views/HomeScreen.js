import React from 'react';
import MealSection from '../components/MealSection';
import { Container, Content } from 'native-base';
import CustomHeader from '../components/CustomHeader';
import { StyleSheet } from 'react-native';

const mealSections = [
  {
    title: "Petit déjeuner",
    storage_key: "@save-breakfast"
  },
  {
    title: "Déjeuner",
    storage_key: "@save-lunch"
  },
  {
    title: "Dîner",
    storage_key: "@save-diner"
  }
]

export default ({ navigation }) => {

  const renderedSections = mealSections.map((section, index) => (
    <MealSection
      key={index}
      storageKey={section.storage_key}
      title={section.title}
      navigate={navigation.navigate}/>
  )) 

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