import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Master from "./pages/admin/Master";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Master />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
