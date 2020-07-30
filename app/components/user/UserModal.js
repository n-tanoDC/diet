import React, { useState, useEffect } from 'react';
import { Modal, StyleSheet, Switch } from 'react-native';
import { Text, Container, Card, CardItem, Right, Icon, Button, Input, Item, Label, Left, Body, Spinner } from 'native-base';

import { getUser } from '../../functions/storage';
import ModalContent from './ModalContent';

export default (props) => {
  useEffect(() => { getUser(setUserData, setLoadingData) }, [])

  const [userData, setUserData] = useState({});
  const [loadingData, setLoadingData] = useState(true);
    
  const { displayModal, modalDisplayed } = props;
  
  let content;

  if (loadingData) {
    content = (
      <CardItem style={{ flex: 1, justifyContent: "center" }}>
        <Spinner />
      </CardItem>
    )
  } else {
    content= (<ModalContent displayModal={displayModal} data={userData} setData={setUserData}/>)
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalDisplayed}
    >  
    <Container transparent style={styles.container}>
      <Card style={styles.card}>
        <CardItem header bordered style={styles.cardHeader}>
          <Text>Utilisateur</Text>
          <Right>
            <Button 
              small danger
              onPress={() => displayModal(false)}>
              <Icon name='close'/>
            </Button>
          </Right>
        </CardItem>
        {content}
      </Card>
    </Container>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff00',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    height: '100%',
    width: '100%',
    justifyContent: "space-between"
  },
  cardHeader: {
    justifyContent: "space-between"
  },
})