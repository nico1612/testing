import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />',()=>{
    /*test('debe hacer match con el snapshot',()=>{

        const titles='hola, soy goku'
        const {container}= render(<FirstApp title={titles}/>)

        expect(container).toMatchSnapshot()
    })*/
    test('debe mostrar el titulo en un h1',()=>{

        const title='hola, soy goku'
        const {container,getByText,getByTestId}= render(<FirstApp title={title}/>)

        expect(getByText(title)).toBeTruthy()

        //const h1=container.querySelector('h1')
        //expect(h1.innerHTML).toContain(title)

       expect(getByTestId("text-title").innerHTML).toBe(title)
    }) 
    test('debe de mostrar el subtitulo enviado por props',()=>{

        const title='hola, soy goku'
        const subtitulo='soy un subtitulo'
        const {getAllByText}= render(
            <FirstApp 
                title={title}
                subTitle={subtitulo}
            />)

        expect(getAllByText(subtitulo).length).toBe(2)

    }) 
})