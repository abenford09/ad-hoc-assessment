import React from 'react'

class ProductItems extends React.Component {
    render() {
        const {product}= this.props
        
        return (
            <div ClassName='container'>
                <h1>Product Item</h1>
                <p>{product.id}</p>
            </div>
        )
    }
}

export default ProductItems
