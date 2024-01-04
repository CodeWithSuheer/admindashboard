import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import "./App.css";
import AdminPanel from "./components/Admin/AdminPanel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
