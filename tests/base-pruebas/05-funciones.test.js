import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('pruebas en 05-funciones',()=>{
    test('getUser debe retornar un objeto',()=>{
        const testUser={
            uid:'ABC123',
            username:'El_Papi1502'
        }
        const user=getUser();
        expect(testUser).toEqual(user);
    })
    test('get usuarios debe retornar un objeto',()=>{
        const name='nico';
        const user=getUsuarioActivo(name);
        console.log(name)
        expect(user).toStrictEqual({
            uid:'ABC567',
            username:name
        })
    })
})