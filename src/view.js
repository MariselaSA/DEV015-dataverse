export const renderItems = (data) => {
  return data.map(sitio => `
        <li class="li" itemtype="tarjeta" itemscope>
      <img src="${sitio.imageUrl}" alt="${sitio.name}">
      <p>${sitio.name}</p>
      <p>${sitio.shortDescription}</p>
      <p>${sitio.facts.departamento}</p>
    </li>    
  `).join('');
};
