import React, { Component } from 'react';
import buble from './buble.css'
import KetQua from './KetQua';
import MayChoi from './MayChoi';
import NguoiChoi from './NguoiChoi';

export default class GiaoDienGame extends Component {
    render() {
        return (
            <div className='gameoantuti'>
                <div className="row">
                        <div className="col-4 item_colum">
                            <NguoiChoi />
                        </div>
                        <div className="col-4">
                           <KetQua/>
                        </div>
                        <div className="col-4">
                            <MayChoi />
                        </div>

                </div>

            </div>
        )
    }
}
