import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./pages/admin/Master";
import AddUser from "./pages/admin/user/AddUser";
import ManageUser from "./pages/admin/user/ManageUser";
import AddNew from "./pages/admin/branch-staff/AddNew";
import ManageList from "./pages/admin/branch-staff/ManageList";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Master />} />
            <Route path="/add-user" element={<AddUser/>} />
            <Route path="/manage-user" element={<ManageUser/>} />
            <Route path="/add-branch-staff" element={<AddNew/>} />
            <Route path="/manage-branch-staff" element={<ManageList/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
