import * as nutrients from '../nutrients.json'

export const getTotalsPerNutrient = (nutrients, data) => {
  let totals = [];
  for (nutrient of nutrients) {
    let nutrientObjects = data.map(element => 
      element.full_nutrients.find(elementNutrient => 
        elementNutrient.attr_id == nutrient.attr_id))
    let total = 0;
    for (object of nutrientObjects) {
      total += object.value;
    }
    totals.push({ name: nutrient.formatted_name, amount: (Math.round(total)) + nutrient.unit })
  }
  return totals;
}

export const getNutriData = () => {
  let nutriData = nutrients[0].nutriData;

  return nutriData.filter(e => 
    e.attr_id == 204 || e.attr_id == 205 || e.attr_id == 606 || e.attr_id == 203)
}