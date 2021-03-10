const stateDefault = {
    value: 'Tài',
    mangXX : [
        {diem : 1, hinhAnh: './img/1.png'},
        {diem : 1, hinhAnh: './img/1.png'},
        {diem : 1, hinhAnh: './img/1.png'}
    ],
    soBanThang: 0,
    soBanChoi: 0,
    result: 'Xỉu',
    score: '3',
};

export const taiXiuReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'TAI_XIU': {
            state.value = action.value;
            return { ...state };
        };

        case 'KET_QUA':{

            // b1: tao ra mang ngau nhien 
            let mangXXNN = [];
            
            for(let i =0; i< 3; i++){
            // tao ra xuc xac ngau nhien
                
                let soNN = (Math.floor(Math.random() * 6) + 1);
                let xucXacNN = {diem:soNN ,hinhAnh:`./img/${soNN}.png`};
                mangXXNN.push(xucXacNN);
            };

            let tongDiemXX = mangXXNN.reduce((tongDiem,xucXac,index) => {
                return tongDiem += xucXac.diem;
            },0);

            if((action.value === "Tài" & tongDiemXX > 11) || (action.value === "Xỉu" & tongDiemXX <= 11)){
                state.soBanThang += 1;
            } 

            tongDiemXX > 11 ? state.result = 'Tài' : state.result = 'Xỉu';
            state.score = tongDiemXX;
            state.soBanChoi += 1;
            state.mangXX = mangXXNN;
            return {...state}
        }
    }

    return { ...state }
}

