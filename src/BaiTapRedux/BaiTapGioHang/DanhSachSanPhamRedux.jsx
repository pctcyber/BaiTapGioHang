import React, { Component } from 'react'
import data from '../../data/data.json'
import SanPhamGioHangRedux from './SanPhamGioHangRedux'
import ModelDetail from './ModelDetail.jsx'
export default class DanhSachSanPhamRedux extends Component {

    // state ={
    //     spDetail:{
    //         "maSP": 1,
    //         "tenSP": "VinSmart Live",
    //         "manHinh": "AMOLED, 6.2\", Full HD+",
    //         "heDieuHanh": "Android 9.0 (Pie)",
    //         "cameraTruoc": "20 MP",
    //         "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
    //         "ram": "4 GB",
    //         "rom": "64 GB",
    //         "giaBan": 5700000,
    //         "hinhAnh": "./img/vsphone.jpg"
    //     }
    // }

    // spChiTiet = (sanPham) => {
    //     this.setState({
    //         spDetail: sanPham,
    //     })
    // }
    render() {
        return <div className="container">
                    <div className="row">
                        {
                            data.map((sp, index) => {
                                return <div key={index} className="col-4">
                                    <SanPhamGioHangRedux sp={sp}  spChiTiet = {this.spChiTiet}/>
                                </div>
                            })
                        } 
                        <ModelDetail />

                    </div>
        </div>
    }
}
