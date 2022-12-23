import {  Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { StickyNav } from "react-js-stickynav";
import "react-js-stickynav/dist/index.css";
import { routes } from "./routes";
 import Photo from './components/Photo'

import Nav from "./modules/Nav";
function App() {
 

  return (
    <div>
      <StickyNav length="40">
        
        <Nav />
      </StickyNav>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        {routes.map((route) => (
          <Route key={route.key} path={route.path} element={route.component} />
        ))}
         <Route path="/photos/:id" element={< Photo/>} />
         
      </Routes>
    </div>
  );
}

export default App;
