// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export function filterData(data, filterBy, value) {
  console.log(data, filterBy, value);
  return data.filter(function (item) {
    console.log(item,item.facts[filterBy],value);
    return item.facts[filterBy] === value;
    

  });
}

export const anotherExample = () => {
  return [];
};
