const fs = require('fs');
const { DOMParser } = require('xmldom');
const R = require('ramda');

const { isValid, elementsToArray, getGitHubProject, contentOfAdded, contentOfUpdated, getAppInfo} = require('./xmlfilter');

// efetua o processamento do xml e armazena a estrutura no objeto 'document'
const document = new DOMParser().parseFromString(fs.readFileSync('res/f-droid.xml', 'utf-8'));

const isAddedAfter2000AndUpdatedAfter2020 = isValid(R.__, 2000, 2020);

const addedApps = elementsToArray(document.getElementsByTagName('application'))
    .filter(isAddedAfter2000AndUpdatedAfter2020)
    .map(getAppInfo);

console.log(addedApps.join('\n'));



//RESULUÇÃO Anterior - cria objetos dentro de um array
// const isAddedAfter2000AndUpdatedAfter2020 = isValid(R.__, 2000, 2020);      

// const addedApps = elementsToArray(document.getElementsByTagName('application'))
//     .filter(isAddedAfter2000AndUpdatedAfter2020)
//     .map(getGitHubProject);

// const datas = elementsToArray(document.getElementsByTagName('application'))
//     .filter(isAddedAfter2000AndUpdatedAfter2020)
//     .map(contentOfAdded);

// const att = elementsToArray(document.getElementsByTagName('application'))
//     .filter(isAddedAfter2000AndUpdatedAfter2020)
//     .map(contentOfUpdated);

// const result = [];

// function results(array0, array1, array2, array3){

//     for(var i = 0; i < array3.length; i++ ){

//         let data = {
//             nome: array1[i],
//             Inclusao: array2[i],
//             Ultima_Atualizacao: array3[i]
//         }
//         array0[i] = data;                    
//     }
// }
// results(result, addedApps, datas, att);
// console.log(result);



    
 
