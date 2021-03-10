// import logo from './logo.svg';
import './App.css';
import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHang/BaiTapGioHangRedux';
import GameOanTuTi from './BaiTapRedux/GameOanTuTi/GameOanTuTi';
import GameXucXac from './BaiTapRedux/GameXucXac/GameXucXac';
import BTLayout from './BTLayout/BTLayout';
import DemoQLSP from './DemoQLSP/DemoQLSP';

function App() {
  return (
    <div className="App">
      {/* <BTLayout/> */}
      {/* <DemoQLSP/> */}
      {/* <BaiTapGioHangRedux/> */}
      <GameOanTuTi/>
      {/* <GameXucXac/> */}
    </div>
  );
}

export default App;
