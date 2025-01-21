import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import HomePage from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import { Toaster } from 'react-hot-toast';
import Notification from "./pages/home/Notification";
import Profile from "./pages/home/Profile";
import SideBar from "./components/content/SideBar";
import RightBar from "./components/content/RightBar";
import { useAuthContext } from "./context/AuthContextProvider";
const App: React.FC = (): JSX.Element => {
  const { authUser } = useAuthContext();
  return (
    <div className="container flex">
          {authUser && (
            <div className="w-[20%] sm:w-[25%] lg:w-[25%] bg-black flex flex-col md:items-end">
              <SideBar />
            </div>
          )}
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={authUser ? <HomePage /> : <Navigate to='/login' />} />
            <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to='/' />} />
            <Route path="/login" element={!authUser ? <Login /> : <Navigate to='/' />} />
            <Route path="/notification" element={authUser ? <Notification /> : <Navigate to='/login' /> } />
            <Route path="/profile/:username" element={authUser && <Profile /> } />
          </Routes>
          {authUser && (
            <div className="hidden lg:block w-0 lg:w-[25%] border-l border-[#333] border-solid">
              <RightBar />
            </div>
          )}
          <Toaster />
    </div>
  )
}
export default App