import React from 'react'
import ProductItems from './ProductItems'

class Products extends React.Component {
    render() {
        const { products} = this.props
    

    

        return (
            <div>
                {products.map(product => (
                    <ProductItems key={product.id}
                    product={product}
                    />
                ))}
            </div>
        )
    }
}

export default Products
