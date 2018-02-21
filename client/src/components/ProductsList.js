import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchAllProducts, createProduct, deleteProduct} from '../actions/products'
import {Link} from 'react-router-dom'
import ProductForm from './ProductForm'

class ProductsList extends PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })).isRequired
  }

  createProduct = (product) => {
    this.props.createProduct(product)
  }

  deleteProduct = (productId) => {
    this.props.deleteProduct(productId)
  }

  componentWillMount() {
    this.props.fetchAllProducts()
  }

  render() {
    const {products} = this.props
    return (
      <div>
        <h1>All products</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { products.map(product => (<tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Link to={ `/products/${product.id}` }>{product.name}</Link>
              </td>
              <td>&euro; {product.price}.00</td>
              <td><button onClick={ () => this.deleteProduct(product.id) }>X</button></td>
            </tr>)) }
          </tbody>
				</table>

        <h1>Create a new product</h1>

        <ProductForm onSubmit={this.createProduct} />
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {
  fetchAllProducts,
  createProduct,
  deleteProduct
})(ProductsList)