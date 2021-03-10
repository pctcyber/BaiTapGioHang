import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQua extends Component {
    render() {
        return (
            <div>
                <p style={{ fontWeight: 'bolder', fontSize: '35px', color: 'yellow', height: '104px' }}>{this.props.thongBao}</p>
                <p style={{ fontWeight: 'bolder', fontSize: '35px', color: 'green' }}>Số bàn thắng :  {this.props.soBanThang}</p>
                <p style={{ fontWeight: 'bolder', fontSize: '35px', color: 'green' }}>Số bàn choi : {this.props.soBanChoi}</p>
                <button onClick={() => { this.props.KetQua() }} className='btn btn-success'>Play Game</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    let { thongBao, soBanThang, soBanChoi, srcComputer } = state.GameOanTuTi;
    return {
        thongBao,
        soBanThang,
        soBanChoi,
        srcComputer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        KetQua: () => {

            let count = 10;
            let randomComputer = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'
                });

                count++;
                if (count > 50) {

                    clearInterval(randomComputer);
                   
                    dispatch({
                        type: 'KET_QUA'
                    });
                }

            }, 100);

        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(KetQua)