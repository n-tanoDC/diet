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
  const [loading, setLoading] = useState(false);
  
  useEffect(() => { console.log('useLayoutEffect'); readData(storageKey, setItems, setLoading) }, [isFocused])

  let renderedItems;
  
  if (loading) {
    renderedItems = <Spinner />
  } else {
    if (items) {
      renderedItems = items.map(item => <FoodItem key={item.tag_id} item={item} />)
    } else {
      renderedItems = (
      <CardItem>
        <Text>Aucun aliment ajouté.</Text>
      </CardItem>)
    }
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