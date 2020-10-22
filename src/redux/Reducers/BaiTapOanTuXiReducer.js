const stateDefault = {
    mangDatCuoc: [
        { ma: "keo", hinhAnh: "./img/BTGAMETUXI/keo.png", datCuoc: false },
        { ma: "bua", hinhAnh: "./img/BTGAMETUXI/bua.png", datCuoc: false },
        { ma: "bao", hinhAnh: "./img/BTGAMETUXI/bao.png", datCuoc: true },
    ],
    ketQua: "WIN",
    soBanThang: 0,
    soBanChoi: 0,
    computer: { ma: "bua", hinhAnh: "./img/BTGAMETUXI/bua.png" },
};

const BaiTapGameTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "CHON_KEO_BUA_BAO": {
            let mangCuocUpdate = [...state.mangDatCuoc];
            //   Tạo ra mảng cược mới từ mảng cược cũ và action.maCuoc cũ
            mangCuocUpdate = mangCuocUpdate.map((item, index) => {
                if (item.ma === action.maCuoc) {
                    return { ...item, datCuoc: false };
                }
                return {
                    ...item,
                    datCuoc: true,
                };
            });
            state.mangDatCuoc = mangCuocUpdate;
            return { ...state };
            console.log(action);
            // Tìm ra maCuoc đê change trạng thái đặt cược ứng với mã cược đó
        }

        case "RAN_DOM": {


            let soNgauNhien = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

            state.computer = quanCuocNgauNhien;
            return { ...state }
        }
        case "END_GAME": {
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            state.soBanChoi += 1;
            switch (player.ma) {
                case 'keo':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Hòa';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Thua';
                    } else {
                        state.soBanThang += 1;
                        state.ketQua = 'WIN'
                    }
                    break;
                case 'bua':
                    if (computer.ma === 'keo') {
                        state.soBanThang += 1;
                        state.ketQua = 'WIN';
                    } else if (computer.ma === 'bua') {
                        state.ketQua = 'Hòa';
                    } else {
                        state.ketQua = 'Thua'
                    }
                    break;
                case 'bao':
                    if (computer.ma === 'keo') {
                        state.ketQua = 'Thua';
                    } else if (computer.ma === 'bua') {
                        state.soBanThang += 1;
                        state.ketQua = 'WIN';
                    } else {
                        state.ketQua = 'Hòa'
                    }
                default: state.ketQua = 'WIN';

                    return { ...state };

            }



        }

        default: return { ...state };

    }
};

export default BaiTapGameTuXiReducer;
