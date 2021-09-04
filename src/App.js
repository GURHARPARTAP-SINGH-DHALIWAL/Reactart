
import './App.css';
import Cart from './Cart';
import NavBar from './NavBar';
import React from 'react';
// Use compat mode everything is imported in this
import firebase from 'firebase/compat/app';
// this will automatically go in firebase object
// import 'firebase/compat/auth';
class App extends React.Component {

  constructor()
  {
      super();

      this.state={
          products:[
             
          ],
          loading:true
      };
  }
  // After rendering for the first time this function is used
// onSnapshot will add a listener whenever the db chammges it calls callback again  
   componentDidMount()
  {  
    console.log(firebase);
    firebase
    .firestore()
    .collection('products')
    .onSnapshot((snapshot)=>{

      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;
        // doc.data() does not returns id
        return data;
      });
      this.setState({
        loading:false
      });
      this.setState({
        products
      });

  });
    // .then((snapshot)=>{

    //     const products=snapshot.docs.map((doc)=>{
    //       const data=doc.data();
    //       data['id']=doc.id;
    //       // doc.data() does not returns id
    //       return data;
    //     });
    //     this.setState({
    //       loading:false
    //     });
    //     this.setState({
    //       products
    //     });

    // });
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

   getCartCount()
  {
    const {products}=this.state;

    let count=0;
    products.forEach((item)=>{
      count+=item.qty;
    });

    return count;
  }

  getCartTotal()
  {
    const {products}=this.state;

    let count=0;
    products.forEach((item)=>{
      count+=(item.qty*item.price);
    });

    return count;
  }

  render(){
  return (
    <div className="App" id="APP">
      <h1 >Cart</h1>
      <NavBar count={this.getCartCount()}/>
      {this.state.loading&& <h1>Loading Products...</h1>}
      <Cart products={this.state.products}  handleIncreaseQuantity={this.handleIncreaseQuantity} handleDecreaseQuantity={this.handleDecreaseQuantity} handleResetQuantity={this.handleResetQuantity}  handleDeleteQuantity={this.handleDeleteQuantity}/>
      <div className="lead text-white">TOTAL : {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
