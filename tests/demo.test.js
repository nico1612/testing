describe('Pruebas en <demoComponent />',()=>{
    test('esta prueba no debe fallar',()=>{
        //1. inicializacion
           const message1='hola mundo'
        //2. estimulo
           const message2=message1.trim()
        //3. observar el comportamiento esperado
           expect(message1).toBe(message2)
       })
})