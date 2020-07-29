import AsyncStorage from '@react-native-community/async-storage';

// API

const requestHeaders = {
  "x-app-id": "ff0ccea8",
  "x-app-key": "605660a17994344157a78f518a111eda",
  "x-remote-user-id": 0
}

export const getMeals = (input, callback, loading) => {
  loading(true)
  fetch('https://trackapi.nutritionix.com/v2/search/instant?query=' + input + '&locale=fr_FR&detailed=true', {
    headers: requestHeaders
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      callback(data.common);
      loading(false); 
    })
    .catch(err => {
      console.log(err)
      loading(false);
    })
}

// AsyncStorage

export const readData = (key, callback) => {
  AsyncStorage.getItem(key)
  .then(res => JSON.parse(res))
  .then(data => {
    callback(data)
  })
  .catch(err => {
    console.log(err);
  });
}

export const addData = (key, value, meal) => {
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