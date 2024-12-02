export const getGifs = async ({ category }) => {
  

    

  const url = `https://api.giphy.com/v1/gifs/search?api_key=9Og2XCJ1qfas6SWiKdZ4e4FKSIFslfYu&q=${category}&limit=10`;

    // Hacemos una petición a la API de Giphy
const resp = await fetch( url );
 // Extraemos los datos de la respuesta en formato JSON
const { data } = await resp.json();
 // Mapeamos los datos a un nuevo arreglo de objetos con id, título y URL de cada 

 const gifs = data.map( img => ({
 id: img.id,
 title: img.title,
 url: img.images.downsized_medium.url
 }));
 
 // Devolvemos el arreglo de objetos
 // return gifs; // Remove this line

  return gifs;
}