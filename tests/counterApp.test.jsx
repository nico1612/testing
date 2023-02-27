import { fireEvent, getByRole, render, screen } from "@testing-library/react"

import { CounterApp } from "../src/CounterApp"

describe('Pruebas en <counterApp/>',()=>{
    
    const inicialValue=10

    test('debe hacer match con el snapshot'=()=>{
        const {constainer}=render(<CounterApp value={inicialValue}/>)
        expect(constainer).toMatchSnapshot()
    })

    test('debe de mostrar el valor inicial cuando mandamos 100', ()=>{
        render(<CounterApp value={100}/>)
        expect(screen.getByText(100)).toBeTruthy()
    })

    test('debe incrementar con el valor +1',()=>{
        render(<CounterApp value={inicialValue}/>)
        fireEvent.click(screen.findByText('+1'))
        expect(screen.findByText('11')).toBeTruthy()
    })

    test('debe decrementar con el valor -1',()=>{
        render(<CounterApp value={inicialValue}/>)
        fireEvent.click(screen.findByText('-1'))
        expect(screen.findByText('9')).toBeTruthy()
    })

    test('debe fr funcionar el boton de reset',()=>{
        render(<CounterApp value={355}/>)
        fireEvent.click(screen.findByText('+1'))
        fireEvent.click(screen.findByText('+1'))
        fireEvent.click(screen.findByText('+1'))
        //fireEvent.click(screen.findByText('Reset'))

        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}))
        expect(screen.findByText('355')).toBeTruthy()
    })
})