import React from 'react';
//import logo from './logo.svg';

import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";

import './App.css';

function App() {
  return (
    

        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">Listagem de usuários</Link>
            </li>
          </ul>

          <ApplicationRoutes />
        </div>


    
  );
}

export default App;
