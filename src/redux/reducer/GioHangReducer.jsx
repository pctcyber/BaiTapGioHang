

// initialize first value of store

const stateGioHang = {
    gioHang: [{maSP: 1, tenSP: 'VinSmart Live',giaBan: 5700000, hinhAnh:'./img/vsphone.jpg', soLuong:1}]
}

export const GioHangReducer = (state = stateGioHang, action ) =>{


    return {...state}
}