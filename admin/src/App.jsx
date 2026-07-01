import React from "react";
import {Routes, Route} from 'react-router-dom'

import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Order'

function App() {
  return (
    <div>
      <Routes>

    <Route path="/" element={<Add />} />
    <Route path="/list" element={<List />} />
    <Route path="/order" element={<Order />} />


    </Routes>
    </div>
  );
}

export default App;
