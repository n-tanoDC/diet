import React from 'react';
import { CardItem, Card, Text, Button } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import { getTotalsPerNutrient, getNutriData } from '../functions/nutrients';

export default (props) => {
  const { data } = props;
  const nutrients = getNutriData();
  
  let renderedTotals;
    
  if (data) {
    const totals = getTotalsPerNutrient(nutrients, data)
    renderedTotals = totals.map((total, index) => (
      <CardItem key={index}>
        <Text>{total.name} : {total.amount}</Text>
      </CardItem>
    ))
  }
  
  return (
    <Card>
      <CardItem header bordered>
        <Text>Résumé</Text>
      </CardItem>
      {renderedTotals}
      <Button full onPress={() => AsyncStorage.clear()}>
        <Text>Debug</Text>
      </Button>
    </Card>
  )
}