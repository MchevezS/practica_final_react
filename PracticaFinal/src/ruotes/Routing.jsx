import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';



const Routing = () => {
  return (
    <Router>
     <Routes>
       <Route path="/Login" element={<Login />} />
       <Route path='/' element={<Register/>}/>
     </Routes>
    </Router>
   );
};
export default Routing;