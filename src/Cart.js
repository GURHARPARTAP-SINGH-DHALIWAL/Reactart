import React from 'react'
import CardItem from './CardItem';

class Cart extends React.Component{
     
    constructor()
    {
        super();

        this.state={
            products:[
                {   
                    id:1,
                    price:99,
                    title:"Watch",
                    qty:1,
                    img:"data:image/png;base64,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"
        
                },

                {   
                    id:2,
                    price:899,
                    title:"Phone",
                    qty:1,
                    img:"data:image/png;base64,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"
        
                },

                {   
                    id:3,
                    price:999,
                    title:"Laptop",
                    qty:1,
                    img:"data:image/png;base64,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"
        
                }
            ]
        };
    }
    // Arrow function binds this to the object in which this is declared
    handleIncreaseQuantity=(product)=>{
        const {products}=this.state;
        var index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products
        });
    };

    handleResetQuantity=(product)=>{
        const {products}=this.state;
        var index=products.indexOf(product);
        products[index].qty=1;
        this.setState({
            products
        });
    };

    handleDecreaseQuantity=(product)=>{
        const {products}=this.state;
        var index=products.indexOf(product);
        if(products[index].qty>0){

        products[index].qty-=1;
        this.setState({
            products
        });
        
        }
    };

    handleDeleteQuantity=(id)=>{
        const {products}=this.state;
        
        const items=products.filter((item)=>{return item.id!==id});

        this.setState({
            products:items
        });
        
    };


    render(){
        const {products}=this.state;
        return (
            <div>
                
                {
                    products.map((product)=>{
                        return <div className="row" key={product.id} ><CardItem product={product} handleIncreaseQuantity={this.handleIncreaseQuantity} handleDecreaseQuantity={this.handleDecreaseQuantity} handleResetQuantity={this.handleResetQuantity}  handleDeleteQuantity={this.handleDeleteQuantity}  /></div>
                    })
                }

            
            </div> 
        ); 
    }

}

export default Cart;