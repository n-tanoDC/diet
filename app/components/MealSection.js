import React from 'react';
import { Card, CardItem, Text, Body, Icon, Right, Button, Badge } from 'native-base';
import { StyleSheet } from 'react-native';

export default (props) => {

  return (
    <Card>
      <CardItem header bordered style={styles.cardHeader}>
        <Text>{props.title}</Text>
        <Right>
          <Badge primary>
            <Icon 
              onPress={() => props.navigate('Search')}
              type="MaterialIcons"
              name="add"
              style={styles.icon} />
          </Badge>
        </Right>
      </CardItem>
      <CardItem>
        <Text>Aucun aliment ajouté.</Text>
      </CardItem>
    </Card>
  )
}

const styles = StyleSheet.create({
  cardHeader: {
    justifyContent: "space-between",
  },
  icon: {
    fontSize: 15,
    color: "#fff",
    lineHeight: 20,
  },
})