import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
const lista = document.querySelector("#root>ul");
const html = renderItems(data);
lista.innerHTML = html;
const departamentos = document.querySelector("#departamentos");
//console.log(departamentos);
const regiones = document.querySelector("#regiones");
//console.log(regiones);
const altitud = document.querySelector("#altitud");
//console.log(altitud);
//console.log(lista, renderItems(data), data);
//FILTRAR POR DEPARTAMENTO
//filtrar los datos
//const dataOficial = filterData(data, filterBy, value);
//a la constante de departamentos poner un evento change y dentro del evento filtro la data de la lina 20 y renderizar como la linea 5 y 6  con filter data 
departamentos.addEventListener('change', function (event) {
  const filterBy = "departamento";
  const selectedValue = event.target.value; // Obtiene el valor seleccionado
  const filteredData = filterData(data, filterBy, selectedValue); // Filtra los datos
  lista.innerHTML = renderItems(filteredData); // Renderiza los datos filtrados
})
//FILTAR POR REGIONES 
regiones.addEventListener('change',function(event){
  const filterBy="region";
  const selectedValue = event.target.value; // Obtiene el valor seleccionado
  const filteredData = filterData(data, filterBy, selectedValue); // Filtra los datos
  lista.innerHTML = renderItems(filteredData); // Renderiza los datos filtrados
})
//FILTAR POR ALTITUD 
altitud.addEventListener('change',function(event){
  const filterBy="altitud";
  const selectedValue = event.target.value; // Obtiene el valor seleccionado
  const filteredData = filterData(data, filterBy, selectedValue); // Filtra los datos
  lista.innerHTML = renderItems(filteredData); // Renderiza los datos filtrados
})
  