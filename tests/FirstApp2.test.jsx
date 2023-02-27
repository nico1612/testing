import { render,screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />',()=>{

    const title='hola, soy goku'

    test('debe hacer match con el snapshot',()=>{
        const {container}= render(<FirstApp title={title}/>)
        expect(container).toMatchSnapshot()
    })

    test('debe mostrar el mensaje "hola soy goku"',()=>{

       render(<FirstApp title={title}/>)
       expect(screen.getByText(title)).toBeTruthy()

    })

    test('debe mostrar el titulo en un h1 ',()=>{

        render(<FirstApp title={title}/>)
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
 
     }) 
     
    test('debe de mostrar el subtitulo enviado por props',()=>{
        const subtitulo='soy un subtitulo'
        render(
            <FirstApp 
                title={title}
                subTitle={subtitulo}
            />)

        expect(screen.getAllByText(subtitulo).length).toBe(2)

    }) 
})