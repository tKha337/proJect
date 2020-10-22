import React, { Component } from "react";
import { connect } from 'react-redux';


class NguoiChoi extends Component {
    render() {

        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img
                        style={{ transform: 'rotate(120deg)' }}
                        className='mt-3'
                        width={70} height={70}
                        src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
                        alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
                    />
                </div>
                <div className="speech-bubble"></div>
                <img
                    style={{ width: 150, height: 150 }}
                    src="./img/BTGAMETUXI/player.png"
                    alt="./img/BTGAMETUXI/player.png"
                />
                <div className="row">
                    {this.props.mangDatCuoc.map((item, index) => {

                        let border = {};
                        if (item.datCuoc) {
                            border = { border: '3px solid orange' };
                        }


                        return <div className="col-4">
                            <button onClick={() => {
                                this.props.datCuoc();
                            }} style={border} className='btnItem'>
                                <img
                                    width={35} height={35}
                                    src={item.hinhAnh}
                                    alt={item.hinhAnh}
                                />
                            </button>
                        </div>
                    })}

                </div>
            </div>
        );
    }
}


const mapDisatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KEO_BUA_BAO',
                maCuoc,
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
    }
}

export default connect(mapStateToProps, mapDisatchToProps)(NguoiChoi)
