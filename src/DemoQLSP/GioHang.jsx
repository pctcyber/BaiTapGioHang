import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        let { gioHang, xoaGioHang, themSP,xoaSP } = this.props;
        let renderGioHang = () => {
            
            return gioHang.map((sp, index) => {
                return (<tr key={index}>
                    <th>{sp.maSP}</th>
                    <th>{sp.tenSP}</th>
                    <th>
                        <img src={sp.hinhAnh} style={{ width: '60px', height: '40px' }} alt="#" />
                    </th>
                    <th>{sp.giaBan}</th>
                    <th>{sp.soLuong}</th>
                    <th>{sp.giaBan * sp.soLuong}</th>``
                    <th>
                        <button className='btn btn-danger' onClick={() => {
                            xoaGioHang(sp) ;
                        }}>Delete</button>
                    </th>
                    <th>
                        <button onClick={() => {
                            themSP(sp)
                        }} className='btn btn-success'>+</button>
                    </th>
                    <th>
                        <button onClick = {() => {
                            xoaSP(sp)
                        }} className='btn btn-danger'>-</button>
                    </th>
                </tr>)

            })

        }
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Ma SP</th>
                            <th>Ten SP</th>
                            <th>Hinh Anh</th>
                            <th>Price</th>
                            <th>Amount</th>
                            <th>Total Price</th>
                            <th></th>
                            <th></th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}
