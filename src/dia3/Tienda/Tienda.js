import React from 'react'
import './tienda.css';

const RenderConditional = (props) => 
    <>
        {(props.if) ? props.children : '' }
    </>



const ProductInCart = (props) => 
    <div className="productItem">
        <div>{props.product.name}</div>
        <div><input type="number" value={props.units} onChange={(e) => props.unitsChange(e,props.product.id)}/></div>
        <div>{props.product.price}€</div>
        <div><input type="button" value="borrar"  onClick={() => props.deleteProduct(props.product.id)}/></div>
    </div>

const Carrito = (props) => 
{
    let cartTotal = 0;
    return(
        <div className="carritoStyle">
            <div>Tus productos:</div>
            {props.cart.map((cartItem) => {
                let product = props.productos.find((p) => p.id == cartItem.id);
                cartTotal += product.price * cartItem.units;
                return (
                <ProductInCart key={product.id} product={product} units={cartItem.units} unitsChange={props.unitsChange} deleteProduct={props.deleteProduct} />
                )
            }
            )}
            <div className="flexitem">
                <div>Cupon</div>
                <div><input type="text" placeholder="codigo" onChange={props.applyCupon}/></div>
            </div>
            <div>Total: {cartTotal} €</div>
        </div>
    )
}

const Catalogo = (props) => 
    <>
        <div>Tus productos:</div>
        {props.productos.map((product) => (
            <div key={product.id}>{product.name} {product.price}€ 
 <input type="button" value="add" onClick={()=>props.onClick(product)} /></div>
            )
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
        cart: [],
        promoCode: ''
    }

    componentDidMount() {
        const cartCached = JSON.parse(localStorage.getItem('cart')) || [];
        const cuponCached = JSON.parse(localStorage.getItem('cupon')) || '';
        console.log(cuponCached);
        this.setState({cart:cartCached,promoCode:cuponCached });
    }

    saveToLocalStorage = (ref,data) => {
        localStorage.setItem(ref, JSON.stringify(data));
    }

    addProduct = (addProduct) => {
        let index = this.state.cart.findIndex((p) => p.id == addProduct.id)
        if(index>-1){
            // this.setState({cart: [...this.state.cart.filter(p=>p.id !== addProduct.id),{id:addProduct.id,units:moreUnits}] })
            let copyState = this.state.cart;
            copyState[index].units += 1;
            this.setState({cart: copyState})
            this.saveToLocalStorage('cart',copyState)
        } else {
            let newCart = [...this.state.cart,{id:addProduct.id,units:1}]
            this.setState({cart: newCart})
            this.saveToLocalStorage('cart',newCart)
        }
        
    }  
    deleteProduct = (id) => {
        let newCart = [...this.state.cart.filter(p=>p.id !== id)]
        this.setState({cart: newCart })
        this.saveToLocalStorage('cart',newCart)
    }
    unitsChange = (e,id) => {
        if(e.target.value == 0){
            this.deleteProduct(id)
        } else {
            let index = this.state.cart.findIndex((p) => p.id == id)
            let copyState = this.state.cart;
            copyState[index].units = parseInt(e.target.value);
            this.setState({cart: copyState})
            this.saveToLocalStorage('cart',copyState)
        }
    }
    applyCoupon = (e) => {
        console.log(e.target.value)
        let total = this.promoCodes.filter((p) => p.hasOwnProperty(e.target.value) === true).length;
        if(total > 0){
            this.setState({promoCode:e.target.value})
            this.saveToLocalStorage('cupon',e.target.value)
        }
    }
    render(){
        return (
            <>
            <RenderConditional if={this.state.cart.length >0}>
                <Carrito productos={this.productos} applyCupon={this.applyCoupon} cart={this.state.cart} 
                unitsChange={this.unitsChange} deleteProduct={this.deleteProduct} />
            </RenderConditional>
            <Catalogo productos={this.productos} onClick={this.addProduct}/>
            </>
        )
    }

}


export default Tienda;