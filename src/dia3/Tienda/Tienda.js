import React from 'react'

const Carrito = (props) => 
    <>
        <div>Tus productos:</div>
        {props.cart.map((cartItems) => 
            <div>{props.productos.find((p) => p.id == cartItems.id).name}</div>
        )}
    </>

const Catalogo = (props) => 
    <>
        <div>Tus productos:</div>
        {props.productos.map((product) => 
            // <ProductItem producto={product} onChange()
            <div>{product.name} {product.price}€ 
            <input type="button" value="add" onClick={(product)=>props.onClick(product)} /></div>
        )}
    </>



class Tienda extends React.Component {
    productos = [
        {id:1,name:'Cocacola',price:1},
        {id:2,name:'Fanta',price:2},
        {id:3,name:'Cerveza',price:3}
    ]
    promoCodes = [{'SAVE10':10}]
    state = {
        cart: [{id:1,units:1}],
        promoCode: ''
    }
    addProduct = (producto) => {
        console.log(producto)
    }  
    render(){
        return (
            <>
            <Carrito productos={this.productos} cart={this.state.cart}/>
             <Catalogo productos={this.productos} onClick={this.addProduct}/>
            </>
        )
    }

}


export default Tienda;