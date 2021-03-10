const stateDefault = {

    oanTuTi: 'bao',
    oanTuTiChoMay: 'bao',
    thongBao: "I'm Iron man I love you 3000!",
    soBanThang: 0,
    soBanChoi: 0,
    srcComputer: 'bao',

}


export const GameOanTuTi = (state = stateDefault, action) => {

    console.log(action.type);
   
    switch (action.type) {
        case 'THAY DOI': {
            state.oanTuTi = action.hanhdong;
            return { ...state };
        }

        case "RAN_DOM": {
            let soNN = Math.floor(Math.random() * 3);
            if (soNN == 0) {
                state.oanTuTiChoMay = 'keo'
            } else if (soNN == 1) {
                state.oanTuTiChoMay = 'bao'
            } else {
                state.oanTuTiChoMay = 'bua'
            };
            return {...state}

        }

        case 'KET_QUA':{
            if (state.oanTuTi === state.oanTuTiChoMay) {
                state.thongBao = 'Bạn hòa'
            } else {

                if ((state.oanTuTi === 'bao' && state.oanTuTiChoMay === 'bua') || (state.oanTuTi === "keo"
                    && state.oanTuTiChoMay === 'bao') || (state.oanTuTi === 'bua' && state.oanTuTiChoMay === "keo")) {
                    state.thongBao = "I'm Iron man I love you 3000!";
                    state.soBanThang += 1;
                } else {

                    state.thongBao = 'Bạn thua sml !'
                }
            }

            state.soBanChoi += 1;
            return { ...state }
        }
        default:
            return { ...state }
    }
}


