import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Icon, ListItem, Text, Badge, Left, Card, CardItem, Right } from 'native-base'

import { addItem } from '../../functions/storage';

export default (props) => {
  const { meal, result } = props;

  const [added, setAdded] = useState(false);
  
  const renderIcon = (result) => {
    return added ? (
      <Badge success>
        <Icon 
          type="MaterialIcons"
          name="check"
          style={styles.icon}
          />
      </Badge>) : (
      <Badge warning>
        <Icon 
          onPress={() => addItem({ ...result, meal: meal }, setAdded)}
          type="MaterialIcons"
          name="add"
          style={styles.icon}
          />
      </Badge>);
  }

  return (
    <ListItem noIndent={false} style={styles.listItem}>
      <Card style={styles.card}>
        <CardItem header>
          <Left>
            <Image source={{ uri: result.photo.thumb }} style={styles.img} />
            <Text>{result.food_name}</Text>
          </Left>
          <Right>
            {renderIcon(result)}
          </Right>
        </CardItem>
      </Card>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 15,
    color: "#fff",
    lineHeight: 20
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
  card: {
    flexDirection: "row",
  },
  cardItem: {
    flexDirection: "row"
  }
})