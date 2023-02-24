import { getHeroeById, getHeroeByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroess from '../../src/data/heroes'

describe('pruebas en 08-imp-exp',()=>{
        test('getHeroeById debe retornar un heroe por id',()=>{
            const id =1;
            const hero=getHeroeById(id);
            expect(hero).toEqual({id: 1, name: 'Batman',owner: 'DC'});
        })
        test('getHeroeById debe retornar undefine si no existe',()=>{
            const id =10;
            const hero=getHeroeById(id);
            expect(hero).toBeFalsy();
        })

        test('getHeroesByOwner debe retornar heroes de dc',()=>{
            const owner='DC';
            const heroes=getHeroeByOwner(owner);
            expect(heroes.length).toBe(3)
            expect(heroes).toEqual([
                {id: 1, name: 'Batman',owner: 'DC'},
                {id: 3, name: 'Superman',owner: 'DC'},
                {id: 4,name: 'Flash',owner: 'DC'}
            ])
            expect(heroes).toEqual(heroess.filter((heroe)=>heroe.owner===owner))
        })
        test('getHeroesByOwner debe retornar heroes de marvel',()=>{
            const owner='Marvel';
            const heroes=getHeroeByOwner(owner);
            expect(heroes.length).toBe(2)
            expect(heroes).toEqual([
                {id: 2,name: 'Spiderman',owner: 'Marvel'},
                {id: 5,name: 'Wolverine',owner: 'Marvel'},
            ])
            expect(heroes).toEqual(heroess.filter((heroe)=>heroe.owner===owner))
        })
})