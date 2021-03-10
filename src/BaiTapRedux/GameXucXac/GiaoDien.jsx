import React, { Component } from 'react'
import style from './style.css'
import { connect } from 'react-redux'

class GiaoDien extends Component {

    renderXX = () => {

        return this.props.mangXucXac.map((xucXac, index) => {

            return <img src={xucXac.hinhAnh} style={{ width: 70, height: 70, marginLeft: 7 }} alt={xucXac.hinhAnh} key={index} />
        })
    }

    render() {
        return (
            <div className='giaodiengame'>
                <p className = 'display-4'>Game Xúc Xắc</p>
                <div className="row p-5">
                    <div className="col-4 ">
                        <button onClick={() => {
                            this.props.thayDoiValue("Tài")
                        }} className='btn btn-danger p-5'>Tài</button>
                    </div>
                    <div className="col-4">

                        <div> {this.renderXX()} </div>

                        <div className='mt-5 display-4'>{this.props.score} điểm :{this.props.result}</div>

                    </div>
                    <div className="col-4">
                        <button onClick={() => {
                            this.props.thayDoiValue("Xỉu")
                        }} className='btn btn-success p-5'>Xỉu</button>
                    </div>
                </div>

                <p style={{ fontWeight: 'bold', fontSize: '35px' }}>Your choose <span style={{ color: 'red' }}>{this.props.taiXiu}</span></p>
                <p style={{ fontWeight: 'bold', fontSize: '35px' }}>So ban thang <span style={{ color: 'green' }}>{this.props.soBanThang}</span></p>
                <p style={{ fontWeight: 'bold', fontSize: '35px' }}>So ban choi <span style={{ color: 'blue' }}>{this.props.soBanChoi}</span></p>

                <button onClick={() => {
                    this.props.ketQua(this.props.taiXiu)
                }} className='btn btn-success'>Play Game</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        taiXiu: state.TaiXiuReducer.value,
        mangXucXac: state.TaiXiuReducer.mangXX,
        soBanThang: state.TaiXiuReducer.soBanThang,
        soBanChoi: state.TaiXiuReducer.soBanChoi,
        score: state.TaiXiuReducer.score,
        result: state.TaiXiuReducer.result,
    }
};

const mapDispatchToProps = (dispatch) => {

    return {
        thayDoiValue: (value) => {
            const action = {
                type: 'TAI_XIU',
                value
            };
            dispatch(action);
        },

        ketQua: (value) => {
            const action = {
                type: 'KET_QUA',
                value,
            }
            dispatch(action)
        }


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GiaoDien);

