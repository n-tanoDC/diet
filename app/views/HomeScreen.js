import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { Container, Content, Button, Text } from 'native-base';

import MealSection from '../components/meals/MealSection';
import HomeHeader from '../components/headers/HomeHeader';
import Summary from '../components/summary/SummarySection';

import { readItems, clearItems } from '../functions/storage';
import UserModal from '../components/user/UserModal';

const mealSections = ["Petit déjeuner", "Déjeuner", "Dîner"];

export default ({ navigation }) => {
  const isFocused = useIsFocused();

  const [data, setData] = useState([]);
  const [itemDeleted, setItemDeleted] = useState(false);
  const [modalDisplayed, displayModal] = useState(false);

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
      <UserModal modalDisplayed={modalDisplayed} displayModal={displayModal} />
      <HomeHeader displayModal={displayModal} title="Aujourd'hui"/>
      <Content style={styles.contentContainer}>
        {renderedSections}
        <Summary data={data} />
      </Content>
      <Button 
        full warning
        onPress={() => clearItems(setData)}>
        <Text>Réinitialiser</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 5,
  }
})