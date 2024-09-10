import { filterData,sortData} from '../src/dataFunctions.js';
import { data as fakeData } from '../test/data.js';

console.log(fakeData);

describe('filterData', () => {
  it('debe filtrar el sitio turístico correctamente por departamento', () => {
    const resultfilterData = filterData(fakeData, 'departamento', 'Cusco');
    expect(resultfilterData).toEqual(
      [{


        id: "machu-picchu",
        name: "Machu Picchu",
        shortDescription: "Ciudadela inca famosa.",
        description: "Machu Picchu, en Cusco, es una antigua ciudadela inca situada en la cima de una montaña, conocida mundialmente por su impresionante arquitectura y vistas.",
        imageUrl: "https://th.bing.com/th/id/OIG1.Dq.kGajiEsSHdZVqWtmn?w=1024&h=1024&rs=1&pid=ImgDetMain",
        facts: {
          region: "sierra",
          altitud: "2430 m",
          departamento: "Cusco",

        },

      }]
    )

  })
})
describe('filterData', () => {
  it('debe filtrar datos por departamento', () => {
    const resultfilterData = filterData(fakeData, 'departamento', 'Ancash');
    expect(resultfilterData[0].name).toBe('Parque Nacional Huascarán');

  })
})

describe('filterData', () => {
  it('debe filtrar los sitios turísticos  por region', () => {
    const resultfilterData = filterData(fakeData, 'region', 'sierra');
    expect(resultfilterData[3].facts.region).toBe('sierra')

  })
})

describe('sortData', () => {
  
  it('Debe mostrarme en forma ascendente los sitios turisticos por departamento', () => {
    const resultsortData =sortData(fakeData,'departamento','asc')
    expect(resultsortData[0].facts.departamento).toBe('Ancash');
    expect(resultsortData[1].facts.departamento).toBe('Cusco');
    expect(resultsortData[2].facts.departamento).toBe('Huánuco');
    expect(resultsortData[3].facts.departamento).toBe('Junín');
  });
});
describe('sortData', () => {
  
  it('Debe mostrarme en forma descendente los sitios turisticos por departamento', () => {
    const resultsortData =sortData(fakeData,'departamento','desc')
    expect(resultsortData[0].facts.departamento).toBe('Junín');
    expect(resultsortData[1].facts.departamento).toBe('Huánuco');
    expect(resultsortData[2].facts.departamento).toBe('Cusco');
    expect(resultsortData[3].facts.departamento).toBe('Ancash');
  });
});
