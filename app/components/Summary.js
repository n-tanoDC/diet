import React from 'react';
import { CardItem, Card, Text, Button } from 'native-base';
import * as nutri from '../nutrients.json';
import AsyncStorage from '@react-native-community/async-storage';

export default (props) => {
  const { data } = props;

  let nutriData = nutri[0].nutriData;

  let lipids = nutriData.find(e => e.attr_id == 204)
  let carbs = nutriData.find(e => e.attr_id == 205)
  let fattyAcids = nutriData.find(e => e.attr_id == 606)
  let proteins = nutriData.find(e => e.attr_id == 203)

  let nutrients = [lipids, carbs, fattyAcids, proteins];

  const getTotalsPerNutrient = (nutrients, data) => {
    let totals = [];
    for (nutrient of nutrients) {
      let nutrientObjects = data.map(element => 
        element.full_nutrients.find(elementNutrient => 
          elementNutrient.attr_id == nutrient.attr_id))
      let total = 0;
      for (object of nutrientObjects) {
        total += object.value;
      }
      totals.push({ name: nutrient.formatted_name, amount: (Math.round(total)) + nutrient.unit })
    }
    return totals;
  }

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