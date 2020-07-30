import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { Container, Content } from 'native-base';

import MealSection from '../components/meals/MealSection';
import CustomHeader from '../components/CustomHeader';
import Summary from '../components/summary/SummarySection';

import { readItems } from '../functions/storage';

const mealSections = ["Petit déjeuner", "Déjeuner", "Dîner"];

export default ({ navigation }) => {
  const isFocused = useIsFocused();

  const [data, setData] = useState([]);
  const [itemDeleted, setItemDeleted] = useState(false);

  useEffect(() => { readItems(setData) }, [isFocused, itemDeleted]);
  useEffect(() => { setItemDeleted(false) }, [data]);
  
  const renderedSections = mealSections.map((section, index) => (
    <MealSection
      key={index}
      items={data}
      title={section}
      deleted={setItemDeleted}
      navigate={navigation.navigate}/>
  ))

  return (
    <Container>
      <CustomHeader title="Aujourd'hui" left="home" />
      <Content style={styles.contentContainer}>
        {renderedSections}
        <Summary data={data} />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 5,
  }
})