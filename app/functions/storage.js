import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_KEY = "@save-item"

export const clearItems = (callback) => {
  let emptyValue = JSON.stringify([]);
  AsyncStorage.setItem(STORAGE_KEY, emptyValue)
    .then(() => callback([]))
}

export const readItems = (callback) => {
  AsyncStorage.getItem(STORAGE_KEY)
  .then(res => JSON.parse(res))
  .then(data => {
    callback(data)
  })
  .catch(err => {
    console.log(err);
  });
}

export const addItem = (value, setAdded) => {
  let newData;
  AsyncStorage.getItem(STORAGE_KEY)
  .then(res => JSON.parse(res))
  .then(data => newData = data ? [value, ...data] : [value])
  .then(() => {
    newData = JSON.stringify(newData);
    AsyncStorage.setItem(STORAGE_KEY, newData);
    setAdded(true);
  })
  .catch(err => {
    console.log(err);
  });
}

export const removeItem = (value, deleted) => {
  let newData;
  AsyncStorage.getItem(STORAGE_KEY)
    .then(res => JSON.parse(res))
    .then(data => {
      const index = data.findIndex(element => element.food_name === value.food_name);
      newData = data;
      newData.splice(index, 1);
    })
  .then(() => {
    newData = JSON.stringify(newData);
    AsyncStorage.setItem(STORAGE_KEY, newData);
    deleted(true)
  })
  .catch(err => {
    console.log(err);
  });
}