import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AdminPanel from "./components/Admin/AdminPanel";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ForgetPassword from "./Pages/Login/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ContactForms from "./Pages/ContactForms/ContactForms";
import ClientInvoices from "./Pages/ClientInvoices/ClientInvoices";
import InvoiceForm from "./Pages/InvoiceForm/InvoiceForm";
import "./App.css";
import User from "./components/Admin/Users/User";
import AdminHeader from "./components/Admin/AdminHeader";
import AdminBody from "./components/Admin/AdminBody";
import Dashboard from "./components/Admin/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* --------- INITIAL ROUTE --------- */}
          <Route path="/" element={<Login />} />

          {/* --------- DASHBOARD --------- */}
          <Route path="/adminpanel" element={<AdminPanel />}>
            <Route path="users" element={<User />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          {/* --------- AUTHENTICATION --------- */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/formdata" element={<ContactForms />} />
          <Route path="/clientinvoice" element={<ClientInvoices />} />
          <Route path="/invoiceform" element={<InvoiceForm />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
