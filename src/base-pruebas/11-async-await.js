export const getImagen=async()=>{
    try{
        const apiKey='XAYOmqC8GNN4B048dgLjUtiZg0sgcv9N'
        const resp= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`) 
        const {data}=await resp.json()
        const {url}=data.images.original
        return url 
    }
    catch(error){
        console.log(error)
    }
}