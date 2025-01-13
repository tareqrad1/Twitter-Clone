import { Route, Routes } from "react-router-dom"
import Signup from "./pages/auth/Signup"
import Login from "./pages/auth/Login"
import HomePage from "./pages/home/HomePage"
import NotFound from "./pages/notfound/NotFound"

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App