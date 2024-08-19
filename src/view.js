export const renderItems = (data) => {
  let resultado = " "

  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  for (let sitio of data) {
    const image=  "<img src= '"+sitio.imageUrl+"'>" ;
    resultado = resultado + "<li>" +image+ sitio.name + "<p>"+sitio.shortDescription+"</p>"+ "</li>";


  }
  return resultado;

};

