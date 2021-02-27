import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import ProductList from './ProductList'
import Slider from './Slider'

export default class BTLayout extends Component {

    mangSanPham = [

        { maSP: 1, tenSP: "BlackBerry", hinhAnh: "./img/sp_blackberry.png", gia: 100 },
        { maSP: 2, tenSP: "Iphone", hinhAnh: "./img/sp_iphoneX.png", gia: 200 },
        { maSP: 3, tenSP: "SamSung", hinhAnh: "./img/sp_note7.png", gia: 300 },
        { maSP: 4, tenSP: "Vivo", hinhAnh: "./img/sp_vivo850.png", gia: 400 },
    ];

    
    render() {


        return (
            <div>
                <Header/>
                <Slider/>
                <ProductList mangSanPham = {this.mangSanPham}/>
                <Footer/>
            </div>
        )
    }
}
