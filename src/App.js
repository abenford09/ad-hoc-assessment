import React from 'react'
import Products from './Components/Products'

import './App.css';


class App extends React.Component{
  state = {
    products: [
      {
        name: 'apple', 
        number: 12, 
        price: .50, 
        id: 1
      },
      {
        name: 'banana', 
        number: 14, 
        price: .60, 
        id: 2
      },
      {
        name: 'strawberry',
        number: 6, 
        price: .25, 
        id: 3
      },
    ],
    product: null,
    loading: false,
  }

  render() {
    const {product, products} = this.state

    

    return (
      <div className="App">
        <Products product={product} products={products} />
        {/* Create state for 
          products: which is going to be an array -
          each item should have a name of the item, a product number, an id, and a price.
  
          loading: which is going to be a boolean on if the component is loading or not
  
          - Create a component for Products, loop through the Products, and output the list in 
          another component called ProductItems
        */}
      </div>
    );
  }

}

export default App;
