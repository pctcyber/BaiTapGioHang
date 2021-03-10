import React, { Component } from 'react'
import './buble.css'
import { connect } from 'react-redux'

class MayChoi extends Component {


    render() {

        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -10px;}
            25% {top: 40px;}
            50% {top: -10px;}
            75% {top: 40px;}
            100% {top: 0px;}
          }`

        return (
            <div>
                <style>
                    {keyframe}
                </style>
                <div className='nguoichoi' style={{position:'relative'}}>
                    <img src={`./img/gameOanTuTi/${this.props.oanTuTi}.png`} alt="hinhAnh" style={{ width: 50, height: 50,position:'absolute',animation:`randomItem${Date.now()} 0.1s ` }} />
                </div>
                <div className="speech-bubble"></div>
                <div>
                    <img src="./img/gameOanTuTi/playerComputer.png"
                        style={{ width: 171, height: 200 }} alt="hinhAnh" />
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        oanTuTi: state.GameOanTuTi.oanTuTiChoMay,
    }
}

export default connect(mapStateToProps)(MayChoi)