import React from 'react';
import { Card, CardItem, Text, Icon, Right, Badge } from 'native-base';
import { StyleSheet } from 'react-native';
import FoodItem from './FoodItem';

export default (props) => {
  const { storageKey, items, title, navigate} = props;  

  let renderedItems;
  
  if (items) {
    renderedItems = items.filter(element => element.meal === title)
      .map(item => (
      <FoodItem
        key={item.food_name}
        storageKey={storageKey}
        item={item}
      />))
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