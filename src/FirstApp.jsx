import PropTypes from 'prop-types'

export const FirstApp=({title='hola soy nico', subTitle})=>{

    return (
    <>
        <h1>{title}</h1>
        <p>{subTitle}</p>
    </>
    )
}

FirstApp.propTypes={
    title:PropTypes.string.isRequired
}

FirstApp.defaultProps={
    title:"no hay titulo",
    subTitle:"no hay subtitulo",
    name:"nicolas"
}