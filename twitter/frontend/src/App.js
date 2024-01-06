import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './pages/home';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import PageLoading from './pages/PageLoading';


// home sidebar routes
import Feed from './pages/Feed/Feed';
import Explore from './pages/Explore/Explore';
import Notifications from './pages/Notifications/Notifications';
import Messages from './pages/Messages/Messages';
import Bookmarks from './pages/Bookmarks/Bookmarks';
import Lists from './pages/Lists/Lists';
import Profile from './pages/Profile/Profile';
import More from './pages/More/More';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>}>
            <Route index element={<Feed/>} />
          </Route>
          
          <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute>}>
              {/* child routes of sidebar */}
              <Route path="feed" element={< Feed/>} />
              <Route path="explore" element={< Explore/>} />
              <Route path="notification" element={< Notifications/>} />
              <Route path="messages" element={< Messages/>} />
              <Route path="bookmark" element={< Bookmarks/>} />
              <Route path="lists" element={< Lists/>} />
              <Route path="profile" element={< Profile/>} />
              <Route path="feed" element={< Feed/>} />
              <Route path='more' element={< More />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/page-loading' element={< PageLoading/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;

