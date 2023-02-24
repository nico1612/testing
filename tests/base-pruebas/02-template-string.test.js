import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba en 02-templare-string',()=>{
    test('getSaludos debe retornar "hola nico"',()=>{
        const name='nico';
        const message=getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    });
})