"use client";
import { Sidebar } from "keep-react";
import {
  ChartBar,
  Chat,
  Handbag,
  LockKey,
  SignOut,
  File,
  ShoppingBagOpen,
  ShoppingCart,
  SquaresFour,
  TreeStructure,
  Users,
} from "phosphor-react";
import { Link, Outlet } from "react-router-dom";
import "./AdminPanel.css";

const AdminBody = () => {
  return (
    <>
      <div className="adminBody bg-slate-300">
        {/* ------------ DASHBOARD SIDE MENU ------------  */}
        <div className="admin_sideMenu max-w-72">
          <Sidebar
            className=""
            aria-label="Sidebar with multi-level dropdown example"
            style={{ minHeight: "92.1vh", backgroundColor: "#fff" }}
          >
            <Sidebar.ItemGroup>
              <Link to="/adminpanel/dashboard">
                <Sidebar.Item icon={<SquaresFour size={24} />}>
                  Dashboard
                </Sidebar.Item>
              </Link>
              <Link to="/adminpanel/users">
                <Sidebar.Item icon={<Users size={24} />}>Users</Sidebar.Item>
              </Link>
              <Sidebar.Item href="#" icon={<Chat size={24} />}>
                Contact Queries
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={<Users size={24} />}>
                Projects
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={<File size={24} />}>
                Generate Invoice
              </Sidebar.Item>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Link to="/">
                <Sidebar.Item icon={<SignOut size={24} />}>Login</Sidebar.Item>
              </Link>
              <Link to="/signup">
                <Sidebar.Item icon={<SignOut size={24} />}>
                  Sign Up
                </Sidebar.Item>
              </Link>
              <Link to="/forgetpassword">
                <Sidebar.Item icon={<SignOut size={24} />}>
                  Forget Password
                </Sidebar.Item>
              </Link>
              <Link to="/resetpassword">
                <Sidebar.Item icon={<SignOut size={24} />}>
                  Reset Password
                </Sidebar.Item>
              </Link>
            </Sidebar.ItemGroup>
          </Sidebar>
        </div>
        {/* ------------ DASHBOARD DISPLAYER ------------  */}
        <div className="admin_display">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminBody;
