import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./pages/Master";
import AddUser from "./pages/users/AddUser";
import ManageUser from "./pages/users/ManageUser";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Master />} />
            <Route path="/" element={<AddUser />} />
            <Route path="/" element={<ManageUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
