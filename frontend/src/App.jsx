import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import "./App.css";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ForgetPassword from "./Pages/Login/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import ContactForms from "./Pages/ContactForms/ContactForms";
import ClientInvoices from "./Pages/ClientInvoices/ClientInvoices";
import InvoiceForm from "./Pages/InvoiceForm/InvoiceForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpass" element={<ForgetPassword />} />
          <Route path="/resetpass" element={<ResetPassword />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/formdata" element={<ContactForms />} />
          <Route path="/clientinvoice" element={<ClientInvoices />} />
          <Route path="/invoiceform" element={<InvoiceForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
