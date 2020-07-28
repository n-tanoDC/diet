import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card, Icon } from '@ui-kitten/components';

export default (props) => {

  const Header = (cardProps) => (
    <View style={[ cardProps.style, styles.header ]}>
      <Text style={styles.headerText} category="h6">
        {props.title}
      </Text>
      <Icon
        name='plus-circle'
        fill='#fff'
        style={styles.icon}
        onPress={() => props.navigate('Search')} />
    </View>
  )
  return (
    <Card style={{ margin: 10 }} header={Header}>
      <Text>Aucun aliment ajouté.</Text>
    </Card>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#585EF3"
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  icon: {
    height: 30,
    width: 30
  }
})