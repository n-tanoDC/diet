import React from 'react';
import { CardItem, Text, Right, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

export default (props) => {
  const { item } = props;

  return (
    <CardItem style={styles.cardItemContainer}>
      <Text>{item.food_name}</Text>
      <Right>
        <Icon name="trash"/>
      </Right>
    </CardItem>
  )
}

const styles = StyleSheet.create({
  cardItemContainer: {
    justifyContent: "space-between",
  }
})