// this uis a class based component which is different from functional component
import React from 'react'

class CardItem extends React.Component{

    constructor()
    {
        super();
        this.state={
            price:899,
            title:"Phomnbne",
            qty:1,
            img:"https://www.filmibeat.com/wimgm/1366x70/desktop/2020/02/xkiara-advani_17.jpg.pagespeed.ic.xDJs4835gN.jpg"

        };
    }
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
        return (
            <div className="container teal">
           <div className="row center" id="item-row" >
               <div className="col s2 valign-wrapper">
                   <img id="img" className="circle" src={this.state.img} alt="" />
               </div>
               <div className="col s4 center-align">
                   <div className="row">
                       <span>{this.state.title}</span>
                   </div>
                   <div className="row">
                       <span>{this.state.price}</span>
                   </div>
                   <div className="row">
                       <span>{this.state.qty}</span>
                   </div>
                   <div className="row">
                       <div className="col s4">
                           
                            <button className="btn green" onClick={this.increaseQuantity}>+</button>                          
                       </div>

                       <div className="col s4">
                       <button className="btn yellow black-text" onClick={this.decreaseQuantity}>-</button>                                
                       </div>

                       <div className="col s4">
                       <button className="btn red">X</button>                              
                       </div>


                   </div>
               </div>
           </div>
        </div>
        );
    }
}

export default CardItem;
