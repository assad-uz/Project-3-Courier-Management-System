import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./pages/admin/Master";
import AddUser from "./pages/admin/user/AddUser";
import ManageUser from "./pages/admin/user/ManageUser";
import AddBranch from "./pages/admin/branch/AddBranch";
import ManageBranch from "./pages/admin/branch/ManageBranch";
import AddNew from './pages/admin/branch-staff/AddNew';
import ManageList from "./pages/admin/branch-staff/ManageList";
import ManageRegList from "./pages/admin/registration/ManageList";
import AddNewParcel from "./pages/admin/parcels/AddNewParcel";
import ManageParcelList from "./pages/admin/parcels/ManageParcelList";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Master />} />
            <Route path="/add-user" element={<AddUser/>} />
            <Route path="/manage-user" element={<ManageUser/>} />
            <Route path="/add-branch" element={<AddBranch/>} />
            <Route path="/manage-branch" element={<ManageBranch/>} />
            <Route path="/add-branch-staff" element={<AddNew/>} />
            <Route path="/manage-branch-staff" element={<ManageList/>} />
            <Route path="/reg-list" element={<ManageRegList/>} />
            <Route path="/add-parcel" element={<AddNewParcel/>} />
            <Route path="/manage-parcel" element={<ManageParcelList/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
