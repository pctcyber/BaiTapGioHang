import React, { Component } from 'react'
import './buble.css'
// connect to redux
import {connect} from 'react-redux'

class NguoiChoi extends Component {

    
    render() {
        return (
            <div className='nguoichoi_cover'>
                <div className='nguoichoi'>
                    <img src = {`./img/gameOanTuTi/${this.props.src}.png`}  alt='hinhAnh' style={{ width: 50, height: 50 }} />
                </div>
                <div className="speech-bubble"></div>  
                <div >
                    <img src="./img/gameOanTuTi/player.png" alt="hinhAnh" style={{ width: 180, height: 150 }} />
                </div>

                <div style={{display:'flex'}} >

                    <div className='setup_size'  onClick = {() => {
                        this.props.changeImage('bao') }}>
                        <img src="./img/gameOanTuTi/bao.png" style = {{width: 40,height:40}} alt="hinhAnh"/>
                    </div>

                    <div className='setup_size mx-3'  onClick = {() => {
                        this.props.changeImage("keo")

                    }}>
                        <img src="./img/gameOanTuTi/keo.png" style = {{width: 40,height:40}} alt="hinhAnh"/>
                    </div>

                    <div className='setup_size' onClick = {() => {

                        this.props.changeImage('bua')
                    }}>
                        <img src="./img/gameOanTuTi/bua.png" style = {{width: 40,height:40}} alt="hinhAnh"/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps  = (state) =>{ 

    return {

        src: state.GameOanTuTi.oanTuTi,
    }
}

const mapDispatchToProps  = (dispatch) =>{ 

    return {

        changeImage: (hanhdong) => {
            
            const action = {
                type: 'THAY DOI',
                hanhdong,
            };

            dispatch(action);
        }

    }
 } 

 export default connect(mapStateToProps,mapDispatchToProps)(NguoiChoi)
