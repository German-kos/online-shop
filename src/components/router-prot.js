import { React, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";

export function SiteRouter(){
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
                <Route path="/about" element={<About/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/topics" element={<Topics/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    )
}

function About(){
    return(
        <h1>About page</h1>
    )
}
function Topics(){
    return(
        <h1>Topics page</h1>
    )
}
function Home(){
    return(
        <h1>Home page</h1>
    )
}