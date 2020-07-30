import AsyncStorage from '@react-native-community/async-storage';

const FOOD_KEY = "@save-item";
const USER_KEY = "@save-user";

export const clearItems = (callback) => {
  let emptyValue = JSON.stringify([]);
  AsyncStorage.setItem(FOOD_KEY, emptyValue)
    .then(() => callback([]))
}

export const readItems = (callback) => {
  AsyncStorage.getItem(FOOD_KEY)
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
  AsyncStorage.getItem(FOOD_KEY)
  .then(res => JSON.parse(res))
  .then(data => newData = data ? [value, ...data] : [value])
  .then(() => {
    newData = JSON.stringify(newData);
    AsyncStorage.setItem(FOOD_KEY, newData);
    setAdded(true);
  })
  .catch(err => {
    console.log(err);
  });
}

export const removeItem = (value, deleted) => {
  let newData;
  AsyncStorage.getItem(FOOD_KEY)
    .then(res => JSON.parse(res))
    .then(data => {
      const index = data.findIndex(element => element.food_name === value.food_name);
      newData = data;
      newData.splice(index, 1);
    })
  .then(() => {
    newData = JSON.stringify(newData);
    AsyncStorage.setItem(FOOD_KEY, newData);
    deleted(true)
  })
  .catch(err => {
    console.log(err);
  });
}

export const saveUser = (value, displayModal, resetUser) => {
  resetUser(value);
  const userValue = JSON.stringify(value);
  AsyncStorage.setItem(USER_KEY, userValue)
    .then(() => displayModal(false))
}

export const getUser = (callback, loading) => {
  loading(true)
  AsyncStorage.getItem(USER_KEY)
    .then(res => JSON.parse(res))
    .then(data => callback(data))
    .then(() => loading(false))
    .catch(err => {
      console.log(err);
    });
}