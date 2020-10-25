import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Main from './BaiTapThucHanhLayout/Main';
import BaiTapOanTuXi from './BaiTapRedux/GameOanTuXi/BaiTapOanTuXi';
import BaiTapBookingTicket from './BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket';
// import Header from './BaiTapThucHanhLayout';

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      {/* <BaiTapOanTuXi /> */}
      <BaiTapBookingTicket />
    </div>
  );
}


export default App;
