import React, { Component } from 'react'
import {connect} from 'react-redux'

class ModelDetail extends Component {
    render() {
        let{spChiTiet} = this.props;
        return (
                    <div className="modal fade"  id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content" style={{width: 646}}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Specification</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body ">
                                    <div className="row">
                                            <div className="col-5">
                                                <img src={spChiTiet.hinhAnh} alt='hinhAnh' width='100%' height='180'/>
                                            </div>
                                            <div className="col-7 ">
                                                <table className='table'>
                                                    <thead>
                                                        <tr>
                                                            <th>Product's Info</th>
                                                        </tr>
                                                       
                                                    </thead>
                                                    <tbody className='text-left'>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>{spChiTiet.tenSP}</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Screen</th>
                                                            <th>{spChiTiet.manHinh}</th>
                                                        </tr>
                                                        <tr>
                                                            <th>System</th>
                                                            <th>{spChiTiet.heDieuHanh}</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Camera in front of</th>
                                                            <th>{spChiTiet.cameraTruoc}</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Camera behind</th>
                                                            <th>{spChiTiet.cameraSau}</th>
                                                        </tr>
                                                        <tr>
                                                            <th>RAM</th>
                                                            <th>{spChiTiet.ram}</th>
                                                        </tr>
                                                        <tr>
                                                            <th>ROM</th>
                                                            <th>{spChiTiet.rom}</th>
                                                        </tr>
                                                        <tr>
                                                            <th>Price</th>
                                                            <th>{spChiTiet.giaBan}</th>
                                                        </tr>
                                                        
                                                    </tbody>
                                                </table>
                                            </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        spChiTiet: state.ChiTietReducer.spDetail,
    }
};

export default connect(mapStateToProp,null)(ModelDetail);
