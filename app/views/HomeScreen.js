import React, { useState, useEffect } from 'react';
import MealSection from '../components/MealSection';
import { Container, Content, Button, Text } from 'native-base';
import CustomHeader from '../components/CustomHeader';
import { StyleSheet } from 'react-native';
import Summary from '../components/Summary';
import { readData } from '../functions';
import { useIsFocused } from "@react-navigation/native";

const mealSections = ["Petit déjeuner", "Déjeuner", "Dîner"];
const STORAGE_KEY = "@save-item"

export default ({ navigation }) => {
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);

  useEffect(() => { readData(STORAGE_KEY, setData) }, [isFocused]);
  
  const renderedSections = mealSections.map((section, index) => (
    <MealSection
      key={index}
      items={data.filter(element => element.meal === section)}
      storageKey={STORAGE_KEY}
      title={section}
      navigate={navigation.navigate}/>
  ))

  return (
    <Container>
      <CustomHeader title="Aujourd'hui" left="home" />
      <Content style={styles.contentContainer}>
        {renderedSections}
        <Summary />
        <Button full onPress={() => console.log(data)}>
          <Text>Debug</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 5,
  }
})