import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('pruebas en 09-promesas',()=>{
    test('getHeroesByIdAsync debe retornar un hereo',(done)=>{
        const id=1
        getHeroeByIdAsync(id)
        .then(hero=>{
            expect(hero).toEqual({ id: 1,
                name: 'Batman',
                owner: 'DC'})
            done();
        })
    })

    test('getHeroesByIdAsync debe obtener un error si hereo no existe',(done)=>{
        const id=100
        getHeroeByIdAsync(id)
        .then(hero=>{
            expect(hero).toBeFalsy()
            done()
        })
        .catch(error=>{
            expect(error).toBe('no se puedo encontrar el heroe con id: '+id)
            done();
        })
    })
})