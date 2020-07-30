import { Alert } from "react-native";
import NetInfo from "@react-native-community/netinfo";

const requestHeaders = {
  "x-app-id": "ff0ccea8",
  "x-app-key": "605660a17994344157a78f518a111eda",
}

export const fetchData = async (input, callback, loading) => {
    const connexion = await NetInfo.fetch()
    if (connexion.isConnected && connexion.isInternetReachable) {
      console.log("is connected");
      loading(true);
      fetch('https://trackapi.nutritionix.com/v2/search/instant?query=' + input + '&locale=fr_FR&detailed=true', {
        headers: requestHeaders
      })
        .then(res => res.json())
        .then(data => {
          callback(data.common);
          loading(false); 
        })
        .catch(err => {
          console.log(err);
          loading(false);
        })
    } else {
      Alert.alert("Pas de connexion internet");
    }
  
}