const requestHeaders = {
  "x-app-id": "ff0ccea8",
  "x-app-key": "605660a17994344157a78f518a111eda",
  "x-remote-user-id": 0
}

export const fetchData = (input, callback, loading) => {
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