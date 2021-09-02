// this uis a class based component which is different from functional component
import React from 'react'

class CardItem extends React.Component{


 
    render(){
        console.log("Heyyy");
        const {price,qty,title,img}=this.props.product;
        return (
            <div className="container teal">
           <div className="row center" id="item-row" >
               <div className="col s2 valign-wrapper">
                   <img id="img" className="circle" src={img} alt="" />
               </div>
               <div className="col s4 center-align">
                   <div className="row">
                       <span>{title}</span>
                   </div>
                   <div className="row">
                       <span>{price}</span>
                   </div>
                   <div className="row">
                       <span>{qty}</span>
                   </div>
                   <div className="row grey">
                       <div className="col s3">
                           
                            <button className=" orange " onClick={()=>{this.props.handleIncreaseQuantity(this.props.product)}}>+</button>                          
                       </div>

                       <div className="col s3">
                       <button className=" yellow black-text" onClick={()=>{this.props.handleDecreaseQuantity(this.props.product)}}>-</button>                                
                       </div>
                        
                       <div className="col s3">
                       <button className=" blue black-text" onClick={()=>{this.props.handleResetQuantity(this.props.product)}}>R</button>                                
                       </div>



                       <div className="col s3">
                       <button className=" red" onClick={()=>this.props.handleDeleteQuantity(this.props.product.id)}>X</button>                              
                       </div>


                   </div>
               </div>
           </div>
        </div>
        );
    }
}

export default CardItem;
