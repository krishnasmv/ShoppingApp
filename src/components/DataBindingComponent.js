import { useState, useEffect } from "react";


export default function DataBindingComponent(){
    var products = [{Name: 'Samsung TV', Price:'20000'},{Name: 'Samsung mobiel', Price:'10000'}];
    var menu = [
    { Category: 'Electronics', item:["Samsung Tv","Mobile"]},
    { Category: 'Foot wear', item:["Nike","Puma"] }
    ];
    var username = "John";

    const [getProducts, serProducsts] = useState(["All","Electronics", "Footwear"]);

    const [mars,setMars] = useState();
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY").then(response=>response.json()).then(data=>{
            setMars(data);
        })
    },[])



    return(
        <div className="container">
            <h2>Product Details</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                            </tr>)
                    }
                </tbody>
            </table>
            <ol>
                {menu.map(items=>
                    <li key={items.Category}>{items.Category}
                    <ul>
                        {
                            items.item.map(items=>
                            <li key={items}>{items}</li>)
                        }
                    </ul>
                    </li>
                )}
            </ol>

            <h2>Select a product</h2>
            <select>
                {
                    menu.map(items=>
                        <optgroup key={items.Category} label = {items.Category}>
                            {
                                items.item.map(product=>
                                    <option key={product}>
                                        {
                                            product
                                        }
                                    </option>)
                            }
                        </optgroup>
                        )
                }
            </select>

            <h2>User details</h2>
            User Name:
            <input type="text" value = {username}/>
            <br/>
            Hello! {username}
            <br/><br/>

            <ol>
                {
                    getProducts.map(items=>
                        <li key = {items}>{items}</li>)
                }
            </ol>

            <br/> <br/><br/><br/><br/><br/>

            <h2>Mars Photos</h2>
            <table className="table table hover">
                <thead>
                    <tr>
                        <th>Photo ID</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars.photos.map(photo=>
                            <tr>
                                <td>{photo.id}</td>
                                <td>{photo.camera.full_name}</td>
                                <td>{photo.rover.name}</td>
                                <td>
                                    <img src={photo.img_src} width="100" height="100"/>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            <div className="d-flex flex-wrap">
                {
                    mars.photos.map(photo=>
                        <div className="card p-2 m-2">
                            <img src= {photo.img_src} className="card-img-top" height = "150"/>
                            <div className="card-header">
                                <h2>{photo.camera.full_name}</h2>
                            </div>
                            <div className="card-body">
                                <p>{photo.rover.name}</p>
                                </div>
                        </div>)
                }
            </div>
            
        </div>
    )
}

{/*
export default function DataBindingComponent(){
    var product = {
        Name: 'Samsung TV',
        price: 45000.45,
        Stock: true
    }
    return(
        <div className="container">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>  {/*this is binding as literal *}
                <dd><input type="text" value={product.Name}/></dd> {/*this is binding as property *}
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Stock</dt>
                <dd>{(product.Stock==true)?"Available":"Out of Stock"}</dd>
            </dl>
        </div>
    )
}*/}
{/* other example *}
export default function DataBindingComponent(){
    var size = {
        Width:450,
        Height:100
    }
    return(
        <div className="container">
            <h2>Product Details</h2>
            <table border = "1" width = {size.Width} height = {size.Height}> {/* table don't have a property in react, javascript, jquery but in HTML it will work. In console you will get error as in react, table dont have this height property (height = {size.Height}). width property is available. *}
            {/* throught style binding technique you have to apply height in react*}
                <tr>
                    <td>Welcome to react </td>
                </tr>
            </table>
        </div>
    )
}

{/* binding a collection *}
{/*collection means Array and this array have .map(), .filter(), .find() .. *}
export default function DataBindingComponent(){
    var categories =["All", "Electronics", "Footwear"]
    
    return(
        <div className="container">
            <h2>categories</h2>
            <ol>
                {
                    categories.map(category=>
                        <li key = {category}>{category}</li>
                    )
                }
            </ol>
            <h2> Select Cateory</h2>
            <select>
                {
                    categories.map(category=>
                        <option key = {category} value={category}>{category}</option>
                        )
                }
            </select>

        </div>
    )
}

{/*or in return we can do this way 

**********   key = {category} this is mandatory and unique.

<ol>
                {
                    categories.map(function (category){
                        return(
                            <li>(category)</li>
                        )
                    }
                )}
            </ol>
*/}