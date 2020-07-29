import React from 'react';
import { CardItem, Card, Text } from 'native-base';

export default (props) => {
  return (
    <Card>
      <CardItem header bordered>
        <Text>Résumé</Text>
      </CardItem>
      <CardItem>
        <Text>Test</Text>
      </CardItem>
    </Card>
  )
}