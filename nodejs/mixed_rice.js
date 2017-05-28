'use strict';

function groupBy(myArray, field) {
  let groups = {};
  for (let i = 0; i < myArray.length; i++) {
    let groupName = myArray[i][field];
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(myArray[i]);
  }

  myArray = [];
  for (let groupName in groups) {
    myArray.push({group: groupName, data: groups[groupName]});
  }
  return myArray;
}

var mixedRice = [
{
      "id_food": 2309,
      "name": "Sweet & Sour Pork",
      "imageUrl": "http://apistage.cellihealth.com/images/media/657/176/132/9 sweet and sour pork.jpg",
      "category": "Pork",
      "category_position": 8,
      "nutrient_score": {
        "nutrient": {
          "1": {
            "Nutr_No": "203",
            "bioavailability": "1.00",
            "daily": "50.00",
            "nutrient": "Protein",
            "value": "13.80",
            "unit": "g",
            "actualintake": 13.8,
            "actualrequired": 6.225,
            "achieved": 1
          },
          "2": {
            "Nutr_No": "291",
            "bioavailability": "1.00",
            "daily": "25.00",
            "nutrient": "Fiber",
            "value": "2.80",
            "unit": "g",
            "actualintake": 2.8,
            "actualrequired": 3.1125,
            "achieved": 0.8995983935743
          },
          "3": {
            "Nutr_No": "301",
            "bioavailability": "1.00",
            "daily": "1000.00",
            "nutrient": "Calcium",
            "value": "15.00",
            "unit": "mg",
            "actualintake": 15,
            "actualrequired": 124.5,
            "achieved": 0.12048192771084
          },
          "4": {
            "Nutr_No": "303",
            "bioavailability": "1.00",
            "daily": "18.00",
            "nutrient": "Iron",
            "value": "1.10",
            "unit": "mg",
            "actualintake": 1.1,
            "actualrequired": 2.241,
            "achieved": 0.49085229808121
          },
          "5": {
            "Nutr_No": "306",
            "bioavailability": "1.00",
            "daily": "3500.00",
            "nutrient": "Potassium",
            "value": "151.00",
            "unit": "mg",
            "actualintake": 151,
            "actualrequired": 435.75,
            "achieved": 0.346528973035
          },
          "6": {
            "Nutr_No": "309",
            "bioavailability": "1.00",
            "daily": "15.00",
            "nutrient": "Zinc",
            "value": "1.10",
            "unit": "mg",
            "actualintake": 1.1,
            "actualrequired": 1.8675,
            "achieved": 0.58902275769746
          },
          "7": {
            "Nutr_No": "401",
            "bioavailability": "1.00",
            "daily": "60.00",
            "nutrient": "Vitamin C",
            "value": "4.00",
            "unit": "mg",
            "actualintake": 4,
            "actualrequired": 7.47,
            "achieved": 0.53547523427041
          },
          "8": {
            "Nutr_No": "404",
            "bioavailability": "1.00",
            "daily": "1.50",
            "nutrient": "Thiamin",
            "value": "0.33",
            "unit": "mg",
            "actualintake": 0.33,
            "actualrequired": 0.18675,
            "achieved": 1
          },
          "9": {
            "Nutr_No": "405",
            "bioavailability": "1.00",
            "daily": "1.70",
            "nutrient": "Riboflavin",
            "value": "0.14",
            "unit": "mg",
            "actualintake": 0.14,
            "actualrequired": 0.21165,
            "achieved": 0.66146940703992
          },
          "10": {
            "Nutr_No": "406",
            "bioavailability": "1.00",
            "daily": "20.00",
            "nutrient": "Niacin",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 2.49,
            "achieved": 0
          },
          "11": {
            "Nutr_No": "415",
            "bioavailability": "1.00",
            "daily": "2.00",
            "nutrient": "Vitamin B6",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 0.249,
            "achieved": 0
          },
          "12": {
            "Nutr_No": "435",
            "bioavailability": "1.00",
            "daily": "400.00",
            "nutrient": "Folate",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 49.8,
            "achieved": 0
          },
          "13": {
            "Nutr_No": "418",
            "bioavailability": "1.00",
            "daily": "6.00",
            "nutrient": "Vitamin B12",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 0.747,
            "achieved": 0
          },
          "14": {
            "Nutr_No": "318",
            "bioavailability": "1.00",
            "daily": "5000.00",
            "nutrient": "Vitamin A",
            "value": "23.00",
            "unit": "IU",
            "actualintake": 23,
            "actualrequired": 622.5,
            "achieved": 0.036947791164659
          },
          "15": {
            "Nutr_No": "323",
            "bioavailability": "1.00",
            "daily": "20.00",
            "nutrient": "Vitamin E",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 2.49,
            "achieved": 0
          },
          "16": {
            "Nutr_No": "324",
            "bioavailability": "1.00",
            "daily": "400.00",
            "nutrient": "Vitamin D",
            "value": "0.00",
            "unit": "IU",
            "actualintake": 0,
            "actualrequired": 49.8,
            "achieved": 0
          },
          "17": {
            "Nutr_No": "430",
            "bioavailability": "1.00",
            "daily": "80.00",
            "nutrient": "Vitamin K",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 9.96,
            "achieved": 0
          }
        },
        "score": 33.413981073964,
        "severity": "Critical",
        "id_severity": 1
      }
    },
    {
      "id_food": 2321,
      "name": "Fried Anchovies",
      "imageUrl": "http://apistage.cellihealth.com/images/media/675/176/132/9 ikan bilis.jpg",
      "category": "Fish & Seafood",
      "category_position": 5,
      "nutrient_score": {
        "nutrient": {
          "1": {
            "Nutr_No": "203",
            "bioavailability": "1.00",
            "daily": "50.00",
            "nutrient": "Protein",
            "value": "34.39",
            "unit": "g",
            "actualintake": 34.39,
            "actualrequired": 7.54,
            "achieved": 1
          },
          "2": {
            "Nutr_No": "291",
            "bioavailability": "1.00",
            "daily": "25.00",
            "nutrient": "Fiber",
            "value": "0.00",
            "unit": "g",
            "actualintake": 0,
            "actualrequired": 3.77,
            "achieved": 0
          },
          "3": {
            "Nutr_No": "301",
            "bioavailability": "1.00",
            "daily": "1000.00",
            "nutrient": "Calcium",
            "value": "384.80",
            "unit": "mg",
            "actualintake": 384.8,
            "actualrequired": 150.8,
            "achieved": 1
          },
          "4": {
            "Nutr_No": "303",
            "bioavailability": "1.00",
            "daily": "18.00",
            "nutrient": "Iron",
            "value": "1.56",
            "unit": "mg",
            "actualintake": 1.56,
            "actualrequired": 2.7144,
            "achieved": 0.57471264367816
          },
          "5": {
            "Nutr_No": "306",
            "bioavailability": "1.00",
            "daily": "3500.00",
            "nutrient": "Potassium",
            "value": "508.95",
            "unit": "mg",
            "actualintake": 508.95,
            "actualrequired": 527.8,
            "achieved": 0.96428571428571
          },
          "6": {
            "Nutr_No": "309",
            "bioavailability": "1.00",
            "daily": "15.00",
            "nutrient": "Zinc",
            "value": "2.08",
            "unit": "mg",
            "actualintake": 2.08,
            "actualrequired": 2.262,
            "achieved": 0.91954022988506
          },
          "7": {
            "Nutr_No": "401",
            "bioavailability": "1.00",
            "daily": "60.00",
            "nutrient": "Vitamin C",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 9.048,
            "achieved": 0
          },
          "8": {
            "Nutr_No": "404",
            "bioavailability": "1.00",
            "daily": "1.50",
            "nutrient": "Thiamin",
            "value": "0.13",
            "unit": "mg",
            "actualintake": 0.13,
            "actualrequired": 0.2262,
            "achieved": 0.57471264367816
          },
          "9": {
            "Nutr_No": "405",
            "bioavailability": "1.00",
            "daily": "1.70",
            "nutrient": "Riboflavin",
            "value": "0.14",
            "unit": "mg",
            "actualintake": 0.14,
            "actualrequired": 0.25636,
            "achieved": 0.54610703697925
          },
          "10": {
            "Nutr_No": "406",
            "bioavailability": "1.00",
            "daily": "20.00",
            "nutrient": "Niacin",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 3.016,
            "achieved": 0
          },
          "11": {
            "Nutr_No": "415",
            "bioavailability": "1.00",
            "daily": "2.00",
            "nutrient": "Vitamin B6",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 0.3016,
            "achieved": 0
          },
          "12": {
            "Nutr_No": "435",
            "bioavailability": "1.00",
            "daily": "400.00",
            "nutrient": "Folate",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 60.32,
            "achieved": 0
          },
          "13": {
            "Nutr_No": "418",
            "bioavailability": "1.00",
            "daily": "6.00",
            "nutrient": "Vitamin B12",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 0.9048,
            "achieved": 0
          },
          "14": {
            "Nutr_No": "318",
            "bioavailability": "1.00",
            "daily": "5000.00",
            "nutrient": "Vitamin A",
            "value": "0.00",
            "unit": "IU",
            "actualintake": 0,
            "actualrequired": 754,
            "achieved": 0
          },
          "15": {
            "Nutr_No": "323",
            "bioavailability": "1.00",
            "daily": "20.00",
            "nutrient": "Vitamin E",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 3.016,
            "achieved": 0
          },
          "16": {
            "Nutr_No": "324",
            "bioavailability": "1.00",
            "daily": "400.00",
            "nutrient": "Vitamin D",
            "value": "0.00",
            "unit": "IU",
            "actualintake": 0,
            "actualrequired": 60.32,
            "achieved": 0
          },
          "17": {
            "Nutr_No": "430",
            "bioavailability": "1.00",
            "daily": "80.00",
            "nutrient": "Vitamin K",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 12.064,
            "achieved": 0
          }
        },
        "score": 32.819754520626,
        "severity": "Critical",
        "id_severity": 1
      }
    },
    {
      "id_food": 2322,
      "name": "Fried Anchovies with Peanut",
      "imageUrl": "http://apistage.cellihealth.com/images/media/676/176/132/10 ikan bilis kacang.jpg",
      "category": "Fish & Seafood",
      "category_position": 5,
      "nutrient_score": {
        "nutrient": {
          "1": {
            "Nutr_No": "203",
            "bioavailability": "1.00",
            "daily": "50.00",
            "nutrient": "Protein",
            "value": "24.12",
            "unit": "g",
            "actualintake": 24.12,
            "actualrequired": 9.01875,
            "achieved": 1
          },
          "2": {
            "Nutr_No": "291",
            "bioavailability": "1.00",
            "daily": "25.00",
            "nutrient": "Fiber",
            "value": "3.58",
            "unit": "g",
            "actualintake": 3.58,
            "actualrequired": 4.509375,
            "achieved": 0.79390159390159
          },
          "3": {
            "Nutr_No": "301",
            "bioavailability": "1.00",
            "daily": "1000.00",
            "nutrient": "Calcium",
            "value": "313.95",
            "unit": "mg",
            "actualintake": 313.95,
            "actualrequired": 180.375,
            "achieved": 1
          },
          "4": {
            "Nutr_No": "303",
            "bioavailability": "1.00",
            "daily": "18.00",
            "nutrient": "Iron",
            "value": "3.45",
            "unit": "mg",
            "actualintake": 3.45,
            "actualrequired": 3.24675,
            "achieved": 1
          },
          "5": {
            "Nutr_No": "306",
            "bioavailability": "1.00",
            "daily": "3500.00",
            "nutrient": "Potassium",
            "value": "573.30",
            "unit": "mg",
            "actualintake": 573.3,
            "actualrequired": 631.3125,
            "achieved": 0.90810810810811
          },
          "6": {
            "Nutr_No": "309",
            "bioavailability": "1.00",
            "daily": "15.00",
            "nutrient": "Zinc",
            "value": "3.19",
            "unit": "mg",
            "actualintake": 3.19,
            "actualrequired": 2.705625,
            "achieved": 1
          },
          "7": {
            "Nutr_No": "401",
            "bioavailability": "1.00",
            "daily": "60.00",
            "nutrient": "Vitamin C",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 10.8225,
            "achieved": 0
          },
          "8": {
            "Nutr_No": "404",
            "bioavailability": "1.00",
            "daily": "1.50",
            "nutrient": "Thiamin",
            "value": "0.09",
            "unit": "mg",
            "actualintake": 0.09,
            "actualrequired": 0.2705625,
            "achieved": 0.33264033264033
          },
          "9": {
            "Nutr_No": "405",
            "bioavailability": "1.00",
            "daily": "1.70",
            "nutrient": "Riboflavin",
            "value": "0.18",
            "unit": "mg",
            "actualintake": 0.18,
            "actualrequired": 0.3066375,
            "achieved": 0.58701235171823
          },
          "10": {
            "Nutr_No": "406",
            "bioavailability": "1.00",
            "daily": "20.00",
            "nutrient": "Niacin",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 3.6075,
            "achieved": 0
          },
          "11": {
            "Nutr_No": "415",
            "bioavailability": "1.00",
            "daily": "2.00",
            "nutrient": "Vitamin B6",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 0.36075,
            "achieved": 0
          },
          "12": {
            "Nutr_No": "435",
            "bioavailability": "1.00",
            "daily": "400.00",
            "nutrient": "Folate",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 72.15,
            "achieved": 0
          },
          "13": {
            "Nutr_No": "418",
            "bioavailability": "1.00",
            "daily": "6.00",
            "nutrient": "Vitamin B12",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 1.08225,
            "achieved": 0
          },
          "14": {
            "Nutr_No": "318",
            "bioavailability": "1.00",
            "daily": "5000.00",
            "nutrient": "Vitamin A",
            "value": "0.00",
            "unit": "IU",
            "actualintake": 0,
            "actualrequired": 901.875,
            "achieved": 0
          },
          "15": {
            "Nutr_No": "323",
            "bioavailability": "1.00",
            "daily": "20.00",
            "nutrient": "Vitamin E",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 3.6075,
            "achieved": 0
          },
          "16": {
            "Nutr_No": "324",
            "bioavailability": "1.00",
            "daily": "400.00",
            "nutrient": "Vitamin D",
            "value": "0.00",
            "unit": "IU",
            "actualintake": 0,
            "actualrequired": 72.15,
            "achieved": 0
          },
          "17": {
            "Nutr_No": "430",
            "bioavailability": "1.00",
            "daily": "80.00",
            "nutrient": "Vitamin K",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 14.43,
            "achieved": 0
          }
        },
        "score": 38.950955213931,
        "severity": "Critical",
        "id_severity": 1
      }
    },
    {
      "id_food": 2323,
      "name": "Spicy Tamarind Fish",
      "imageUrl": "http://apistage.cellihealth.com/images/media/677/176/132/11 ikan assam pedas.jpg",
      "category": "Fish & Seafood",
      "category_position": 5,
      "nutrient_score": {
        "nutrient": {
          "1": {
            "Nutr_No": "203",
            "bioavailability": "1.00",
            "daily": "50.00",
            "nutrient": "Protein",
            "value": "18.45",
            "unit": "g",
            "actualintake": 18.45,
            "actualrequired": 2.7375,
            "achieved": 1
          },
          "2": {
            "Nutr_No": "291",
            "bioavailability": "1.00",
            "daily": "25.00",
            "nutrient": "Fiber",
            "value": "1.65",
            "unit": "g",
            "actualintake": 1.65,
            "actualrequired": 1.36875,
            "achieved": 1
          },
          "3": {
            "Nutr_No": "301",
            "bioavailability": "1.00",
            "daily": "1000.00",
            "nutrient": "Calcium",
            "value": "48.00",
            "unit": "mg",
            "actualintake": 48,
            "actualrequired": 54.75,
            "achieved": 0.87671232876712
          },
          "4": {
            "Nutr_No": "303",
            "bioavailability": "1.00",
            "daily": "18.00",
            "nutrient": "Iron",
            "value": "0.60",
            "unit": "mg",
            "actualintake": 0.6,
            "actualrequired": 0.9855,
            "achieved": 0.60882800608828
          },
          "5": {
            "Nutr_No": "306",
            "bioavailability": "1.00",
            "daily": "3500.00",
            "nutrient": "Potassium",
            "value": "318.00",
            "unit": "mg",
            "actualintake": 318,
            "actualrequired": 191.625,
            "achieved": 1
          },
          "6": {
            "Nutr_No": "309",
            "bioavailability": "1.00",
            "daily": "15.00",
            "nutrient": "Zinc",
            "value": "0.90",
            "unit": "mg",
            "actualintake": 0.9,
            "actualrequired": 0.82125,
            "achieved": 1
          },
          "7": {
            "Nutr_No": "401",
            "bioavailability": "1.00",
            "daily": "60.00",
            "nutrient": "Vitamin C",
            "value": "3.00",
            "unit": "mg",
            "actualintake": 3,
            "actualrequired": 3.285,
            "achieved": 0.91324200913242
          },
          "8": {
            "Nutr_No": "404",
            "bioavailability": "1.00",
            "daily": "1.50",
            "nutrient": "Thiamin",
            "value": "0.06",
            "unit": "mg",
            "actualintake": 0.06,
            "actualrequired": 0.082125,
            "achieved": 0.73059360730594
          },
          "9": {
            "Nutr_No": "405",
            "bioavailability": "1.00",
            "daily": "1.70",
            "nutrient": "Riboflavin",
            "value": "0.06",
            "unit": "mg",
            "actualintake": 0.06,
            "actualrequired": 0.093075,
            "achieved": 0.64464141821112
          },
          "10": {
            "Nutr_No": "406",
            "bioavailability": "1.00",
            "daily": "20.00",
            "nutrient": "Niacin",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 1.095,
            "achieved": 0
          },
          "11": {
            "Nutr_No": "415",
            "bioavailability": "1.00",
            "daily": "2.00",
            "nutrient": "Vitamin B6",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 0.1095,
            "achieved": 0
          },
          "12": {
            "Nutr_No": "435",
            "bioavailability": "1.00",
            "daily": "400.00",
            "nutrient": "Folate",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 21.9,
            "achieved": 0
          },
          "13": {
            "Nutr_No": "418",
            "bioavailability": "1.00",
            "daily": "6.00",
            "nutrient": "Vitamin B12",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 0.3285,
            "achieved": 0
          },
          "14": {
            "Nutr_No": "318",
            "bioavailability": "1.00",
            "daily": "5000.00",
            "nutrient": "Vitamin A",
            "value": "276.00",
            "unit": "IU",
            "actualintake": 276,
            "actualrequired": 273.75,
            "achieved": 1
          },
          "15": {
            "Nutr_No": "323",
            "bioavailability": "1.00",
            "daily": "20.00",
            "nutrient": "Vitamin E",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 1.095,
            "achieved": 0
          },
          "16": {
            "Nutr_No": "324",
            "bioavailability": "1.00",
            "daily": "400.00",
            "nutrient": "Vitamin D",
            "value": "0.00",
            "unit": "IU",
            "actualintake": 0,
            "actualrequired": 21.9,
            "achieved": 0
          },
          "17": {
            "Nutr_No": "430",
            "bioavailability": "1.00",
            "daily": "80.00",
            "nutrient": "Vitamin K",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 4.38,
            "achieved": 0
          }
        },
        "score": 51.61186687944,
        "severity": "Bad",
        "id_severity": 2
      }
    },
    {
      "id_food": 2324,
      "name": "Chilli Gravy Mackerel",
      "imageUrl": "http://apistage.cellihealth.com/images/media/678/176/132/12 mackerel sambal.jpg",
      "category": "Fish & Seafood",
      "category_position": 5,
      "nutrient_score": {
        "nutrient": {
          "1": {
            "Nutr_No": "203",
            "bioavailability": "1.00",
            "daily": "50.00",
            "nutrient": "Protein",
            "value": "17.20",
            "unit": "g",
            "actualintake": 17.2,
            "actualrequired": 3.85,
            "achieved": 1
          },
          "2": {
            "Nutr_No": "291",
            "bioavailability": "1.00",
            "daily": "25.00",
            "nutrient": "Fiber",
            "value": "3.00",
            "unit": "g",
            "actualintake": 3,
            "actualrequired": 1.925,
            "achieved": 1
          },
          "3": {
            "Nutr_No": "301",
            "bioavailability": "1.00",
            "daily": "1000.00",
            "nutrient": "Calcium",
            "value": "74.00",
            "unit": "mg",
            "actualintake": 74,
            "actualrequired": 77,
            "achieved": 0.96103896103896
          },
          "4": {
            "Nutr_No": "303",
            "bioavailability": "1.00",
            "daily": "18.00",
            "nutrient": "Iron",
            "value": "1.80",
            "unit": "mg",
            "actualintake": 1.8,
            "actualrequired": 1.386,
            "achieved": 1
          },
          "5": {
            "Nutr_No": "306",
            "bioavailability": "1.00",
            "daily": "3500.00",
            "nutrient": "Potassium",
            "value": "362.00",
            "unit": "mg",
            "actualintake": 362,
            "actualrequired": 269.5,
            "achieved": 1
          },
          "6": {
            "Nutr_No": "309",
            "bioavailability": "1.00",
            "daily": "15.00",
            "nutrient": "Zinc",
            "value": "1.60",
            "unit": "mg",
            "actualintake": 1.6,
            "actualrequired": 1.155,
            "achieved": 1
          },
          "7": {
            "Nutr_No": "401",
            "bioavailability": "1.00",
            "daily": "60.00",
            "nutrient": "Vitamin C",
            "value": "2.00",
            "unit": "mg",
            "actualintake": 2,
            "actualrequired": 4.62,
            "achieved": 0.43290043290043
          },
          "8": {
            "Nutr_No": "404",
            "bioavailability": "1.00",
            "daily": "1.50",
            "nutrient": "Thiamin",
            "value": "0.28",
            "unit": "mg",
            "actualintake": 0.28,
            "actualrequired": 0.1155,
            "achieved": 1
          },
          "9": {
            "Nutr_No": "405",
            "bioavailability": "1.00",
            "daily": "1.70",
            "nutrient": "Riboflavin",
            "value": "0.20",
            "unit": "mg",
            "actualintake": 0.2,
            "actualrequired": 0.1309,
            "achieved": 1
          },
          "10": {
            "Nutr_No": "406",
            "bioavailability": "1.00",
            "daily": "20.00",
            "nutrient": "Niacin",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 1.54,
            "achieved": 0
          },
          "11": {
            "Nutr_No": "415",
            "bioavailability": "1.00",
            "daily": "2.00",
            "nutrient": "Vitamin B6",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 0.154,
            "achieved": 0
          },
          "12": {
            "Nutr_No": "435",
            "bioavailability": "1.00",
            "daily": "400.00",
            "nutrient": "Folate",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 30.8,
            "achieved": 0
          },
          "13": {
            "Nutr_No": "418",
            "bioavailability": "1.00",
            "daily": "6.00",
            "nutrient": "Vitamin B12",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 0.462,
            "achieved": 0
          },
          "14": {
            "Nutr_No": "318",
            "bioavailability": "1.00",
            "daily": "5000.00",
            "nutrient": "Vitamin A",
            "value": "208.00",
            "unit": "IU",
            "actualintake": 208,
            "actualrequired": 385,
            "achieved": 0.54025974025974
          },
          "15": {
            "Nutr_No": "323",
            "bioavailability": "1.00",
            "daily": "20.00",
            "nutrient": "Vitamin E",
            "value": "0.00",
            "unit": "mg",
            "actualintake": 0,
            "actualrequired": 1.54,
            "achieved": 0
          },
          "16": {
            "Nutr_No": "324",
            "bioavailability": "1.00",
            "daily": "400.00",
            "nutrient": "Vitamin D",
            "value": "0.00",
            "unit": "IU",
            "actualintake": 0,
            "actualrequired": 30.8,
            "achieved": 0
          },
          "17": {
            "Nutr_No": "430",
            "bioavailability": "1.00",
            "daily": "80.00",
            "nutrient": "Vitamin K",
            "value": "0.00",
            "unit": "µg",
            "actualintake": 0,
            "actualrequired": 6.16,
            "achieved": 0
          }
        },
        "score": 52.554112554113,
        "severity": "Bad",
        "id_severity": 2
      }
    },
];
const results = groupBy(mixedRice, 'category');
console.log('------------------------------');
console.log('results: ', results);
console.log('------------------------------');
console.log('');
console.log('');
console.log('');
console.log('-----------Try to Map----------');
console.log('map results: ');
results.map((val, i) => {
  console.log('group: ', val.group);
  console.log('data: ', val.data);
});
console.log('------------------------------');

