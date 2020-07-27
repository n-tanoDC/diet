import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Icon } from '@ui-kitten/components';

export default (props) => {

  const Header = (cardProps) => (
    <View {...cardProps} style={[styles.header, cardProps.style]}>
      <Text category="h6">
        {props.title}
      </Text>
      <Icon
        name='plus-circle'
        fill='grey'
        style={styles.icon}
        onPress={() => props.navigate('Search')} />
    </View>
  )
  return (
    <Card styles={styles.card} header={Header}>
      <Text>Aucun aliment ajouté.</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 2
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  icon: {
    width: 40,
    height: 40,
  }
})