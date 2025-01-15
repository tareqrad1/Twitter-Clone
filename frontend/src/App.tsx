import { Route, Routes } from "react-router-dom";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import HomePage from "./pages/home/Home";
import NotFound from "./pages/notfound/NotFound";
import { Toaster } from 'react-hot-toast';


const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </>
  )
};
export default App