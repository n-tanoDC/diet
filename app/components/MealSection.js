import React, { useState, useEffect } from 'react';
import { Card, CardItem, Text, Icon, Right, Badge, Spinner } from 'native-base';
import { StyleSheet } from 'react-native';
import FoodItem from './FoodItem';
import { readData } from '../functions';
import { useIsFocused } from "@react-navigation/native";

export default (props) => {
  const { storageKey, title, navigate} = props;
  const isFocused = useIsFocused();

  const [items, setItems] = useState([]);
  
  useEffect(() => { readData(storageKey, setItems) }, [isFocused])

  let renderedItems;
  
  if (items) {
    renderedItems = items.filter(item => item.meal === title)
      .map(item => <FoodItem key={item.food_name} storageKey={storageKey} item={item} />)
  } else {
    renderedItems = (<></>)
  }

  return (
    <Card>
      <CardItem header bordered style={styles.cardHeader}>
        <Text>{title}</Text>
        <Right>
          <Badge primary>
            <Icon 
              onPress={() => navigate('Search', { subtitle: title, storageKey: storageKey })}
              type="MaterialIcons"
              name="add"
              style={styles.icon} />
          </Badge>
        </Right>
      </CardItem>
      {renderedItems}
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