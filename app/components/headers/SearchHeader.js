import React from 'react';
import { Header, Left, Body, Title, Right, Button, Icon, Subtitle } from 'native-base';

export default (props) => {
  const { title, subtitle, navigation } = props;

  return (
    <Header>
      <Left style={{ flex: 0.6}}>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body style={{ flex: 3 }}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Body>
      <Right />
    </Header>
  )
}