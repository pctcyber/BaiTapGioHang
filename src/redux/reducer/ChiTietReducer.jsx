
const stateChiTietDefault = {
    spDetail: {
            
    }
}

export const chiTietReducer = (state = stateChiTietDefault,action) => {
    switch (action.type) {
        case 'CHITIET-SANPHAM':{

            // setState lai chi tiet san pham
            state.spDetail = action.sanPham;
            return {...state}
        }
    }
    return {...state}
}