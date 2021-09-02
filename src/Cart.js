import React from 'react'
import CardItem from './CardItem';

class Cart extends React.Component{
     


    render(){
        const {products}=this.props;
    
        return (
            <div>
                
                {
                    products.map((product)=>{
                        return <div className="row" key={product.id} ><CardItem product={product} handleIncreaseQuantity={this.props.handleIncreaseQuantity} handleDecreaseQuantity={this.props.handleDecreaseQuantity} handleResetQuantity={this.props.handleResetQuantity}  handleDeleteQuantity={this.props.handleDeleteQuantity}  /></div>
                    })
                }

            
            </div> 
        ); 
    }

}

export default Cart;