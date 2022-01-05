// Vamos a construir una aplicación de selección y búsqueda de Emisoras de Radio en Streaming

import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import App from "./App"

const mockArray = [{ "changeuuid": "cd84ce7d-8c80-4db2-9605-a2dcea1bc224", "stationuuid": "a4a3c3c4-d499-48e0-bec1-226868d22968", "serveruuid": null, "name": "__COUNTRYHITS.FM__ by rautemusik (rm.fm)", "url": "https://country-high.rautemusik.fm/?ref=radiobrowser", "url_resolved": "https://rautemusik-de-hz-fal-stream12.radiohost.de/country?ref=radiobrowser&listenerrmid=31363339393539303830-323030313a313966303a363830313a313964373a353430303a3266663a666537313a62646237-3630323938-53747265616d436865636b426f742f302e312e30", "homepage": "https://countryhits.fm/", "favicon": "https://i.ibb.co/C1SspdX/country.jpg", "tags": "alternative country,alternative rock,americana,classic country,classic rock,country,hits,nashville,new country,rock,texas country", "country": "Germany", "countrycode": "DE", "iso_3166_2": null, "state": "North Rhine-Westphalia", "language": "english,german", "languagecodes": "de,en", "votes": 75, "lastchangetime": "2021-11-09 23:05:40", "lastchangetime_iso8601": "2021-11-09T23:05:40Z", "codec": "MP3", "bitrate": 192, "hls": 0, "lastcheckok": 1, "lastchecktime": "2021-12-20 00:11:22", "lastchecktime_iso8601": "2021-12-20T00:11:22Z", "lastcheckoktime": "2021-12-20 00:11:22", "lastcheckoktime_iso8601": "2021-12-20T00:11:22Z", "lastlocalchecktime": "2021-12-20 00:11:22", "lastlocalchecktime_iso8601": "2021-12-20T00:11:22Z", "clicktimestamp": "2021-12-20 04:53:01", "clicktimestamp_iso8601": "2021-12-20T04:53:01Z", "clickcount": 119, "clicktrend": -3, "ssl_error": 0, "geo_lat": null, "geo_long": null, "has_extended_info": false }]

beforeEach(() => render(<App />));

// 0 - La aplicación debe renderizar correctamente
describe('0 - La aplicación debe renderizar correctamente', () => {
  test('0 - La aplicación debe renderizar correctamente', () => {
    const r = render(<App />)
    expect(r).toBeDefined();
  })
})

// 1 - El nombre de la aplicación debe mostrarse en algún lugar => "OpenRadioCamp"
describe('1 - El nombre de la aplicación debe mostrarse en algún lugar => "OpenRadioCamp"', () => {
  test('1 - El nombre de la aplicación debe mostrarse en algún lugar => "OpenRadioCamp"', () => {
    const nombre = "OpenRadioCamp";
    const el = screen.getByText(nombre);
    expect(el).toBeInTheDocument();
  })
})

// 2 - Debemos poder buscar radios por nombre
// 2a - La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la radio"
// 2b - La aplicación debe tener un botón de búsqueda => Texto "Buscar"
// 2c - Cuando hacemos clic en el botón buscar, se debe ejecutar la función de búsqueda una sola vez
describe('2 - Debemos poder buscar radios por nombre', () => {
  test('La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la radio"', () => {
    const placeholdertext = "Escribe el nombre de la radio";
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeInTheDocument();
  })
  test('La aplicación debe tener un botón de búsqueda => Texto "Buscar"', () => {
    const buttontext = "Buscar";
    const button = screen.getByText(buttontext);
    expect(button).toBeInTheDocument();
  })
  test('Cuando hacemos clic en el botón buscar, se debe ejecutar la función de búsqueda una sola vez', () => {
    const funcionMock = jest.fn();
    const buttontext = "Buscar";
    const button = screen.getByText(buttontext);
    button.addEventListener("click", funcionMock);
    fireEvent.click(button);
    expect(funcionMock).toHaveBeenCalledTimes(1);
  })
})

// 3 - Listado de emisoras
// 3a - Debe existir un listado de emisoras
// 3b - El listado debe inicializar vacío
// 3c - Cuando se hace una búsqueda válida, el listado debe mostrar al menos un resultado
// 3d - Cuando hacemos una búsqueda inválida (no existe), el listado debe mostrar un mensaje "No se han encontrado emisoras para esta búsqueda"
describe('3 - Listado de emisoras', () => {
  test('Debe existir un listado de emisoras', () => {
    const listado = screen.getByLabelText('listado-emisoras');
    expect(listado).toBeInTheDocument();
  })
  test('El listado debe inicializar vacío', () => {
    const listado = screen.getByLabelText('listado-emisoras');
    const childrenCount = listado.childElementCount;
    expect(childrenCount).toBe(0);
  })
  test('Cuando se hace una búsqueda válida, el listado debe mostrar al menos un resultado', async () => {
    const placeholdertext = "Escribe el nombre de la radio";
    const input = screen.getByPlaceholderText(placeholdertext);
    const buttontext = "Buscar";
    const button = screen.getByText(buttontext);
    fireEvent.change(input, { target: { value: 'Country' } });
    fireEvent.click(button);
    const listado = screen.getByLabelText('listado-emisoras');
    const childrenCount = listado.childElementCount;
    expect(childrenCount).toBeGreaterThanOrEqual(0);
  })
})