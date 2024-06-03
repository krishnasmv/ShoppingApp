import React from "react";

export default class TwoWayClassDemo extends React.Component{
    constructor(props){
        super(props);
        {/** state is implicitly there in class of react */}
        this.state = {
            UserName:'John'
        }      
        this.handleUserChange = this.handleUserChange.bind(this);
    }

    handleUserChange(e){
        this.setState({
            UserName:e.target.value
        })
    }


    render(){
        return(
            <div className="container-fluid">
                <h2>User Details</h2>
                <input onChange={this.handleUserChange} type = "text"/>
                <br/>
                <p>Hello! {this.state.UserName}</p>
            </div>
        )
    }
}












{/**this is one way binging }
export default class TwoWayClassDemo extends React.Component{
    constructor(props){
        super(props);
        {/** state is implicitly there in class of react *}
        this.state = {
            Title:'Product Details',
            Name:'Samsung TV',
            Price:56000.24,
            Stock:true,
            Cities:['Delhi','Hyd'],
            Rating:{rate:4.5, count:6700}

        }      
    }
    render(){
        return(
            <div className="container-fluid">
                <h2>this.state.title</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.Price}</dd>
                    <dt>Stock</dt>
                    <dd>{(this.state.Stock == true)?"Available":"Out of Stock"}</dd>
                    <dt>Cities</dt>
                    <dd>
                        <ol>
                            {
                                this.state.Cities.map(city=>
                                    <li key={city}>{city}</li>)
                            }
                        </ol>
                    </dd>
                    <dt>Rating</dt>
                    <dd>
                        <span className="bi bi-star-fill text-success"></span> {this.state.Rating.rate}[{this.state.Rating.count}]
                    </dd>
                </dl>
            </div>
        )
    }
}*/}