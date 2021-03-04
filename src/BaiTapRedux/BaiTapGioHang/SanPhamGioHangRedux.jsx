import React, { Component } from 'react'

// connect component to redux-store
import { connect } from "react-redux"
class SanPhamGioHangRedux extends Component {
    render() {
        let { sp } = this.props;
        return (
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={sp.hinhAnh} height={250} alt={sp.hinhAnh} />
                <div className="card-body text-left">
                    <h4 className="card-title">{sp.tenSP}</h4>
                    <p className="card-text">{sp.giaBan.toLocaleString()}</p>
                    <button className='btn btn-success'  onClick = {() => {
                         this.props.themGioHang(sp)
                        }}>Add to cart </button>
                     <button onClick = {() => {
                      this.props.chiTietSanPham(sp);
                        }} className='btn btn-primary ml-3' data-toggle="modal" data-target="#modelId">Detail</button>   
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPham) => {
            const spGioHang = {
                maSP: sanPham.maSP,
                tenSP: sanPham.tenSP,
                hinhAnh: sanPham.hinhAnh,
                soLuong: 1,
                giaBan: sanPham.giaBan,
            };

            const action = {
                type: 'THEM_GIO_HANG', // compulsory to have
                spGioHang: spGioHang, // content send to server
            };

            // use dispatch function to send data to server
            dispatch(action)
        },

        chiTietSanPham: (sanPham) => {
          
            const action = {
            type:"CHITIET-SANPHAM",
            sanPham,
            };
             dispatch(action)  

        }
    }
}

export default connect(null, mapDispatchToProps)(SanPhamGioHangRedux)