import AsyncStorage from '@react-native-community/async-storage';

export const readData = (key, callback, loading) => {
  loading(true)
  AsyncStorage.getItem(key)
  .then(value => JSON.parse(value))
  .then(res => {
    callback(res)
    loading(false)
  })
  .catch(e => {
    console.log(e.message);
    loading(false)
  });
}
  
export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    Alert.alert(e.message);
    console.log(e.message);
  }
}