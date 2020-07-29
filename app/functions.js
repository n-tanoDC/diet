import AsyncStorage from '@react-native-community/async-storage';

export const readData = (key, callback, loading) => {
  loading(true)
  AsyncStorage.getItem(key)
  .then(res => JSON.parse(res))
  .then(data => {
    callback(data)
    loading(false)
  })
  .catch(err => {
    console.log(err);
    loading(false)
  });
}
  
export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (err) {
    console.log(err);
  }
}

export const addData = (key, value) => {
  let newData;
  AsyncStorage.getItem(key)
  .then(res => JSON.parse(res))
  .then(data => newData = data ? [value, ...data] : [value])
  .then(() => {
    newData = JSON.stringify(newData);
    AsyncStorage.setItem(key, newData);
  })
  .catch(err => {
    console.log(err);
  });
}

export const removeData = (key, value, success) => {
  let newData;
  AsyncStorage.getItem(key)
    .then(res => JSON.parse(res))
    .then(data => {
      const index = data.findIndex(element => element.food_name === value.food_name);
      newData = data;
      newData.splice(index, 1);
    })
  .then(() => {
    newData = JSON.stringify(newData);
    AsyncStorage.setItem(key, newData);
    success(true);
  })
  .catch(err => {
    console.log(err);
  });
}