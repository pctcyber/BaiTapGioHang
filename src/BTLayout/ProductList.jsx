import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    mangSP = this.props.mangSanPham;
    renderSP = () => {

        return <div className='row' >
            {this.mangSP.map((sp, index) => {
                return <div key={index} className='col-3'>
                    <ProductItem sanPham={sp} />
                </div>
            })}
        </div>

    }

    render() {
        return (
            <div >
                {this.renderSP()}
            </div>
        )
    }
}
