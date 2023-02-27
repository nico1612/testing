import {useState} from 'react'
import PropTypes from 'prop-types'

export const CounterApp=({value})=>{

    const [counter,setCounter]=useState(value);

    const handleAdd =()=>{
        //setCounter(counter+1);
        setCounter((c)=>c+1)
    }

    const handelSubtract=()=>{
        setCounter((c)=>c-1)
    }

    const handelReset=()=>{
        setCounter(value)
    }

    return (
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}> +1</button>
        <button onClick={handelSubtract}>-1</button>
        <button aria-label='btn-reset' onClick={handelReset}>Reset</button>
    </>
    )
}

CounterApp.propTypes={
    value:PropTypes.number.isRequired
}

CounterApp.defaultProps={
    value:123
}