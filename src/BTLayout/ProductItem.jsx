import React, { Component } from 'react'

export default class ProductItem extends Component {


    render() {
        let { sanPham } = this.props;
        return (
            <div className="card ">
                <img className="card-img-top" src={sanPham.hinhAnh} width='300' height='270' alt="sanpham" />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia}</p>
                </div>
            </div>
        )
    }
}
