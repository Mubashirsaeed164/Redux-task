import './Style/App.css'
import './Style/NormalizeCss.css'
import DashBoard from './Pages/DashBoard';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import SearchBar from './Pages/SearchImages';
import SearchUser from './Pages/SearchUser';
import UserProfile from './Pages/UserProfile';
import History from './Pages/History';
import ImageHistory from './Pages/ImageHistory';
import HistoryImageDisplay from './Component/HistoryImageDisplay';
import UserHistory from './Pages/UserHistory';
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard/>}></Route>
        <Route path='searchimage' element={<SearchBar/>}></Route>
        <Route path='searchimage/:query' element={<SearchBar/>}></Route>
        <Route path='searchuser' element={<SearchUser/>}></Route>
        <Route path='searchuser/:queryUser' element={<SearchUser/>}></Route>
        <Route path='userprofile' element={<UserProfile/>}></Route>
        <Route path='userprofile/:username' element={<UserProfile/>}></Route>
        <Route path='history' element={<History/>}></Route>
        <Route path="imagehistory" element={<ImageHistory/>}></Route>
        <Route path='historyimagedisplay' element={<HistoryImageDisplay/>}></Route>
        <Route path='/historyimagedisplay/:id' element={<HistoryImageDisplay/>}></Route>
        <Route path='userhistory' element={<UserHistory/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
