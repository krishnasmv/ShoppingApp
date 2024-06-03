import React from "react";

export default class ShoppingClassDemo extends React.Component
{

    constructor(props){
        super(props);
        this.state={
            categories:[],
            products:[]
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    }

    GetCategories(){
        fetch('http://fakestoreapi.com/products/category').then (response=>response.json()).then(data=>{
            this.setState({
                categories: data
            })
        })
    }

    GetProducts(url){
        fetch(url).then(response=>response.json()).then(data=>{
            this.setState({
                products: data
            })
        })
    }

    componentDidMount(){
        this.GetCategories();
        this.GetProducts('http://fakestoreapi.com/products');
    }

    handleCategoryChange(e){
        this.GetProducts(`http://fakestoreapi.com/products/category/${(e.target.value)}`)

    }


    render(){
        return(
            <div className="container-fluid">
                <header className="bg-danger p-2 text-white text-center">
                    <h2><span className="bi bi-cart"></span>Shopping cart</h2>
                </header>
                <section className="row">
                    <nav className="col-3">
                        <h2>Select Category</h2>
                        <select onChange={this.handleCategoryChange} className="form-select">
                            {
                                this.state.categories.map(category=>
                                    <option key={category}>{category}</option>
                                    )
                            }

                        </select>
                    </nav>
                    <main className="col-9">
                        <div className="d-flex flex-wrap">
                            {
                                this.state.products.map(product=>
                                    <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                                        <img src={product.image} className="card-img-top" height="150"/>
                                        <div className="card-header" style={{height:'160px'}}>
                                            <p>{product.title}</p>
                                        </div>
                                    </div>)
                            }

                        </div>
                    </main>
                </section>
            </div>
        )
    }
}