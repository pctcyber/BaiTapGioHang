import React, { Component } from 'react'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'
import ModelGioHangRedux from './ModelGioHangRedux'

export default class BaiTapGioHangRedux extends Component {
    render() {
        return (
            <div>
                <h3>Bai tap gio hang redux</h3>
                <ModelGioHangRedux/>
                <DanhSachSanPhamRedux/>
            </div>
        )
    }
}
