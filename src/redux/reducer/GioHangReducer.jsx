const stateGioHangDefault = {
    gioHang: []
}

export const gioHangReducer = (state = stateGioHangDefault,action) => {
    
    switch (action.type) {

        case "THEM_GIO_HANG":{

            let gioHangUpdate = [...state.gioHang];
            let index = gioHangUpdate.findIndex(sp =>sp.maSP === action.spGioHang.maSP);
            if(index !==-1){
                gioHangUpdate[index].soLuong +=1;
            } else{
                gioHangUpdate.push(action.spGioHang);
            }

            // setState lai gio han
            state.gioHang = gioHangUpdate;
            return {...state}            
        } 
        case 'TANG_GIO_HANG':{
            let gioHangUpdate = [...state.gioHang];
            let index = gioHangUpdate.findIndex(sp=>sp.maSP === action.maSP);
            if(action.boolen){
                gioHangUpdate[index].soLuong += 1;
            } else{

                if(gioHangUpdate[index].soLuong > 1){
                    gioHangUpdate[index].soLuong += -1;
                } 
            }

            // setState lai gio Hang
            state.gioHang = gioHangUpdate;
            return {...state};
        }
        case 'DELETE':{
            let gioHangUpdate = [...state.gioHang];
            let index = gioHangUpdate.findIndex(sp=>sp.maSP === action.maSP);
            gioHangUpdate.splice(index,1);
            state.gioHang = gioHangUpdate;
            return {...state};
        }
    }

    return {...state}
}

