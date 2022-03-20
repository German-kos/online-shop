import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter, Navigate } from "react-router-dom";
import { Login } from "./login-prot";

export function SiteRouter(props){
    return(
        <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
            <Routes>
                <Route path="/about" element={props.authorized ? <About props={props}/> : <Navigate to="/login"/>}/>
                {/* <Route path="/about" element={<About/>}/> */}
                <Route path="/" element={<Home props={props}/>}/>
                <Route path="/topics" element={<Topics/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}

function About(props){
    return(
        <>
        <h1>About page</h1>
        <h2>{props.authorized},{props.user}</h2>
        </>
    )
}
function Topics(props){
    return(
        <h1>Topics page</h1>
    )
}
function Home(props){
    return(
        <h1>Home page</h1>
    )
}