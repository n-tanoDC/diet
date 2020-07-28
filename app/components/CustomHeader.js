import React from 'react';
import { Header, Left, Body, Title, Right, Button, Icon, Text } from 'native-base';

export default (props) => {
  const { title, left, navigation } = props;
  
  let leftElement;

  if (left) {
    switch (left) {
      case 'back':
        leftElement = (
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        );
        break;
        case 'home':
          leftElement = (
            <Button transparent>
              <Icon name="home" />
            </Button>
          )
    }
  }

  return (
    <Header>
      <Left>
        {leftElement}
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
      <Right />
    </Header>
  )
}