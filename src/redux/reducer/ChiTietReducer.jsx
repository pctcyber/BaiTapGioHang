
const stateChiTietDefault = {

    spDetail: {
        "maSP": 1,
        "tenSP": "VinSmart Live",
        "manHinh": "AMOLED, 6.2\", Full HD+",
        "heDieuHanh": "Android 9.0 (Pie)",
        "cameraTruoc": "20 MP",
        "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
        "ram": "4 GB",
        "rom": "64 GB",
        "giaBan": 5700000,
        "hinhAnh": "./img/vsphone.jpg"
    }
}

export const chiTietReducer = (state = stateChiTietDefault,action) => {

    switch (action.type) {
        case 'CHITIET-SANPHAM':{

            // setState lai chi tiet san pham
            state.spDetail = action.sanPham;
            return {...state}
        }
            
            break;
    
        default:
            break;
    }
    return {...state}
}