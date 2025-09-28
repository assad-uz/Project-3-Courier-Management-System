import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./pages/admin/Master";
import AddUser from "./pages/admin/user/AddUser";
import ManageUser from "./pages/admin/user/ManageUser";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Master />} />
            <Route path="/add-user" element={<AddUser/>} />
            <Route path="/manage-user" element={<ManageUser/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
