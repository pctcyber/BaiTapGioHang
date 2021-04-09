// import logo from './logo.svg';
import './App.css';
import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHang/BaiTapGioHangRedux';
import GameOanTuTi from './BaiTapRedux/GameOanTuTi/GameOanTuTi';
import GameXucXac from './BaiTapRedux/GameXucXac/GameXucXac';
import BaiTapReduxSaga from './BaiTapReduxSaga/BaiTapReduxSaga';
import BTLayout from './BTLayout/BTLayout';
import DemoQLSP from './DemoQLSP/DemoQLSP';
import LoadingComponent from './GlobalSetting/LoadingComponent/LoadingComponent';
import ToDoListRCC from './ToDoList/ToDoListRCC';
import ToDoListRedux from './ToDoList/ToDoListRedux';
import ToDoListRFC from './ToDoList/ToDoListRFC';

function App() {
  return (
    <div className="App">
      {/* <BTLayout/> */}
      {/* <DemoQLSP/> */}
      {/* <BaiTapGioHangRedux/> */}
      {/* <GameOanTuTi/> */}
      {/* <GameXucXac/> */}
      {/* <ToDoListRFC/> */}
      {/* <ToDoListRCC/> */}
      {/* <ToDoListRedux/> */}
      <LoadingComponent/>
      <BaiTapReduxSaga/>
    </div>
  );
}

export default App;
