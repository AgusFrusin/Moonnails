const productos = [
    {id: "2", nombre: "Esculpidas", precio: 2000, stock:5 , img: "./img/esculpidas.jpg", idCat:"2"},
    {id: "1", nombre: "Esmaltado SemiPermanente", precio: 1500, stock:5 , img: "./img/esmaltado.jpg" , idCat:"1"},
    {id: "3", nombre: "Kapping", precio: 1000, stock:5 , img: "./img/kapping.jpg", idCat:"3"},
   
]



export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( ()=> {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
}