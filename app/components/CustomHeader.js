import React from 'react';
import { Header, Left, Body, Title, Right, Button, Icon, Text, Subtitle } from 'native-base';

export default (props) => {
  const { title, left, subtitle, navigation } = props;
  
  let leftElement, renderedSubtitle;

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

  if (subtitle) {
    renderedSubtitle = <Subtitle>{subtitle}</Subtitle>
  }

  return (
    <Header>
      <Left style={{ flex: 0.6 }}>
        {leftElement}
      </Left>
      <Body style={{ flex: 2 }}>
        <Title>{title}</Title>
        {renderedSubtitle}
      </Body>
      <Right />
    </Header>
  )
}