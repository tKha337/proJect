import React, { Component } from 'react'
import { connect } from 'react-redux'
import { datGheAction } from '../../redux/actions/BaiTapDatVeAction';
class HangGhe extends Component {
    renGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {


            let cssGheDaDat = '';
            let disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
                disabled = true;
            }

            // Xet trg thai ghe dang dat
            let cssGheDangDat = ''
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex
                (gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDaDat = 'gheDangChon'
            }


            return <button onClick={() => {
                this.props.datGhe(ghe);
            }} disabled={disabled} className={`ghe ${cssGheDaDat}
            ${cssGheDangDat}`} key={index}>
                {ghe.soGhe}
            </button>
        })
    }


    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className='rowNumber'>
                {hang.soGhe}
            </button>
        })


    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className="ml-4">
                {this.props.hangGhe.hang} {this.renSoHang()}
            </div>
        } else {
            return <div>

            </div>
        }

    }

    render() {
        return (
            <div className="text-light text-left mt-1 ml-3  " style={{ fontSize: 19 }}>
                {this.props.hangGhe.hang} {this.renGhe()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

const mapStateToPros = state => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(HangGhe)
