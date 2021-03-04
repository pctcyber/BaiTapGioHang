import React, { Component } from 'react'

export default class SanPhamChiTiet extends Component {
    render() {
        let { sanPham,chiTietSanPham,themGioHang} = this.props;
        return (
            <div className="card" style = {{height:300}}>
                <img className="card-img-top" height='290' src={sanPham.hinhAnh} alt="#" />
                <div className="card-body">
                    <h4 className="card-title text-left">{sanPham.tenSP}</h4>
                    
                    <button onClick={() => {
                        chiTietSanPham(sanPham)
                    }} className='btn btn-success '>Detail
                    </button>
                    
                    <button onClick = {() => {
                            {themGioHang(sanPham)}
                              }}
                           className='btn btn-danger ml-4'>Cart
                     </button> 
                </div>
            </div>
        )
    }
}
