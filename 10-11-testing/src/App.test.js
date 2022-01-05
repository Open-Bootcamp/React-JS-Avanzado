import { render, fireEvent } from "@testing-library/react"
import App from "./App";
import InputNuevaNota from "./components/InputNuevaNota";
import ListadoNotas from './components/ListadoNotas'

describe('REACT - Testeamos los componentes', () => {
    test('El listado se renderiza correctamente', () => {
        const r = render(<ListadoNotas />);
        expect(r).toBeDefined();
    })
    test('El listado renderiza un listado correctamente', () => {
        const notas = ["bajar la basura", "Comprar huevos"];
        const r = render(<ListadoNotas notas={notas} />);
        expect(r).toBeDefined();
    })
    test('El listado renderiza sólo las notas que debe renderizar', () => {
        const notas = ["bajar la basura", "Comprar huevos"];
        const r = render(<ListadoNotas notas={notas} />);
        const div = r.getByLabelText('listado-notas');
        expect(div.childElementCount).toBe(2);
    })
})

describe('REACT - Hacemos un test de integración', () => {
    test('Renderizamos la app', () => {
        const r = render(<App />)
        expect(r).toBeDefined();
    })
    test('Se renderiza el input', () => {
        const placeholdertext = "Introduce una nueva nota";
        const r = render(<App />)
        const input = r.getByPlaceholderText(placeholdertext);
        expect(input).toBeDefined();
    })
    test('Cuando hacemos clic en el botón Añadir, se lanza el evento', () => {
        const funcionMock = jest.fn();
        const r = render(<InputNuevaNota addNuevaNota={funcionMock} />);
        const button = r.getByText("Añadir");
        fireEvent.click(button);
        expect(funcionMock).toHaveBeenCalledTimes(1);
    })
    test('Añadimos una nueva nota', () => {
        const placeholdertext = "Introduce una nueva nota";
        const r = render(<App />)
        const input = r.getByPlaceholderText(placeholdertext);
        const button = r.getByText("Añadir");
        const div = r.getByLabelText('listado-notas');
        const hijosInicial = div.childElementCount;
        fireEvent.change(input, { target: { value: 'Poner gasolina' } });
        fireEvent.click(button);
        const hijosFinal = div.childElementCount;
        expect(hijosFinal).toBeGreaterThan(hijosInicial);
        expect(hijosInicial).toBeLessThan(hijosFinal);
        expect(hijosInicial).not.toBe(hijosFinal);
    })
})