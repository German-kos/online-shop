import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import SignIn from "./sign-in";
import EntryPoint from "./entry-point";

export function SiteRouter({formSubmit,currentUser}) {
  return (  
    <BrowserRouter>
    <Link to="/login"/>
    <Routes>
      <Route
        path="/"
        element={
          currentUser !== undefined ? (
            <EntryPoint currentUser={currentUser} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route path="/login" element={currentUser !== undefined ? <Navigate to="/"/> : <SignIn formSubmit={formSubmit} currentUser={currentUser}/>}/>
      </Routes>
    </BrowserRouter>
  );
}
