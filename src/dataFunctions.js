// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export function filterData(data, filterBy, value) {
  //console.log(data, filterBy, value);
  return data.filter(function (item) {
    //console.log(item,item.facts[filterBy],value);
    return item.facts[filterBy] === value;
    

  });
}
export function sortData(data, sortBy, sortOrder) {
  return data.sort(function (a, b) {
    if (sortOrder === 'asc') {
      return a.facts[sortBy] > b.facts[sortBy] ? 1 : -1;
    } else {
      return a.facts[sortBy] < b.facts[sortBy] ? 1 : -1;
    }
  });
}

export const anotherExample = () => {
  return [];
};
