import React, { useState } from 'react';
import MealSection from '../components/MealSection';
import { Container, Content } from 'native-base';
import CustomHeader from '../components/CustomHeader';
import { StyleSheet } from 'react-native';
import Summary from '../components/Summary';

const mealSections = ["Petit déjeuner", "Déjeuner", "Dîner"];
const STORAGE_KEY = "@save-item"

export default ({ navigation }) => {

  const renderedSections = mealSections.map((section, index) => (
    <MealSection
      key={index}
      storageKey={STORAGE_KEY}
      title={section}
      navigate={navigation.navigate}/>
  )) 

  const [data, setData] = useState([]);

  
  

  return (
    <Container>
      <CustomHeader title="Aujourd'hui" left="home" />
      <Content style={styles.contentContainer}>
        {renderedSections}
        <Summary />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 5,
  }
})