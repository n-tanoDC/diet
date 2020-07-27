import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Icon } from '@ui-kitten/components';

export default (props) => {

  const Header = (cardProps) => (
    <View {...cardProps} style={[cardProps.style, styles.header]}>
      <Text category="h6">
        {props.title}
      </Text>
      <Icon
        name='plus-circle-outline'
        fill='#1c54ff'
        style={styles.icon}
        onPress={() => props.navigate('Search')} />
    </View>
  )
  return (
    <Card style={styles.card} header={Header}>
      <Text>Aucun aliment ajouté.</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 10
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
  }
})