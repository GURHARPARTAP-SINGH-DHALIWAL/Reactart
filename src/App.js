
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
      // products[index].qty+=1;
      // this.setState({
      //     products
      // });

      const docRef=firebase.firestore()
      .collection('products').doc(product.id);

      docRef.update({
        qty:product.qty+1
      })
      .then(()=>{console.log("Updated!")})
      .catch((err)=>{console.log(err)});


  };

  handleResetQuantity=(product)=>{
      const {products}=this.state;
      var index=products.indexOf(product);
      // products[index].qty=1;
      // this.setState({
      //     products
      // });

      const docRef=firebase.firestore()
      .collection('products').doc(product.id);

      docRef.update({
        qty:1
      })
      .then(()=>{console.log("Updated!")})
      .catch((err)=>{console.log(err)});

      // now whenever we increase quantity it should get updated in firebase


  };

  handleDecreaseQuantity=(product)=>{
      const {products}=this.state;
      var index=products.indexOf(product);
      if(products[index].qty>0){

      // products[index].qty-=1;
      // this.setState({
      //     products
      // });

      const docRef=firebase.firestore()
      .collection('products').doc(product.id);

      docRef.update({
        qty:product.qty-1
      })
      .then(()=>{console.log("Updated!")})
      .catch((err)=>{console.log(err)});
      
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
  addProduct=()=>{
    firebase
    .firestore()
    .collection('products')
    .add({
      title:'Laptop',
      qty:13,
      price:100009,
      img:"https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
    })
    .then((docRef)=>{
      console.log('prodict added',docRef);
    })
    .catch((err)=>{
      console.log(err);
    });
    
  }

  render(){
  return (
    <div className="App" id="APP">
      <h1 >Cart</h1>
      <NavBar count={this.getCartCount()}/>
     
    
     
  
      {this.state.loading&& <h1>Loading Products...</h1>}
      <Cart products={this.state.products}  handleIncreaseQuantity={this.handleIncreaseQuantity} handleDecreaseQuantity={this.handleDecreaseQuantity} handleResetQuantity={this.handleResetQuantity}  handleDeleteQuantity={this.handleDeleteQuantity}/>
      <div className="lead text-white">TOTAL : {this.getCartTotal()}</div>
      <br/>
      <button className="btn align-center" id="add-button" onClick={this.addProduct}>Add Laptop</button>
    </div>
  );
  }
}

export default App;
