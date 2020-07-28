import React from 'react';
import { Card, CardItem, Text, Body } from 'native-base';

export default (props) => {

  return (
    <Card>
      <CardItem header bordered>
        <Text>{props.title}</Text>
      </CardItem>
      <CardItem>
        <Body>
          <Text>Aucun aliment ajouté.</Text>
        </Body>
      </CardItem>
    </Card>
  )
}