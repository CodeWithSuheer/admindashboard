import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AdminPanel from "./components/Admin/AdminPanel";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ForgetPassword from "./Pages/Login/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpass" element={<ForgetPassword />} />
          <Route path="/resetpass" element={<ResetPassword />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
