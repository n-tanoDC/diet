import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, ListItem, Text } from 'native-base'

import { addItem } from '../../functions/storage';

export default (props) => {
  const { meal, result } = props;

  const [added, setAdded] = useState(false);
  
  const renderIcon = (result) => {
    return added ? (<></>) : (
      <Icon 
        name="add-outline"
        onPress={() => addItem({ ...result, meal: meal }, setAdded)}
      />);
  }

  return (
    <ListItem style={styles.listItem}>
      <Text>{result.food_name}</Text>
      {renderIcon(result)}
    </ListItem>
  )
}

const styles = StyleSheet.create({
  listItem: {
    justifyContent: "space-between",
  }
})