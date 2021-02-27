import React, { Component } from 'react'

// connect reactComponent to reduxStore 

import { connect } from 'react-redux'

class ModelGioHangRedux extends Component {

    rengerGioHang = () => {

        return this.props.gioHang.map((item, index) => {

            return <div className='col-4' key={index}>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src={item.hinhAnh} alt={item.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{item.tenSP}</h4>
                        <p className="card-text">{item.giaBan}</p>
                    </div>
                </div>

            </div>
        })

    }


    render() {
        console.log(this.props.gioHang);
        return (
            <div className="container">
            <div className=' row'>
                {this.rengerGioHang()}
            </div>
            </div>
            
            
        )
    }
}


const mapStateToProps = (state) => {
    return {
        gioHang: state.GioHangReducer.gioHang,
    }
}

export default connect(mapStateToProps, null)(ModelGioHangRedux)