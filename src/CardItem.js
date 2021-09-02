// this uis a class based component which is different from functional component
import React from 'react'

class CardItem extends React.Component{


    increaseQuantity=
    ()=>{
        // so react will know to re render this
        this.setState({
            qty:this.state.qty+1
        });
    }

    decreaseQuantity=
    ()=>{
        // so react will know to re render this
          
         this.setState((prev)=>{

            if(prev.qty>=1)
            {
                return {
                    qty:prev.qty-1
                };
            }
            else{
                return {
                    qty:prev.qty
                };
            }

         });

    }

    render(){
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
                       <div className="col s4">
                           
                            <button className=" orange " onClick={this.increaseQuantity}>+</button>                          
                       </div>

                       <div className="col s4">
                       <button className=" yellow black-text" onClick={this.decreaseQuantity}>-</button>                                
                       </div>

                       <div className="col s4">
                       <button className=" red">X</button>                              
                       </div>


                   </div>
               </div>
           </div>
        </div>
        );
    }
}

export default CardItem;
