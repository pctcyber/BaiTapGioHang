import React, { Component } from 'react'
import data from '../data/data.json'
import GioHang from './GioHang'
import SanPhamChiTiet from './SanPhamChiTiet'
export default class DanhSachSanPham extends Component {

    state = {
        spChiTiet: {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: "AMOLED, 6.2\", Full HD+",
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./img/vsphone.jpg"
        },
        gioHang: [

            // {  maSP: 1, tenSP: 'VinSmart Live',giaBan: 5700000, hinhAnh:'./img/vsphone.jpg', soLuong:1  }
        ]
    }

    chiTietSanPham = (sanPhamClick) => {
        this.setState({
            spChiTiet: sanPhamClick,
        })
    };

    themGioHang = (sp) => {
        let spUpdate = {
            maSP: sp.maSP,
            tenSP: sp.tenSP,
            giaBan: sp.giaBan,
            hinhAnh: sp.hinhAnh,
            soLuong: 1,
        }

        let updateGioHang = [...this.state.gioHang];

        let index = updateGioHang.findIndex(sp => sp.maSP === spUpdate.maSP);

        if (index == -1) {

            // updateGioHang.push(spUpdate);
            updateGioHang = [...updateGioHang, spUpdate]

        } else {

            updateGioHang[index].soLuong += 1;

        }

        this.setState({
            gioHang: updateGioHang,
        })

    }

    themSP = (sp) => {

        let updateGioHang = [...this.state.gioHang];
        let index = updateGioHang.findIndex(sanPham => sanPham.maSP === sp.maSP);
        updateGioHang[index].soLuong += 1;
        this.setState({
            gioHang: updateGioHang,
        })

    }
    xoaSP = (sp) => {

        let updateGioHang = [...this.state.gioHang];
        let index = updateGioHang.findIndex(sanPham => sanPham.maSP === sp.maSP);

        if (updateGioHang[index].soLuong === 1) {
            updateGioHang.splice(index, 1)
        } else {

            updateGioHang[index].soLuong -= 1;

        }

        this.setState({
            gioHang: updateGioHang,
        })

    }

    
    xoaGioHang = (sp) => {
        let updateGioHang = [...this.state.gioHang];

        let index = updateGioHang.findIndex(sanPham => sanPham.maSP === sp.maSP);
        updateGioHang.splice(index, 1);
        // updateGioHang.filter(sanPham=>sanPham.maSP != sp.maSP);
        // console.log(updateGioHang);

        // let updateGioHang = this.state.gioHang.filter(sanPham => sanPham.maSP !== sp.maSP)

        // let updateGioHang = [...this.state.gioHang];
        // let updateGioHang = this.state.gioHang.filter((sanPham) => {
        //     return sanPham.maSP  !== sp.maSP;
        // })

        this.setState({
            gioHang: updateGioHang,
        })

    }


    tinhSoLuong = () => {

        return this.state.gioHang.reduce((sl, item) => {
            return sl += item.soLuong;
        }, 0);

    }

    renderSanPham = () => {

        return data.map((sp, index) => {
            return <div key={index} className='col-4 ' >
                <SanPhamChiTiet themGioHang={this.themGioHang} chiTietSanPham={this.chiTietSanPham} sanPham={sp} />
            </div>
        })

    };


    render() {

        let { hinhAnh, tenSP, cameraTruoc, heDieuHanh, manHinh, cameraSau, rom, ram } = this.state.spChiTiet;

        return (
            <div className='container'>

                <div className='mt-5'>
                    <h3 style={{ textAlign: 'right', color: 'green' }}>Gio Hang ({this.tinhSoLuong()}) </h3>
                    <GioHang xoaGioHang={this.xoaGioHang} xoaSP={this.xoaSP} themSP={this.themSP} gioHang={this.state.gioHang} />
                </div>

                <p style={{ textAlign: 'left', color: 'green', fontWeight: 'bold', marginTop: '15px' }}>Danh Sach San Pham</p>

                <div className="row ">
                    {this.renderSanPham()}
                </div>


                <div className="row " style={{ marginTop: 125 }}>
                    <div className="col-5">
                        <p style={{ fontWeight: 'bold', color: 'green' }}>{tenSP}</p>
                        <img src={hinhAnh} width='200' height='250' alt="#" />
                    </div>
                    <div className="col-7">
                        <table className='table'>
                            <thead>
                                <tr>Thong So Ki Thuat</tr>
                                <tr>
                                    <th>Man Hinh</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>He Dieu Hanh</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera Truoc</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camrera Sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <th>{rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
