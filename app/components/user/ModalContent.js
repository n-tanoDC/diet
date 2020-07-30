import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, CardItem, Icon, Button, Input, Item, Label} from 'native-base';
import { saveUser } from '../../functions/storage';

export default (props) => {
  const { data, setData, displayModal } = props;

  const [age, setAge] = useState(data.age)
  const [size, setSize] = useState(data.size)
  const [weight, setWeight] = useState(data.weight)
  const [gender, setGender] = useState(data.gender)

  return (
    <>
      <CardItem>
        <Item fixedLabel>
          <Label>Age</Label>
          <Input 
            style={styles.input}
            keyboardType="number-pad"
            value={age}
            onChangeText={input => setAge(input)} />
        </Item>
      </CardItem>
      <CardItem>
        <Item fixedLabel>
          <Label>Poids (en kg)</Label>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            value={weight}
            onChangeText={input => setWeight(input)} />
        </Item>
      </CardItem>

      <CardItem>
        <Item fixedLabel>
          <Label style={styles.label}>Taille (en cm)</Label>
          <Input 
            style={styles.input}
            keyboardType="number-pad"
            value={size}
            onChangeText={input => setSize(input)} />
        </Item>
      </CardItem>

      <CardItem style={styles.cardItem}>
        <Button iconRight transparent={gender !== 'male' ? true : false} onPress={() => setGender('male')}>
          <Text>Homme</Text>
          <Icon name="male"/>
        </Button>
        <Button iconLeft transparent={gender !== 'female' ? true : false} onPress={() => setGender('female')}>
          <Icon name="female"/>
          <Text>Femme</Text>
        </Button>
      </CardItem>

      <Button
        full success iconLeft
        onPress={() => {
          saveUser({ age: age, size: size, weight: weight, gender: gender}, displayModal, setData)}
        }>
        <Icon name="checkmark-circle" />
        <Text> Enregistrer</Text>
      </Button>
    </>
  )
}

const styles = StyleSheet.create({
  cardItem: {
    justifyContent: "space-around"  
  }, 
  label: {
    flex: 1
  },
  input: {
    flex: 1,
    textAlign: "right",
    width: '100%'
  }
})