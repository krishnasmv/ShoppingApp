import { useState, useEffect } from "react";

export default function ShoppingComponent()
{
    const [categories, setCategories] = useState([]);
    const [products, setProducts]= useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [totalprice, setTotalPrice] = useState(0);
    const [disable, setDisable] =useState(true);
    const [minimize, setMinimize] = useState(false);
    const [wishlistitems, setWishListItems] = useState([]);
    const [wishListCount, setWishListItemsCount] = useState(0);
    const [found, setfound] = useState(false)

    function GetCartItemsCounts(){
        setItemsCount(cartItems.length);
    }
    function GetWishListCounts(){
        setWishListItemsCount(wishlistitems.length);
    }
    function onCheckoutClick(){
        TotalPrice();
        setDisable(false);
    }
    function clearAll(){

            setCartItems([]);
            setItemsCount(0);
    }
    function TotalPrice(){
        let price =0;
        cartItems.map(items=>
            price = price + items.price)
        setTotalPrice(price);
        return(
            <h4><span className="bi bi-cart">Total Items: {totalprice}</span></h4>
        );
    }

    function LoadProducts(url){
        fetch(url).then(response=>response.json()).then(data=>{
            setProducts(data);
        })
    }

    function handleAddtoCart(e){
        fetch(`http://fakestoreapi.com/products/${e.target.id}`).then(response=>response.json()).then(data=>{
            cartItems.push(data);
            GetCartItemsCounts();
        })
    }
    function handlewishlist(e){
        fetch(`http://fakestoreapi.com/products/${e.target.id}`).then(response=>response.json()).then(data=>{
            wishlistitems.push(data);
            GetWishListCounts();})
    }
    function removeFromCart(e){
        alert("Item is removed");
        fetch(`http://fakestoreapi.com/products/${e.target.id}`).then(response=>response.json()).then(data=>{
            cartItems.pop(data);
            GetCartItemsCounts();
        })
    }
    function removeWishList(e){
        fetch(`http://fakestoreapi.com/products/${e.target.id}`).then(response=>response.json()).then(data=>{
            wishlistitems.pop(data);
            GetWishListCounts();
        })
    }

    function LoadCategories(){
        fetch('http://fakestoreapi.com/products/categories').then(response =>response.json()).then(data=>{
            data.unshift('All')
            setCategories(data)});
    }

    function handleCategorychange(e){
        if(e.target.value=='All')
        {
            LoadProducts(`http://fakestoreapi.com/products/`)
        }
        else{
            LoadProducts(`http://fakestoreapi.com/products/category/${(e.target.value)}`)
        }
    }
    function handleMinimize(){
        if(minimize == false){
            setMinimize(true);
        }
        else{
            setMinimize(false);
        }
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts('http://fakestoreapi.com/products');
        if(cartItems.length>0)
        {
            TotalPrice();
        }
        if(cartItems.length==0)
        {
            setTotalPrice(0);
            setDisable(true);
        }
    },[cartItems.length, wishlistitems.length])



    return(
        <div className="container-fluid">
            <header className="bg-primary p-2 text-white text-center" style={{backgroundColor: '#147EFB', padding: 10, borderRadius: 15 }}>
                <h1><span className="bi bi-cart"></span><span className="text-white text-center">Shopping Home</span> </h1>
            </header>
            <section className="row mt-3">
            <button onClick={handleMinimize} className="bi bi-arrow-left-circle p-1 m-1" style={{height:50, width:50}}></button><br></br>
            {minimize==true?null:
                <nav className="col-2">
                    <div>
                        <label>Select a Category</label>
                        <div>
                            <select onChange={handleCategorychange} className="form-select">
                                {
                                    categories.map(category =>
                                        <option key={category}>{category}</option>
                                        )
                                }
                            </select>
                        </div>
                    </div><br/>
                    <div>
                    <div>
                        <button disabled={true} className="w-50 p-2 m-2 bg-warning text-dark">Wish list</button>
                    </div>
                    {wishlistitems.length>0?<table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishlistitems.map(items=>
                                    <tr key={items.id}>
                                        <td>{items.title}</td>
                                        <td>
                                            <img src={items.image} width="50" height="50"/>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary">
                                                <span onClick={removeWishList} className="bi bi-suit-heart"></span>
                                            </button>
                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>:<div className="m-8 p-8 text-center">
                        <img height='350' width='290' src="/Whishlist.png"/></div>}
                    </div>

                </nav>}
                <main className="col-6 d-flex flex-wrap overflow-auto" style={{height:'1000px',}}>
                    {
                        products.map(product=>
                            <div key = {product.id} className="card m-1 p-1" style={{width:200}}>
                                <img src = {product.image} className="card-img-top" height = "150" width="200"/>
                                <div className="card-header" style={{height:'160px', widows:'200px'}}>
                                    <p>{(product.title).substring(0,36)}</p>
                                </div>
                                <div className="card-body" style={{height:160, font:50}}>
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>{product.rating.rate} <span>[{product.rating.count}]</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer p-1 m-1">
                                    <button id = {product.id}  onClick={handleAddtoCart} className="btn btn-danger w-55">
                                        <span className="bi bi-cart4" style={{font:20, height:10, width:1}}></span> Buy Now
                                    </button>
                                    <span><button id = {product.id} onClick={handlewishlist} className="btn btn-primary ">save</button></span>
                                </div>
                            </div>)
                            
                    }
                </main>
                <aside className="col-3">
                    <button className="btn btn-warning w-70">
                        <span className="bi bi-cart3"></span>[{itemsCount}] Your Cart Items
                    </button>
                    <span>{cartItems.length>0?<span><button onClick={clearAll} className="bi bi-cart btn btn-danger" style={{ flex: 2,flexDirection: "row" ,marginLeft:50}}>Clear All</button></span>:null}</span>
                    {cartItems.length>0?<table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.map(items=>
                                    <tr key={items.id}>
                                        <td>{items.title}</td>
                                        <td>{items.price}</td>
                                        <td>
                                            <img src={items.image} width="50" height="50"/>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger">
                                                <span onClick={removeFromCart} className="bi bi-trash"></span>
                                            </button>
                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>:<div><img src="/empty-cart.png"/></div>}
                    <br></br>
                        {
                            cartItems.length>0?<div>
                            <div><button onClick={onCheckoutClick} className="btn btn-warning">Checkout</button></div><br/>
                        </div>:null
                        }
                        {disable==false?
                        <div>
                            <table>
                        <thead>
                            <tr><th><span style={{color:"black" ,fontSize:20,}}className="btn-warning bi bi-cart"/>Cart Totals</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Subtotal:</td>
                                <td><b>${totalprice}</b></td>
                            </tr>
                            <tr><td>Delivery:</td>
                            <td><td><b>$7.65</b></td></td></tr>
                            <tr><td>Total:</td>
                            <td><b>${totalprice+7.65}</b></td></tr>
                        </tbody>
                    </table>
                    <br/>
                    <div><button className="btn btn-warning">Proceed to Payment</button></div><br/>
                        </div>
                    
                    :null
                        }
                        
                </aside>
            </section>
        </div>
    )
}
