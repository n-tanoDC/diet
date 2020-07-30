import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Title, Right, Button, Icon } from 'native-base';

export default (props) => {
  const { title, displayModal } = props;

  return (
    <Header>
      <Body style={styles.body}>
        <Title>{title}</Title>
      </Body>
      <Right style={styles.right}>
        <Button transparent>
          <Icon 
            name="person-circle"
            style={{ fontSize: 32 }} 
            onPress={() => displayModal(true)}/>
        </Button>
      </Right>
    </Header>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start"
  },
  right: {
    flex: 1,
    justifyContent: "flex-end"
  }
})