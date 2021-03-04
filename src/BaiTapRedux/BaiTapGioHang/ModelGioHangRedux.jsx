import React, { Component } from 'react'
import {connect} from 'react-redux'
class ModelGioHangRedux extends Component {
    
    renderGioHang = () => {

        return this.props.gioHang.map((sanPham,index) => {
            return (
            <tr key={index}>
                <td>{sanPham.maSP}</td>
                <td>{sanPham.tenSP}</td>
                <td>
                    <img src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width = '70px' height = '50px' />
                </td>
                <td>{sanPham.soLuong}</td>
                <td>{(sanPham.giaBan).toLocaleString()}</td>
                <td>{(sanPham.giaBan * sanPham.soLuong).toLocaleString()}</td>
                <td>
                    <button className='btn btn-success' onClick ={() => {
                        this.props.tangGiamSPGH(sanPham.maSP,true)
                    }}>+</button>
                </td>
                <td>
                    <button className='btn btn-warning' onClick = {() => {
                        this.props.tangGiamSPGH(sanPham.maSP,false)
                    }}>-</button>
                </td>
                <td>
                    <button className='btn btn-danger' onClick = {
                        () => {
                         this.props.deleteSPGH(sanPham.maSP);   
                        }
                    }>Delete</button>
                </td>

            </tr> )
        })

    }    

    render() {
        return (
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th> Code</th>
                            <th> Name</th>
                            <th> Image</th>
                            <th> Amount</th>
                            <th> Price</th>
                            <th> Total Price</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        gioHang: state.GioHangReducer.gioHang,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        tangGiamSPGH: (maSP,boolen) => {
            const action = {
                type: 'TANG_GIO_HANG',
                maSP: maSP,
                boolen: boolen,
            };
            dispatch(action);
        },

        deleteSPGH: (maSP) => {
            const action = {
                type:'DELETE',
                maSP: maSP,
            };
            dispatch(action) ;
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProps)(ModelGioHangRedux)