import React from 'react';
import { CardItem, Text, Right, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import { removeItem } from '../functions/storage';

export default (props) => {
  const { item, deleted } = props;
  
  return (
    <CardItem style={styles.cardItemContainer}>
      <Text>{item.food_name}</Text>
      <Right>
        <Icon
          name="trash"
          onPress={() => removeItem(item, deleted)} />
      </Right>
    </CardItem>
  )
}

const styles = StyleSheet.create({
  cardItemContainer: {
    justifyContent: "space-between",
  }
})