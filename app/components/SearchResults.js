import React from 'react';
import { Image } from 'react-native';
import { List, ListItem, Button } from '@ui-kitten/components'; 

export default (props) => {

  const { results } = props;
  
  const renderItem = ({ item }) => (
    <ListItem
      title={item.food_name}
      accessoryLeft={() => <Image style={{ width: 50, height: 50 }} source={{ uri: item.photo.thumb }}/>}
      accessoryRight={() => <Button size='tiny'>Ajouter</Button>}
    />
  );

  return (
    <List 
      data={results}
      renderItem={renderItem}
      extraData={results}
    />
  )
}