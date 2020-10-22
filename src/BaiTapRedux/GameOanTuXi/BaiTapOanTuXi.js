import React, { Component } from 'react'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import KetQuaTroCHoi from './KetQuaTroCHoi'
import NguoiChoi from './NguoiChoi'
import { connect } from 'react-redux';




class BaiTapOanTuXi extends Component {

    render() {

        return (

            <div className="gameOanTuXi">

                <div className='row text-center mt-5'>
                    <div className='col-4 '>
                        <NguoiChoi />
                    </div>
                    <div className='col-4 '>
                        <KetQuaTroCHoi />
                        <button onClick={() => {
                            this.props.playGame()
                        }} className='btn btn-success p-3 display-4 mt-2'>Play Game</button>
                    </div>
                    <div className='col-4 '>
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            let randomComputerItem = setInterval(() => {
                dispatch({
                    // Khai báo hàm lặp đi lặp lại

                    type: 'RAN_DOM'

                })
                count++;
                if (count >= 10) {
                    clearInterval(randomComputerItem);


                    dispatch({
                        type: 'END_GAME',
                    })
                }
            }, 100);

        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi)
