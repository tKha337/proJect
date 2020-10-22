import React, { Component } from 'react'
import { connect } from 'react-redux'



class KetQuaTroCHoi extends Component {
    render() {
        return (
            <div>
                <div className='display-4 text-warning'>
                    {this.props.ketQua}
                </div>
                <div className='display-4 text-success'> Số bàn thắng:
                   <span className="text-warning">{this.props.soBanThang}</span>
                </div>
                <div className='display-4 text-danger'> Số bàn chơi:
                <span className="text-warning">{this.props.soBanChoi}</span>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ketQua: state.BaiTapOanTuXiReducer.ketQua,
        soBanChoi: state.BaiTapOanTuXiReducer.soBanChoi,
        soBanThang: state.BaiTapOanTuXiReducer.soBanThang,

    }
}

export default connect(mapStateToProps)(KetQuaTroCHoi)
